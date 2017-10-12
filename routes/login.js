const express = require('express');
const bcrypt = require('bcrypt');

let router = express.Router();

/* GET home page. */
router.get("/login", (req, res, next) => {
  bcrypt.hash("learnmorebetter", 10)
    .then(console.log, console.error);
  res.render('./', { title: 'Learn.More.Better.', _layoutFile: 'layout.ejs'});
});

router.post("/login", (req, res, next) => {
  console.log("Got incoming password");
  res.end("Got your password");
})

module.exports = router;
