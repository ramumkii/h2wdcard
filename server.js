var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Routers
var index = require('./routers/index');
var user = require('./routers/user');
var apis = require('./apis/index');

app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));

app.use('/', index);
app.use('/user', user);
app.use('/apis', apis);

// Server
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
