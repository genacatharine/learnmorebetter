const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser')

let JWT_KEY = process.env.JWT_KEY;
let router = express.Router();

router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, 'g62', (err, payload) => {
    if (!req.cookies.token) {

      res.redirect("./register")
    } else {
      console.log('im renderinggggg')
      res.render('./', { title: 'Learn.More.Better.', _layoutFile: 'layout.ejs'});
    }
  });
});

module.exports = router;
