var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Front-end works
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');

// Routers
var index = require('./routers/index');
var apis = require('./apis/index');

// Environments
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

if (isDeveloping) {
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
  });
  app.use(middleware);
}
// Middlewares
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));

app.use('/', index);
app.use('/apis', apis);

// Server
http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
