const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const { User } = require('../models/index.js');

const verifyToken = (req, res, next) => {
  const { token } = req.session;

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  if (user.role === 'ROLE_ADMIN') {
    next();
    return;
  }

  res.status(403).send({
    message: 'Require Admin Role!',
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
};

module.exports = authJwt;
