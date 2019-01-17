const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const extractor = require('unfluff');
const urlParseLax = require('url-parse-lax');
const validator = require('validator');

router.get('/link-info',
  //passport.authenticate('jwt', {session: false}),
  (req, res) => {

    if(!validator.isURL(req.query.url)) {
      return res.status(400).json({error: 'Invalid URL'})
    }
    const urlData = urlParseLax(req.query.url);
    const url = `${urlData.protocol}//${urlData.host}${urlData.path ? urlData.path : ''}`;
    request.get(url, function (error, response, body) {
        if(error) {
          console.log(error);
        }
        const data = extractor.lazy(body);
        const siteData = {
          title: data.title(),
          fav: data.favicon().replace(/^\/\//, ''),
          url: req.query.url
        };
        res.json(siteData);
    });
  });

module.exports = router;
