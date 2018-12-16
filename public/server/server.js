const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/app', (req, res) => {
  console.log('app');
  res.send('../app/app.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
