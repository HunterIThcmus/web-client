var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});
router.get('/category', function(req, res, next) {
  res.render('category', { title: 'category' });
 
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
 
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'checkout' });
 
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'checkout' });
 
});

router.get('/tracking', function(req, res, next) {
  res.render('tracking', { title: 'checkout' });
 
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'checkout' });
 
});

router.get('/single-product', function(req, res, next) {
  res.render('single-product', { title: 'checkout' });

 
});

router.get('/forgetpass', function(req, res, next) {
  res.render('forgetpass', { title: 'checkout' });
  
 
});

router.get('/updateprofile', function(req, res, next) {
  res.render('updateprofile', { title: 'checkout' });
  
 
});

module.exports = router;
