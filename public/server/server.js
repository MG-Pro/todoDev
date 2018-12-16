const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(__dirname + '/../'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/app', (req, res) => {
  const p = path.join(__dirname + '/../../build/app/app.html');
  console.log(p);
  res.sendFile(p);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
