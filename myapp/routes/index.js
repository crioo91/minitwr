var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/S1E1', function(req, res, next) {
  res.render('S1E1', {tweets: tweets });
});

router.post('/S1E1', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('S1E1#comment')
});

module.exports = router;
