const { Router } = require('express');
const { checkExact } = require('express-validator');
const AuthController = require('../controllers/AuthController.js');
const { verifySignUp, errorHandling } = require('../middleware/index.js');
const {
  userDataValidators,
  loginValidators,
} = require('../validators/requestValidators.js');

const router = Router();

router.post(
  '/api/auth/signup',
  [
    verifySignUp.checkDuplicateEmail,
    checkExact([...userDataValidators()]),
  ],
  errorHandling.handleValidation,
  (req, res) => AuthController.signup(req, res),
);

router.post(
  '/api/auth/signin',
  checkExact([...loginValidators()]),
  errorHandling.handleValidation,
  (req, res) => AuthController.signin(req, res),
);

module.exports = router;
