'use strict';

var express = require('express');
var router = express.Router();

var locale = require("locale");
var supported = ['en', 'ko'];

router.use(locale(supported));

module.exports = (function() {
    router.get('/', function(req, res) {
      res.json({ language: req.locale });
    });

    return router;
})();
