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
    Materialize.toast('Please fill out both fields', 1000)
  }
knex ('users')
.where('email', req.body.email).first()
.then((data)=>{
  if (!data) {
    Materialize.toast('Bad email or password', 1000)
  }
if(bcrypt.compare(req.body.password, data.hashed_password)){
  let token = jwt.sign({userId: data.id}, SECRET)
  res.cookie('token', token, {httpOnly:true})
  res.send({ redirectURL: './'})
}
else {
  Materialize.toast('Bad password')
}
})
.catch((err)=>{
  next(err)
})

})

module.exports = router;
