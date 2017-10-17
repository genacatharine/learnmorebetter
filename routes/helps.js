var express = require('express');
var router = express.Router();
var knex = require('../knex')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY
var userId


/* GET users listing. */
router.get('/', function(req, res, next) {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login")
    } else {
      userId = payload.userId
      res.render('./helps/', {
        userId
      })
    }
  })
})

router.post('/:id', (req, res, next) => {
  knex('helps')
    .where('user_id', userId)
    .andWhere('assignment_id', req.params.id)
    .first()
    .then((exists) => {
      if (!exists) {
        knex('helps')
        .insert({
            'user_id': userId,
            'assignment_id': req.params.id
          }, '*')
          .then((inserted) => {
            res.send(inserted)
          })
      }
      else {
        return Materialize.toast('You\'re already in helps for that assignment', 1000)
      }
  })
})

  router.delete('/remove', (req, res, next) => {
    let asst = req.query.asst
    knex('assignments')
      .where('title', asst)
      .first()
      .then(({id, title}) => {
         console.log('{id, title}', {id, title})
        return knex('helps')
          .del()
          .where('assignment_id', id)
          .andWhere('user_id', userId)
          .returning('assignment_id')
      }).then((assignmentId) => {
        console.log('asst id about to send back', assignmentId)
        res.send(assignmentId)
      }).catch((err) => next(err))
  })

      module.exports = router;
