const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validateNewPasswordInput = require('../validation/newPassword');
const User = require('../models/User');

router.post('/register', function (req, res) {

  const {errors, isValid} = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('There was an error', err);
            else {
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  res.json(user)
                })
                .catch(e => console.log(e));
            }
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {

  const {errors, isValid} = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email,
              name: user.email.replace(/@(.*)/, ''),
              avatar: user.avatar
            };
            jwt.sign(payload, 'secret', {expiresIn: '7d'}, (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            });
          } else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});

router.get('/me',
  passport.authenticate('jwt', {session: false}), (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  });

router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  function (req, res) {
    const id = req.params.id;

    const {errors, isValid} = validateNewPasswordInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findById(id)
      .then(user => {
        if (!user) {
          return res.status(400).json({
            msg: 'User not found'
          });
        } else {

          bcrypt.compare(req.body.old_password, user.password)
            .then(isMatch => {
              if (isMatch) {
                bcrypt.genSalt(10, (err, salt) => {
                  if (err) console.error(err);
                  else {
                    bcrypt.hash(req.body.new_password, salt, (err, hash) => {
                      if (err) console.error(err);
                      else {
                        user.password = hash;
                        user
                          .save()
                          .then(user => {
                            const payload = {
                              id: user.id,
                              email: user.email,
                              name: user.email.replace(/@(.*)/, ''),
                              avatar: user.avatar
                            };
                            jwt.sign(payload, 'secret', {expiresIn: '7d'}, (err, token) => {
                              if (err) console.error('There is some error in token', err);
                              else {
                                res.json({
                                  success: true,
                                  token: `Bearer ${token}`
                                });
                              }
                            });
                          })
                          .catch(e => console.log(e));
                      }
                    });
                  }
                });
              } else {
                return res.status(400).json({
                  old_password: 'Incorrect old password'
                });
              }
            });
        }
      });
  });

module.exports = router;
