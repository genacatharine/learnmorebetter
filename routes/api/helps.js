var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('am i here? i want to be here. this is the helps.js api route')
  let id = req.params.usersId
  let assts = {}
  knex('users')
    .where('id', id)
    .innerJoin('helps', 'users.id', "helps.user_id")
    .select('helps.user_id')
    .then( (ids) => {
      res.send(ids)
    }).catch( (err) => next(err))

    // .innerJoin('assignments', 'helps.assignment_id', 'assignments.id')
    // .select('assignments.title', )


})




module.exports = router;
