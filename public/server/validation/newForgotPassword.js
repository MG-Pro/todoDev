const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  console.log(data);
  const errors = {};
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must have 6 chars';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'New password is required';
  }

  if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
    errors.password_confirm = 'Password must have 6 chars';
  }

  if(!Validator.equals(data.password, data.password_confirm)) {
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
