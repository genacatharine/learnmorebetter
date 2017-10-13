const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const SECRET = process.env.JWT_KEY

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('./register/', {
    title: 'Learn.More.Better.'
  });
});

router.post('/', (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;
  bcrypt.hash(password, 10)
    .then( (hash) => {

      return knex('users')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          is_instructor: false,
          is_enabled: true,
          hashed_password: hash
        }, 'id')
      }).then( (userId) => {
      let token = jwt.sign({
        id: userId
      }, SECRET)
      console.log(token)
      res.cookie('token', token, {httpOnly: true})
      res.send({
        redirectURL: './'
      })
    })
    .catch((err) => {
      next(err);
    })
})
module.exports = router
