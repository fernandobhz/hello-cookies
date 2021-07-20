var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.id = Math.random().toString().slice(-5);
  res.cookie('name', 'frg');
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/whoami', function(req, res, next) {
  const { cookies }  = req;
  res.render('index', { title: 'Express', id: req.session.id, cookies});
});

module.exports = router;
