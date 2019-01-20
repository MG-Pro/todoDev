const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateTaskInput = require('../validation/task');
const Task = require('../models/Task');

router.post('/register', passport.authenticate('jwt', {session: false}), (req, res) => {

  const {errors, isValid} = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTask = new Task({
    email: req.body.email,
    password: req.body.password,
    avatar
  });

  newTask
    .save()
    .then(task => {
      res.json(task)
    })
    .catch(e => console.log(e));

});
