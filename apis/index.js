'use strict';

var express = require('express'),
    router = express.Router();

var user = require('./user');

module.exports = (function() {

    router.use('/user', user);
    // info 결혼식 정보
    // image 이미지 갤러리
    // board 방명록

    return router;
})();
