if (process.env.NODE_ENV !== 'production') require('dotenv').config();

/* dependencies */
const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//var favicon = require('serve-favicon');

const app = express();
const routerAPI = express.Router();
const routerAuth = express.Router();

/* routing modules */
let index = require('./routes/index');
let login = require('./routes/login');
let register = require('./routes/register');
let dailyplan = require('./routes/dailyplan');
let assts = require('./routes/assts');
let helps = require('./routes/helps');
let apidp = require('./routes/api/dailyplan');
let apiassts = require('./routes/api/assts');
let users = require('./routes/users');
let apihelps = require('./routes/api/helps');
let logout = require('./routes/logout');

/* Set view engine to EJS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* uncomment after placing your favicon in /public */
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);
app.use('/register', register);
app.use('/users', users);
app.use('/dailyplan', dailyplan);
app.use('/assts', assts);
app.use('/helps', helps);
app.use('/api/v1/dailyplan', apidp);
app.use('/api/v1/assts', apiassts);
app.use('/api/v1/helps', apihelps);
app.use('/logout', logout);

/* catch 404 and forward to error handler */
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

/* error handler */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
  res.render('error');
})

module.exports = app
