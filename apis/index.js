'use strict';

var express = require('express');
var router = express.Router();

var user = require('./user');
var locale = require('./locale');

module.exports = (function() {
    router.use('/user', user);
    router.use('/locale', locale);
    // info 결혼식 정보
    // image 이미지 갤러리
    // board 방명록

    return router;
})();
