var https = require('https');
var PRICES = {
    basico: 'price_1TSLrU8BM5xw1iV9oaDpow9U',
    pro:    'price_1TSLsg8BM5xw1iV9phQQMXEB'
};
var URL_BASE = 'https://obra-digital-mx.vercel.app';
module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { return res.status(200).end(); }
    if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' }); }
    var secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) { return res.status(500).json({ error: 'STRIPE_SECRET_KEY no configurada' }); }
    var plan = (req.body && req.body.plan) || 'pro';
    var priceId = PRICES[plan] || PRICES.pro;
    var params = [
        'mode=subscription',
        'line_items[0][price]=' + priceId,
        'line_items[0][quantity]=1',
        'success_url=' + encodeURIComponent(URL_BASE + '/success.html?session_id={CHECKOUT_SESSION_ID}'),
        'cancel_url=' + encodeURIComponent(URL_BASE + '/?cancelado=1'),
        'locale=es',
        'payment_method_types[0]=card',
        'allow_promotion_codes=true',
        'subscription_data[metadata][plan]=' + plan
    ].join('&');
    var postData = Buffer.from(params);
    var auth = Buffer.from(secretKey + ':').toString('base64');
    var options = {
        hostname: 'api.stripe.com', port: 443,
        path: '/v1/checkout/sessions', method: 'POST',
        headers: {
            'Authorization': 'Basic ' + auth,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length,
            'Stripe-Version': '2024-04-10'
        }
    };
    return new Promise(function(resolve) {
        var stripeReq = https.request(options, function(stripeRes) {
            var data = '';
            stripeRes.on('data', function(chunk) { data += chunk; });
            stripeRes.on('end', function() {
                try {
                    var session = JSON.parse(data);
                    if (session.url) {
                        res.status(200).json({ url: session.url });
                    } else {
                        var errMsg = (session.error && session.error.message) || 'Error creando sesion';
                        res.status(400).json({ error: errMsg });
                    }
                } catch (e) { res.status(500).json({ error: 'Error procesando respuesta' }); }
                resolve();
            });
        });
        stripeReq.on('error', function() { res.status(500).json({ error: 'Error de conexion' }); resolve(); });
        stripeReq.setTimeout(15000, function() { stripeReq.destroy(); res.status(500).json({ error: 'Timeout' }); resolve(); });
        stripeReq.write(postData);
        stripeReq.end();
    });
};
