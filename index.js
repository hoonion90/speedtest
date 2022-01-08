import express from 'express';
const app = express();

app.set('view engine','ejs');
app.use(express.static('.'));

// const express = require('express');
// const app = express();
// const port = 3000;

app.set('view engine','ejs');
app.set('views', './public/')
let testResult;

app.get('/', function (request, response) {
  response.render('index.ejs');
});

app.get('/result', function (request, response) {
  testResult = request.query.testResult;
  // console.log(testResult);
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