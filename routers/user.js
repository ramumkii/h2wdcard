'use strict';

var express = require('express');
var router = express.Router();

module.exports = (function() {
    router.get('/user', function(req, res) {
      res.render('user.html');
    });

    return router;
})();
