var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'header parser' });
  
});

router.get('/api', function(req, res, next) {
  var language = req.acceptsLanguages()[0];
  var system = req.useragent.os;
  var ip = req.ip;

  res.json({ipaddress: ip,
            language: language,
            system: system});
});


module.exports = router;
