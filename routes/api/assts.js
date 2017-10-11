var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('am i here? i want to be here. this is the assts.js api route')
  let id = req.params.userId
  console.log('id ', id)
  let assts = {}
  console.log(assts)
  knex('users')
    .where('users.id', id)
    .innerJoin('users_assignments', 'users.id', 'users_assignments.user_id')
    .innerJoin('assignments', 'users_assignments.assignment_id', 'assignments.id')
    .select('assignments.title as title', 'assignments.description as description', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl')
    .then( (assts) => {
      console.log('this is a console log of assignments ', assts)
      res.send(assts)
    }).catch( (err) => next(err))
})




module.exports = router;
