var express = require('express');
var router = express.Router();
var knex = require('../knex')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY


/* GET users listing. */
router.get('/', function(req, res, next) {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login")
    } else {
      res.render('./helps/', {
        userId: req.cookies.token.userId
      })
    }
  })
})

router.post('/:id', (req, res, next) => {
  knex('helps')
    .insert({
      'user_id': req.cookies.token.userId,
      'assignment_id': req.params.id
    }, '*')
    .then((inserted) => {
      res.send(inserted)
    })
})

router.delete('/remove', (req, res, next) => {
  let asst = req.query.asst
  knex('assignments')
    .where('title', asst)
    .first()
    .then(({
      id
    }) => {
      return knex('helps')
        .del()
        .where('assignment_id', id)
        .andWhere('user_id', req.cookies.token.userId)
    }).then(() => {
      res.sendStatus(200)
    }).catch((err) => next(err))
})

module.exports = router;
