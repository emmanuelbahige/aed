var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog')
var adminRouter = require('./routes/admin')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'monSecretUltraSecurise', // clé de chiffrement
  resave: false, // ne pas forcer la sauvegarde de la session si rien n’a changé
  saveUninitialized: false, // ne pas sauvegarder les sessions vides
  cookie: { 
    maxAge: 1000 * 60 * 60, // 1 heure
    secure: false // mettre true si HTTPS
  }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter)
app.use('/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  // TODO: Delete the following line in production
  console.log(err);
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
