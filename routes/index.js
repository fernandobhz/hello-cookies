const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/', function(req, res, next) {
  req.session.id = Math.random().toString().slice(-5);
  res.cookie('name', 'frg');
  res.render('index', { title: 'Express' });
});

router.get('/whoami', function(req, res, next) {
  const { cookies }  = req;
  res.render('index', { title: 'Express', id: req.session.id});
});

router.get('/hash', function(req, res, next) {
  const { password }  = req.query;
  const hashed = bcrypt.hashSync(password);
  res.render('index', { title: 'Express', id: req.session.id, hashed});
});

router.get('/check', function(req, res, next) {
  const { hashed, password }  = req.query;
  const isValid = bcrypt.compareSync(password, hashed);
  res.render('index', { title: 'Express', id: req.session.id, hashed, password, isValid });
});


module.exports = router;
