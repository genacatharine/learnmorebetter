var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY
var userId

router.get('/', (req, res, next) => {
  console.log('arrived at assignments api get request');
  console.log('token ', req.cookies.token)
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      console.log('no token on assignments api get request')
      res.redirect("./login")
    }
      console.log('token on assignments api get request');
      userId =  payload.userId

      console.log('retrieving assignments for userId ', userId);

      return knex('assignments')
        .select('assignments.title', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl', 'units.title as unit', 'units.location_url as unitUrl', 'users_assignments.grade', 'assignments.id')
        .innerJoin('units', 'assignments.unit_id', 'units.id')
        .innerJoin('users_assignments', 'users_assignments.assignment_id', 'assignments.id')
        .where('users_assignments.user_id', userId)
        .then ( (assts) => {
          res.send(assts)
        }).catch( (err) => next(err))
  })
})


module.exports = router;
