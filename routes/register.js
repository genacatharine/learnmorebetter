const express = require('express');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')
const knex= require('../knex')

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // bcrypt.hash("learnmorebetter", 10)
  //   .then(console.log, console.error);
  res.render('./register/', { title: 'Learn.More.Better.'});
});

router.post('/', (req, res, next) => {
  const {firstName, lastName, email, password}= req.body
  bcrypt.hash(password, 10)
  //  let hashed_password = bcrypt.hashSync(req.body.password, 8);

  // let newUser = {
  //   name : req.body.name,
  //   email : req.body.email,
  //   password : hashed_password
  // };
.then((hash_pass)=>{
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
  .catch((err, users) =>{
    console.log(err)
    console.log(users[0])
    // res.send(users[0])

  })
})
module.exports = router
