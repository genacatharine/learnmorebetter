const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let JWT_KEY = process.env.JWT_KEY;
let router = express.Router();

router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, JWT_KEY, (err, payload) => {
    if (err) {
      res.redirect("./login")
    } else {
      res.render('./', { title: 'Learn.More.Better.', _layoutFile: 'layout.ejs'});
    }
  });
});

module.exports = router;
