const https = require('https');

module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.GEMINI_KEY;
  if (!key) {
    console.error('GEMINI_KEY no configurada en variables de entorno');
    return res.status(500).json({ error: 'API key no configurada en el servidor' });
  }

  const body = req.body;
  if (!body || !body.contents) {
    return res.status(400).json({ error: 'Solicitud invalida: falta contents' });
  }

  const payload = JSON.stringify({
    system_instruction: body.system_instruction || null,
    contents: body.contents
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: '/v1beta/models/gemini-1.5-flash:generateContent?key=' + key,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise(function(resolve) {
    const geminiReq = https.request(options, function(geminiRes) {
      let data = '';
      geminiRes.on('data', function(chunk) { data += chunk; });
      geminiRes.on('end', function() {
        try {
          const parsed = JSON.parse(data);
          console.log('Gemini status:', geminiRes.statusCode);
          res.status(geminiRes.statusCode).json(parsed);
        } catch(e) {
          console.error('Error parseando respuesta Gemini:', e.message);
          res.status(500).json({ error: 'Error procesando respuesta de IA' });
        }
        resolve();
      });
    });

    geminiReq.on('error', function(e) {
      console.error('Error de red llamando a Gemini:', e.message);
      res.status(503).json({ error: 'Error de red: ' + e.message });
      resolve();
    });

    geminiReq.setTimeout(25000, function() {
      console.error('Timeout llamando a Gemini');
      geminiReq.destroy();
      res.status(504).json({ error: 'Timeout: Gemini tard\u00f3 demasiado' });
      resolve();
    });

    geminiReq.write(payload);
    geminiReq.end();
  });
};
