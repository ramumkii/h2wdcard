'use strict';

var express = require('express'),
    router = express.Router();

module.exports = (function() {

    router.get('/', function(req, res, next) {
      res.render('index.html');
    });

    return router;
})();
