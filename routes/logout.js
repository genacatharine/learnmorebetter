var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')

router.get('/', (req, res, next) => {
  res.clearCookie('token')
})

module.exports = router;
