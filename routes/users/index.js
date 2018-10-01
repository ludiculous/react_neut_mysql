var express = require('express');
var router = express.Router();

var store = require('./store.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res){
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
