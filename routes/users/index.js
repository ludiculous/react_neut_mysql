var express = require('express');
var router = express.Router();

var store = require('./store.js');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var userID = req.params.id;
  res.send('respond with a resource' + userID);
});

router.get('/test', function(req, res, next) {
  var userID = req.params.id;
  res.send('respond with a resource' + userID);
});

router.post('/create', function(req, res){
  console.log(req.body)
  store
    .createUser({
        username: req.body.username,
        password: req.body.password
    })
    .then(function(res){
      res.sendStatus(200);
    })
});

module.exports = router;
