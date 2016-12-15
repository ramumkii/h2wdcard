'use strict';

var express = require('express');
var router = express.Router();

var geoip = require('geoip-lite');

module.exports = (function() {
    router.get('/', function(req, res) {
      var ip = req.clientIP;
      var geo = geoip.lookup(ip);
      var region = 'kr';
      if ( geo && geo.country ) {
        region = geo.country.toLowerCase();
      }
      res.json({ region: region });
    });

    return router;
})();
