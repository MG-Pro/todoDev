const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/about', (req, res) => {
  const p = path.join(__dirname + '/../../../build/about.html');
  res.sendFile(p);
});

router.get('/', (req, res) => {
  const p = path.join(__dirname + '/../../../build/index.html');
  res.sendFile(p);
});

router.get(/app.*/, (req, res) => {
  const p = path.join(__dirname + '/../../../build/app.html');
  res.sendFile(p);
});

module.exports = router;
