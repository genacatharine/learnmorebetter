if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var express = require('express')
var path = require('path')
//var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

var cookieParser = require('cookie-parser');


var index = require('./routes/index')
let login = require('./routes/login')
let register = require('./routes/register')
var dailyplan = require('./routes/dailyplan')
var assts = require('./routes/assts')
var helps = require('./routes/helps')
var apidp = require('./routes/api/dailyplan')
var apiassts = require('./routes/api/assts')
var users = require('./routes/users');
var apihelps = require('./routes/api/helps')
var logout = require('./routes/logout')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/login', login)
app.use('/register', register)
app.use('/users', users)
app.use('/dailyplan', dailyplan)
app.use('/assts', assts)
app.use('/helps', helps)
app.use('/api/v1/dailyplan', apidp)
app.use('/api/v1/assts', apiassts)
app.use('/api/v1/helps', apihelps)
app.use('/logout', logout)
app.use(cookieParser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log("errrorrrrrrrr 500");
  res.render('error')
})

// app.use(session({secret: 'g62'}))

module.exports = app
