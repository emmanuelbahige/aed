var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET goals page. */
router.get('/goals', function(req, res, next) {
  res.render('goals');
});

/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts');
});

/* GET gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

module.exports = router;
