const express = require('express');
const bcrypt = require('bcrypt');

let router = express.Router();

router.get("/", function(req, res, next) {
  console.log("You're on the login page");

  res.render('./login/', { title: "Learn. More. Better." });
  // bcrypt.hash("learnmorebetter", 10)
  //   .then(console.log, console.error);
});

router.post("/", (req, res, next) => {
  console.log("Got incoming password");
  res.end("Got your password");
})

module.exports = router;
