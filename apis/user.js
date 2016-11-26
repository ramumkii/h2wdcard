'use strict';

var express = require('express');
var router = express.Router();

module.exports = (function() {
    router.get('/', function(req, res) {
      res.send('{user: 1, id: 1}');
    });

    return router;
})();
