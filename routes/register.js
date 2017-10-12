const express = require('express');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')
const knex= require('../knex')

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('./register/', { title: 'Learn.More.Better.'});
});

router.post('/', (req, res, next) => {
  console.log('IN THE POST ROUTE');
  const {firstName, lastName, email, password} = req.body;

  bcrypt.hash(password, 10)
    .then((hash_pass) => {
      return knex('users')
              .insert({
                first_name: 'adam',
                middle_initial: '.',
                last_name: 'maxwell',
                email: email,
                is_instructor: false,
                is_enabled: true,
                hashed_password: hash_pass //password that just got hashed
                },'*')
  })
  .then((=>{
    res.cookie ()
  })
  .then(() => {
    res.send({ redirectURL: '/'});

  })
  .catch((err) => {
    next(err);
  })
})
module.exports = router
