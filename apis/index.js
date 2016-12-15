'use strict';

var express = require('express');
var router = express.Router();

var user = require('./user');
var region = require('./region');

module.exports = (function() {
    router.use('/user', user);
    router.user('/region', region);
    // info 결혼식 정보
    // image 이미지 갤러리
    // board 방명록

    return router;
})();
