var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Front-end works
var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);

// Routers
// var index = require('./routers/index');
var apis = require('./apis/index');

// Environments
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// Middlewares
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));

app.use('/apis', apis);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000');
});
