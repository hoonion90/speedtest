import express from 'express';
const app = express();
const port = 80;

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
  response.render('result.ejs',{testResult: testResult});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});