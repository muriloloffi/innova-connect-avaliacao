const { query, body } = require('express-validator');

exports.paginationQueryValidators = () => [
  query('page').optional().escape().trim()
    .isInt({ min: 1 })
    .toInt(),
  query('pageSize').optional().escape().trim()
    .isInt({ min: 1, max: 20 })
    .toInt(),
];

exports.userDataValidators = () => [
  body('name').optional().escape().trim()
    .isString(),
  body('email').optional().isEmail().normalizeEmail(),
  body('password').optional().isString().isLength({ min: 6 }),
];

exports.gymDataValidators = () => [
  body('name').escape().trim().isString(),
  body('latitude').optional().escape().trim()
    .isFloat({ min: -90, max: 90 }),
  body('longitude').optional().escape().trim()
    .isFloat({ min: -180, max: 180 }),
  body('description').optional().escape().trim()
    .isString(),
  body('phone').isMobilePhone().escape().trim(),
  body('active').optional().isBoolean(),
];

exports.loginValidators = () => [
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 6 }),
];
