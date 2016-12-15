'use strict';

var express = require('express');
var router = express.Router();
var net = require('net');
var geoip = require('geoip-lite');

module.exports = (function() {
    router.get('/', function(req, res) {
      var ip = req.clientIP;
      console.log('ip address');
      console.log(ip);
      var ipType = net.isIP(ip);
      var geo = geoip(ip);
      console.log(geo);
      res.end('Hello, your ip address is ' + ip + ' and is of type IPv' + ipType + '\n');
    });

    return router;
})();
