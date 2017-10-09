var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./', { title: 'Learn.More.Better.', layout: 'layout.ejs'});
});

module.exports = router;
