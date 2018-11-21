const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const boom = require('boom');

var SECRET = process.env.JWT_KEY;

router.get("/", function(req, res, next) {
  res.render('./login/', {
    title: "Learn. More. Better."
  })
})

router.post("/", (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(boom.badRequest('Please fill out both fields'))
  }
  // console.log('email from request', req.body.email)
  knex('users')
    .where('email', req.body.email)
    .first()
    .then((data) => {
      // console.log('data from post request ', data);
      if (!data) {
        next(boom.badRequest('Bad email or password'))
      }
      bcrypt.compare(req.body.password, data.hashed_password).then((rez) => {
        // console.log('password good? ', rez)
          if (rez) {
            let token = jwt.sign({
              userId: data.id
            }, SECRET)
            // console.log('made token ', token)
            // console.log('going to send cookie now')
            res.cookie('token', token, {httpOnly:true}).send({
              redirectURL: './'
            })
          }
          else {
            next(boom.badRequest('Bad password'))
          }
        })
        .catch((err) => {
          next(err)
        })
    })
})


module.exports = router;
