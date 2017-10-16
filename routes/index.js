const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser')
let SECRET = process.env.JWT_KEY;
let router = express.Router();

router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login")
    } else {
      res.render('./', {
        userId: payload.userId
      });
    }
  })
})

module.exports = router;
