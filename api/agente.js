export default async function handler(req, res) {
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
    return res.status(500).json({ error: 'API key no configurada' });
  }

  const body = req.body;
  if (!body || !body.contents) {
    return res.status(400).json({ error: 'Solicitud invalida' });
  }

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + key,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: body.system_instruction || null,
          contents: body.contents
        })
      }
    );
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch(err) {
    console.error('Error llamando Gemini:', err.message);
    return res.status(503).json({ error: 'Error de red: ' + err.message });
  }
}
