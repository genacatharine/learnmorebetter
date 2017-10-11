var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('am i here? i want to be here. this is the helps.js api route')
  let id = req.query.userId
  let assts = {}
  knex('users')
    .where('id', id)
    .innerJoin('helps', 'users.id', "helps.user_id")
    .innerJoin('assignments', 'helps.assignment_id', 'assignments.id')
    .select('users.first_name as firstName', 'users.last_name as lastName', 'users.email', 'assignments.title', 'helps.id')
    .groupBy('assignments.title')
    .then( (data) => {
      res.send(data)
    }).catch( (err) => next(err))
})

router.post('/:id', (req, res, next) => {
  console.log('posting route')
  knex('helps')
    .insert({'user_id': req.query.userId, 'assignment_id': req.params.id}, '*')
    .then( (inserted) => {
      console.log(inserted)
      res.send(inserted.id)
    })
})

router.delete('/:id', (req, res, next) => {
  console.log('deleting route')
  let id = req.params.id
  knex('helps')
    .where('id', id)
    .select('*')
    .del()
    .then( (deleted) => {
      res.send(id)
    })
})




module.exports = router;
