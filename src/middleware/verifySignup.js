const UserRepository = require('../repositories/UserRepository.js');

const userRepository = new UserRepository();

const checkDuplicateEmail = async (req, res, next) => {
  const user = await userRepository.getUserByEmail(req.body.email);

  if (user) {
    res.status(400).json({
      message: 'Failed! Email is already in use!',
    });
    return;
  }

  next();
};

const verifySignup = {
  checkDuplicateEmail,
};

module.exports = verifySignup;
