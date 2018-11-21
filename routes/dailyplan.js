const router = require('express').Router();
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_KEY;


router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, SECRET, (err, payload) => {
    (!req.cookies.token) ? res.redirect("./login") : res.render('./dailyplan/')
  });
});


module.exports = router;
