const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const knex = require('../knex')
const SECRET = process.env.JWT_KEY
const boom = require('boom')

let router = express.Router();

router.get('/', (req, res, next) => {
  res.render('./register/', {
    title: 'Learn.More.Better.'
  })
})

router.post('/', (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      return knex('users')
        .where('email', email)
        .then( (exists) => {
          if (exists) {
            return next(boom.badRequest('Registered user already exists with that email address'))
          }
        return knex('users')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          is_instructor: false,
          is_enabled: true,
          hashed_password: hash
        }, 'id')
    })
    }).then((userId) => {
      let token = jwt.sign({
        userId: userId[0]
      }, SECRET)
      res.cookie('token', token, {
        httpOnly: true
      })
      return knex('assignments').pluck('id')
        .then((ids) => {
          Promise.all(ids.map((id) => {
              return knex('users_assignments')
                .insert({
                  user_id: userId[0],
                  assignment_id: id
                })
            }))
            .then(() => {
              res.send({
                redirectURL: './'
              })
            })
        })
    }).catch((err) => next(err))
})

module.exports = router
