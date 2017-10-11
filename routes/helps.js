var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./helps/', {userId:req.query.userId});
});

module.exports = router;
