var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY
var userId

router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login")
    }
      userId =  payload.userId
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
