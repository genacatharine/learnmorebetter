var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./helps/', {userId:5});
});

router.post('/:id', (req, res, next) => {
  console.log('posting route')
  knex('helps')
    .insert({'user_id': 5, 'assignment_id': req.params.id}, '*')
    .then( (inserted) => {
      console.log(inserted)
      res.send(inserted)
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
