var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {

  res.render('./dailyplan/');
});

module.exports = router;
