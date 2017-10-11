var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('this is the assts.js api route')
  // let id = req.params.userId
  let id = 5
  // knex('users_assignments')
  //   .where('users_assignments.user_id', id)
  //   .innerJoin('assignments', 'users_assignments.assignment_id', 'assignments.id')
  //   .select('assignments.title as title', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl', 'users_assignments.grade as grade')
  //   .then( (assts) => {
  //     console.log('this is a console log of assignments ', assts)
  //     res.send(assts)
  //   }).catch( (err) => next(err))
  knex('assignments')
    .select('assignments.title', 'assignments.location_url as locationUrl', 'assignments.submit_url as submitUrl', 'users_assignments.grade')
    .where('users_assignments.user_id', id)
    .innerJoin('users_assignments', 'users_assignments.assignment_id', 'assignments.id')
    .innerJoin('lessons', 'assignments.lesson_id', 'lessons.id')

    .then ( (assts) => {
      console.log('this is a console log of assignments ', assts)
      res.send(assts)
    }).catch( (err) => next(err))
})




module.exports = router;
