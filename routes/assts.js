var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
const SECRET = process.env.JWT_KEY
const jwt = require('jsonwebtoken')
// var date

router.get('/', function(req, res, next) {
  res.render("./assignments/")
});

module.exports = router;
