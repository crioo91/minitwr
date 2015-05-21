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
	var tweet = {message:req.body.tweet,date:new Date};
    tweets.unshift(tweet);
    res.redirect('S1E1#comment')
});

router.get('/inscription', function(req, res, next) {
  res.render('inscription');
});

router.get('/condgen', function(req, res, next) {
  res.render('condgen');
});

module.exports = router;
