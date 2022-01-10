// import express from 'express';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }))
// const express = require('express');
// const app = express();
// const port = 3000;

app.set('view engine','ejs');
app.set('views', './public/')
let testResult;

app.get('/', function (request, response) {
  response.render('index.ejs');
});

app.post('/result', function (request, response) {
  // testResult = request.query.testResult;
  // JSON.stringify(req.body);
  testResult = JSON.stringify(request.body.testResult);
  if(typeof(testResult) == "undefined"){
    response.redirect('/');
  }else{  
    response.render('result.ejs',{testResult: testResult});
  }
});

var port = process.env.PORT || 3000; // 1
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});