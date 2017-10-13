const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_KEY
const knex = require('../knex')
const boom = require('boom')

let router = express.Router();

router.get("/", function(req, res, next) {

  res.render('./login/', {
    title: "Learn. More. Better."
  });

});

router.post("/", (req, res, next) => {
  console.log(req.body)
  if (!req.body.email || !req.body.password) {
    console.log('no email or password')
    return next(boom.badRequest('Please fill out both fields'))
  }
  knex('users')
    .where('email', req.body.email)
    .first()
    .then((data) => {
      if (!data) {
        console.log('no rows! no user!')
        return next(boom.badRequest('Bad email or password'))
      }
      if (bcrypt.compare(req.body.password, data.hashed_password)) {
        let token = jwt.sign({
          userId: data.id
        }, SECRET)
        res.cookie('token', token, {
          httpOnly: true
        })
        res.send({
          redirectURL: './'
        })
      } else {
        return next(boom.badRequest('Bad password'))
      }
    })
    .catch((err) => {
      next(err)
    })

})

module.exports = router;
