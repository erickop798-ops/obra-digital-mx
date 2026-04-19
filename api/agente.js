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
  var key = process.env.GEMINI_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key no configurada' });
  }
  var body = req.body;
  if (!body || !body.contents) {
    return res.status(400).json({ error: 'Solicitud invalida' });
  }

  var intentos = 0;
  var maxIntentos = 3;
  var respuestaFinal = null;
  var statusFinal = 200;

  while (intentos < maxIntentos) {
    var geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + key,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: body.system_instruction,
          contents: body.contents
        })
      }
    );
    if (geminiRes.status === 429 && intentos < maxIntentos - 1) {
      intentos++;
      await new Promise(function(resolve) { setTimeout(resolve, 2000 * intentos); });
      continue;
    }
    respuestaFinal = await geminiRes.json();
    statusFinal = geminiRes.status;
    break;
  }

  return res.status(statusFinal).json(respuestaFinal);
};
