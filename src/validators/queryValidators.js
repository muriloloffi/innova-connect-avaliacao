const { query } = require('express-validator');

exports.paginationValidator = () => [
  query('page').optional().escape()
    .isInt({ min: 1 })
    .toInt(),
  query('pageSize').optional().escape()
    .isInt({ min: 1, max: 20 })
    .toInt(),
];
