var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  let id=4
  knex('assignments')
    .select('assignments.title', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl', 'units.title as unit', 'units.location_url as unitUrl', 'users_assignments.grade', 'assignments.id')
    .innerJoin('units', 'assignments.unit_id', 'units.id')
    .innerJoin('users_assignments', 'users_assignments.assignment_id', 'assignments.id')
    .where('users_assignments.user_id', id)
    .then ( (assts) => {
      res.send(assts)
    }).catch( (err) => next(err))
  })


module.exports = router;
