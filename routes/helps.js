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
  console.log('asst ', asst)
  knex('assignments')
    .where('title', 'like', '%asst%')
    .select('id')
    .then( (id) => {
      console.log(id)
      knex('helps')
        .where('assignment_id', id)
        .andWhere('user_id', 5)
        .del()
    }).then( (deleted) => {
      res.send(200)
    }).catch( (err) => next(err))

})

module.exports = router;
