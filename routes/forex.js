var express = require('express');
var router = express.Router();
var forex = require('../server/forex_client');

router.get('/symbols', (req,res)=>{
  forex.getSymbols().then((data)=>{
    res.send({data:data});
  })
});

router.get('/convert/:s1/:s2', (req, res)=>{
  const s1 = req.params.s1;
  const s2 = req.params.s2;
  forex.convert(s1, s2, 100)
    .then(conversion=>{
      res.send({
        conversion
      })
    })
})

module.exports = router;

