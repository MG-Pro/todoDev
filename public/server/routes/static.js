const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const p = path.join(__dirname + '/../../../build/index.html');
  console.log(p);
  res.sendFile(p);
});

router.get('/app', (req, res) => {
  const p = path.join(__dirname + '/../../../build/app/app.html');
  console.log(p);
  res.sendFile(p);
});

module.exports = router;
