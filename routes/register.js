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

      return knex('users') ////////////add no duplicate email validation
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          is_instructor: false,
          is_enabled: true,
          hashed_password: hash
        }, 'id')
      }).then( (userId) => {
        console.log('new user id ', userId[0])
      let token = jwt.sign({userId: userId[0]}, SECRET)
      res.cookie('token', token, {httpOnly: true})
      // let ids = knex('assignments').pluck('id')
      //   console.log('here are plucked assignment ids ',ids)
      //
      //   ids.forEach( (id) => {
      //     console.log('this is the assignment going in ', id)
      //     console.log('we can still access userId in the foreach ', userId)
      //     return knex('users_assignments')
      //       .insert({
      //         user_id: userId,
      //         assignment_id: id
      //       })
      //     }).then( () => {
              res.send({redirectURL: './'})
      // })
    }).catch((err) => next(err))
})
module.exports = router
