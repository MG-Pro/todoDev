const express = require('express');
const router = express.Router();
const passport = require('passport');
const http = require('https');

router.get('/link-info',
  //passport.authenticate('jwt', {session: false}),
  (req, res) => {

    var re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
    http.get(req.query.url, function (response) {
      response.on('data', function (chunk) {
        var str = chunk.toString();
        var match = re.exec(str);
        if (match && match[2]) {
          return res.json({
            link: req.query.url,
            title: match[2],
          });
        }
      });
    });
  });

module.exports = router;
