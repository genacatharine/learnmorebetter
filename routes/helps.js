const router = require('express').Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_KEY;

let userId;

router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login");
    } else {
      userId = payload.userId;
      res.render('./helps/', { userId });
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
        throw boom.badRequest('You\'re already in helps for that assignment')
      }
  })
})

  router.delete('/remove', (req, res, next) => {
    let asst = req.query.asst
    knex('assignments')
      .where('title', asst)
      .first()
      .then(({id, title}) => {
        return knex('helps')
          .del()
          .where('assignment_id', id)
          .andWhere('user_id', userId)
          .returning('assignment_id')
      }).then((assignmentId) => {
        res.send(assignmentId)
      }).catch((err) => next(err))
  })


module.exports = router;
