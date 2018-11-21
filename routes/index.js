const router = require('express').Router();
const jwt = require('jsonwebtoken');
let SECRET = process.env.JWT_KEY;


router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    if (!req.cookies.token) {
      res.redirect("./login")
    } else {
      res.render('./', {
        userId: payload.userId
      });
    }
  })
})


module.exports = router;
