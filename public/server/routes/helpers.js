const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const extractor = require('unfluff');
const urlParseLax = require('url-parse-lax');

router.get('/link-info',
  //passport.authenticate('jwt', {session: false}),
  (req, res) => {

    const urlData = urlParseLax(req.query.url);
    if(!urlData.host) {
      return res.json({error: 'Invalid URL'})
    }

    const url = `${urlData.protocol}//${urlData.host}${urlData.path ? urlData.path : ''}`;
    request.get(url, function (error, response, body) {
        if(error) {
          console.log(error);
        }
        const data = extractor.lazy(body);
        const siteData = {
          title: data.title(),
          fav: data.favicon(),
          url: req.query.url
        };

        console.log(siteData);
        res.json(siteData);


    });
  });

module.exports = router;
