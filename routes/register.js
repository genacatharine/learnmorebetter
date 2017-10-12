const express = require('express');
const bcrypt = require('bcrypt');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  bcrypt.hash("learnmorebetter", 10)
    .then(console.log, console.error);
  res.render('./register/', { title: 'Learn.More.Better.', _layoutFile: 'layout.ejs'});
});

router.post('/', (req, res, next) => {
  console.log("Got incoming password");
  res.end("Got your password");
})

module.exports = router;
