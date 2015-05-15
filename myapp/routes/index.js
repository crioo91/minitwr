var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.post('/', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('/')
});

router.get('/blabla', function(req, res, next) {
  res.render('blabla', { title: 'Express', tweets: tweets });
});

router.post('/blabla', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('blabla')
});

module.exports = router;
