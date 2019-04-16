const express = require('express');
const router = express.Router();
const passport = require('passport');
const urlParseLax = require('url-parse-lax');
const validator = require('validator');
const getFavicons = require('get-website-favicon');
const axios = require('axios');

router.get('/link-info',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {

    if (!validator.isURL(req.query.url)) {
      return res.status(400).json({error: 'Invalid URL'})
    }

    const urlData = urlParseLax(req.query.url);
    const url = `${urlData.protocol}//${urlData.host}${urlData.path ? urlData.path : ''}`;

    const siteData = {
      title: '',
      fav: null,
      url: url
    };

    try {

      const {data} = await axios.get(url);
      const title = data.match(/<title[^>]*>(.*?)<\/title>/i)
      if (title) {
        siteData.title = title[1];
      }

      const {icons} = await getFavicons(url);
      if (icons.length) {
        siteData.fav = icons[0].src;
      }

      res.json(siteData);
    } catch (e) {
      console.log(e);
      return res.status(400).json({error: 'Error URL'})
    }
  });

module.exports = router;
