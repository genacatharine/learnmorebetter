var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
console.log('am i here? i want to be here. this is the helps.js api route')
let id = req.query.userId
console.log('helps req.query.userId ', req.query.userId)
let helps = {}

// knex('assignments')
//   .innerJoin('helps', 'assignments.id', 'helps.assignment_id')
//   .innerJoin('users', 'users.id', 'helps.user_id')
//   .select('assignments.title', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email')
//   .where('helps.user_id', 5)

var subquery = knex.pluck('assignment_id').from('helps')
  .whereIn('user_id', id)

knex('helps')
  .select('assignments.title as asst', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email')
  .innerJoin('assignments', 'helps.assignment_id', 'assignments.id')
  .innerJoin('users', 'helps.user_id', 'users.id')
  .whereIn('assignment_id', subquery)
  .whereNot('users.id', id)

  .then((data) => {
    console.log('data ', data)
    data.forEach((el) => {
      let newUser = {
        first: el.firstName,
        last: el.lastName,
        email: el.email
      }
      console.log('newUser ', newUser)
      console.log('el.asst ', el.asst)
      console.log('helps[el.asst] ', helps[el.asst])

      if (!helps[el.asst]) {
        helps[el.asst] = []
      }
      helps[el.asst].push(newUser)
      console.log('helps ', helps)
    })

    // var myHelps = knex.pluck('helps.id').from('helps').whereIn('user_id', id)
    // knex('helps')
    //   .whereIn('assignment_id', myHelps)

    res.send(helps)
  }).catch((err) => next(err))
})

module.exports = router;
