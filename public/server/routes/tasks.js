const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateTaskInput = require('../validation/task');
const Task = require('../models/Task');

router.get(
  '/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Task.find({user: req.user.id}, {user: 0, __v: 0})
      .sort({date: 1})
      .then(tasks => {
        res.json(tasks)
      })
      .catch(e => console.log(e));
  });

router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {

  const {errors, isValid} = validateTaskInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {userId, tech, target, targetDate, links} = req.body;
  const newTask = new Task({
    user: userId,
    tech,
    target,
    targetDate,
    links
  });

  newTask
    .save().then(task => {
      Task.find({user: userId}, {user: 0, __v: 0})
        .sort({date: 1})
        .then(tasks => {
        res.json(tasks)
      })
    })
    .catch(e => console.log(e));
});

router.put(
  '/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {

    const {errors, isValid} = validateTaskInput(req.body);
    if (!isValid) {
      //return res.status(400).json(errors);
    }

    const {id, _id, tech, target, targetDate, status, links} = req.body;

      Task.findById(id || _id)
        .then(task => {
          task.updateOne({
            tech,
            target,
            targetDate,
            status,
            links,
            updateDate: Date.now()
          }).then(result => {
            Task.find({user: req.user.id}, {user: 0, __v: 0})
              .sort({updateDate: -1})
              .then(tasks => {
                res.json(tasks)
              })
          })
        }).catch(e => console.log(e));

  });

module.exports = router;
