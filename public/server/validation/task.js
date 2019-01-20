const Validator = require('validator');
const isEmpty = require('./isEmpty');

export default (task) => {
  const errors = {};

  if(!Validator.isLength(task.tech, {min: 2, max: 30})) {
    errors.tech = 'Technology name is invalid';
  }

  if(!Validator.isLength(task.target, {min: 2})) {
    errors.target = 'Target desc is invalid';
  }

  if(!Validator.isBefore(task.targetDate)) {
    errors.targetDate = 'Target date is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
