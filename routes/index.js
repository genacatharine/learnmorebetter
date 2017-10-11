var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   bcrypt.hash("learnmorebetter", 10)
//     .then(console.log, console.error);
//   res.render('./', { title: 'Learn.More.Better.', _layoutFile: 'layout.ejs'});
// });

module.exports = router;
