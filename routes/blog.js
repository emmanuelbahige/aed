var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blog');
});

/* GET article page. */
router.get('/article', function(req, res, next) {
  res.render('article');
});

module.exports = router;