var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY

router.get('/', function(req, res, next) {
      jwt.verify(req.cookies.token, SECRET, (err, payload) => {
        if (!req.cookies.token) {
          res.redirect("./login")
        } else {
          res.render('./dailyplan/')
        }
      })
})

module.exports = router;
