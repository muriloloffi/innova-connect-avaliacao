const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/index.js');
const config = require('../config/auth.config.js');

class AuthController {
  static async signup(req, res) {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(8)),
        role: 'ROLE_USER',
        active: true,
      });

      if (!user) {
        return res.status(500).json({
          message: 'Error creating user',
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    return res.status(201).json({ message: 'User registered successfully!' });
  }

  static async signin(req, res) {
    let user;
    try {
      user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
      }

      const passwordIsValid = await bcrypt.compare(
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
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  static async signout(req, res) {
    try {
      req.session = null;
    } catch (error) {
      this.next(error);
    }
    return res.status(200).json({ message: 'User logged out successfully!' });
  }
}

module.exports = AuthController;
