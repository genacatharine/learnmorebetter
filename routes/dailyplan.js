var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
// var date

router.get('/', function(req, res, next) {
  res.render('./dailyplan/', {date:req.params.date});
});

module.exports = router;
