var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 5000

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html')
})
app.listen(port,function(err){
  if(err){
    console.error(err)
  }
  console.log('we connect on 5000')
})



