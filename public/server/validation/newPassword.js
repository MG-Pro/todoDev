const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateNewPasswordInput(data) {
  const errors = {};
  data.old_password = !isEmpty(data.old_password) ? data.old_password : '';
  data.new_password = !isEmpty(data.new_password) ? data.new_password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if(Validator.isEmpty(data.old_password)) {
    errors.old_password = 'Old password is required';
  }

  if(!Validator.isLength(data.new_password, {min: 6, max: 30})) {
    errors.new_password = 'Password must have 6 chars';
  }

  if(Validator.isEmpty(data.new_password)) {
    errors.new_password = 'New password is required';
  }

  if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
    errors.password_confirm = 'Password must have 6 chars';
  }

  if(!Validator.equals(data.new_password, data.password_confirm)) {
    errors.password_confirm = 'Password and Confirm Password must match';
  }

  if(Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = 'Confirm password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
