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
module.exports.list = function(req, res) {
  connection.query('select * from users', function(err, rows) {
       console.log(rows);
       res.json(rows);
      });
};
module.exports.addUser = function(req, res) {
  var user = {'id':req.body.id,
               'password':req.body.password,
               'url':req.body.url};
  connection.query('insert into users set ?', user, function(err, rows) {
       console.log(rows);
       res.json(rows);
      });
};
