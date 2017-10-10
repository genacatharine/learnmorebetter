var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')




router.get('/', (req, res, next) => {
  let id = req.params.usersId
  let assts = {}
  knex('users')
    .where('users.id', id)
    .innerJoin('users_assignments', 'users.id', 'users.assignments.user_id')
    .innerJoin('assignments', 'users_assignments.assignment_id', 'assignments.id')
    .select('assignments.title', 'assignments.description', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl')
    .then( (assts) => {
      res.send(assts)
    }).catch( (err) => next(err))
})




module.exports = router;
