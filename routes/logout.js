var router = require('express').Router();


router.get('/', (req, res, next) => {
  res.clearCookie('token');
  res.redirect('./');
});


module.exports = router;
