'use strict';

var express = require('express');
var router = express.Router();

var user = require('./user');

module.exports = (function() {
    router.get('/user', user.list);
    router.post('/user', user.addUser);
    // info 결혼식 정보
    // image 이미지 갤러리
    // board 방명록

    return router;
})();
