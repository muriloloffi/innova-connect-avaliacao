const { validationResult } = require('express-validator');

const handleValidation = async (req, res, next) => {
  if (validationResult(req).errors.length > 0) {
    return res.status(400).json({ message: 'Invalid values for query' });
  }
  return next();
};

const errorHandling = {
  handleValidation,
};

module.exports = errorHandling;
