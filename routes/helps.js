var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./helps/', {userId:5});
});

router.post('/:id', (req, res, next) => {
  knex('helps')
    .insert({'user_id': 5, 'assignment_id': req.params.id}, '*')
    .then( (inserted) => {
      res.send(inserted)
    })
})

router.delete('/remove', (req, res, next) => {
  let asst = req.query.asst
  knex('assignments')
    .where('title', asst)
    .first()
    .then(({ id }) => {
      console.log('id where title is matched ', id)
    console.log(typeof id)
      return knex('helps')
        .del()
        .where('assignment_id', id)
        //.andWhere('user_id', 5)
    }).then( (deleted) => {
      console.log('HELLO DANAH', deleted)
      res.send(deleted)
    }).catch( (err) => next(err))

  // knex('helps')
  //   .del()
  //   .where('assignment_id', '=', 2)
  //   .then((x) => console.log('HELLO INDIE BAND', x))
  //   .catch((x) => console.log('CRAP', x))

})

module.exports = router;
