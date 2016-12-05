'use strict';

var express = require('express');
var router = express.Router();
var mysql =  require('mysql');  //mysql 커넥션을 js파일마다 셋팅해줘야 되나?

var connection = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'joywd'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});

module.exports = (function() {
  router.get('/user', function(req, res) {
      var query = connection.query('select * from users', function(err, rows) {
       console.log(rows);
       res.json(rows);
      });
        console.log(query);
    });

    return router;
})();
