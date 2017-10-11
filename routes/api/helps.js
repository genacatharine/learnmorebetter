var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')


router.get('/', (req, res, next) => {
  console.log('am i here? i want to be here. this is the helps.js api route')
  let id = req.query.userId
  console.log('helps req.query.userId ', req.query.userId)
  let hell = []
  let newHelp = {}



  // knex('assignments')
  //   .innerJoin('helps', 'assignments.id', 'helps.assignment_id')
  //   .innerJoin('users', 'users.id', 'helps.user_id')
  //   .select('assignments.title', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email')
  //   .where('helps.user_id', 5)


  var subquery = knex.pluck('assignment_id').from('helps')
    .whereIn('user_id', id)

  knex('helps')
  .select('assignments.title', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email', 'helps.id')
  .innerJoin('assignments', 'helps.assignment_id', 'assignments.id')
  .innerJoin('users', 'helps.user_id', 'users.id')
  .whereIn('assignment_id', subquery)
  .whereNot('users.id', id)

    //   assignments.forEach( (id) => {
    //     knex('users')
    //       .innerJoin('helps', 'helps.user_id', 'users.id')
    //       // .innerJoin('assignments', 'helps.assignments_id', 'assignments.id')
    //       .select('assignments.title', 'users.first_name as firstName', 'users.last_name as lastName', 'users.email', 'helps.id')
    //       .then( (rows) => {
    //         rows.forEach( (row) => {
    //           newHelp.helpId = id,
    //           newHelp.asst = title,
    //           newHelp.users =
    //         })
    //       })
    //   })
    // })


    .then( (data) => {
      console.log(data)

      res.send(data)
    }).catch( (err) => next(err))
})

// select a.title, u.first_name as firstName, u.last_name as lastName, u.email from assignments a inner join helps on (a.id=helps.assignment_id) inner join users u on (helps.user_id=u.id) where (helps.user_id=5);

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
