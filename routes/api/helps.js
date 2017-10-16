var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const SECRET = process.env.JWT_KEY


router.get('/', (req, res, next) => {

  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    let userId = payload.userId
    let helps = {}
    var subquery = knex.pluck('assignment_id').from('helps')
    .whereIn('user_id', userId)

    knex('helps')
      .select('assignments.title as asst', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email')
      .innerJoin('assignments', 'helps.assignment_id', 'assignments.id')
      .innerJoin('users', 'helps.user_id', 'users.id')
      .whereIn('assignment_id', subquery)
      .whereNot('users.id', userId)

    .then((data) => {
      data.forEach((el) => {
        let newUser = {
          first: el.firstName,
          last: el.lastName,
          email: el.email
        }
        if (!helps[el.asst]) {
          helps[el.asst] = []
        }
        helps[el.asst].push(newUser)
      })
    res.send(helps)
  }).catch((err) => next(err))
})
})

module.exports = router;
