const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key'; // Replace with your secret key

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send("Invalid token.");
    }
};

module.exports = authenticate;
