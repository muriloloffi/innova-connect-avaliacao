const { query, body } = require('express-validator');

exports.paginationQueryValidators = () => [
  query('page').optional().escape()
    .isInt({ min: 1 })
    .toInt(),
  query('pageSize').optional().escape()
    .isInt({ min: 1, max: 20 })
    .toInt(),
];

exports.userDataValidators = () => [
  body('name').optional().isString().escape(),
  body('email').optional().isEmail().normalizeEmail(),
  body('password').optional().isString().isLength({ min: 6 }),
];

exports.loginValidators = () => [
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 6 }),
];
