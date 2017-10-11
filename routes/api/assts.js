var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('this is the assts.js api route')
  // let id = req.params.userId
  let id = 5

  knex('assignments')
    .select('assignments.title', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl', 'units.title as unit', 'units.location_url as unitUrl', 'users_assignments.grade')
    .innerJoin('units', 'assignments.unit_id', 'units.id')
    .innerJoin('users_assignments', 'users_assignments.assignment_id', 'assignments.id')
    .where('users_assignments.user_id', 5)
    .then ( (assts) => {
      console.log('this is a console log of assignments ', assts)
      res.send(assts)
    }).catch( (err) => next(err))
})

module.exports = router;
