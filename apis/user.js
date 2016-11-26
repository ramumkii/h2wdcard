'use strict';

var express = require('express'),
    router = express.Router();

module.exports = (function() {

    router.get('/', function(req, res, next) {
      res.send('{user: 1, id: 1}');
    });

    return router;
})();
