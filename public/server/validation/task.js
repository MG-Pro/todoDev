const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = (task, isUpdate) => {
  const errors = {};

  if(!Validator.isLength(task.tech, {min: 2, max: 30})) {
    errors.tech = 'Technology name is invalid';
  }

  if(!Validator.isLength(task.target, {min: 2})) {
    errors.target = 'Target desc is invalid';
  }
  if (isUpdate) {
    const targetDate = (new Date(task.targetDate)).getTime();
    if(targetDate < Date.now()) {
      errors.targetDate = 'Target date is invalid';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
