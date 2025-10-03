function authenticate(req, res, next) {
  const expectedToken = process.env.API_KEY;

  if (!expectedToken) {
    console.error('API_KEY environment variable is not configured.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const authHeader = req.header('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const providedToken = authHeader.slice('Bearer '.length).trim();

  if (providedToken !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return next();
}

module.exports = { authenticate };
