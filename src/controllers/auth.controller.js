const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/index.js');
const config = require('../config/auth.config.js');

exports.singup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: 'ROLE_USER',
      active: true,
    });

    if (!user) {
      return res.status(500).json({
        message: 'Error creating user',
      });
    }
    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).json({
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign(
      { id: user.id },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400,
      },
    );

    res.header('x-access-token', token);

    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).json({ message: 'User logged out successfully!' });
  } catch (error) {
    this.next(error);
  }
};
