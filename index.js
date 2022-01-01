import express from 'express';

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('.'));

// const express = require('express');
// const app = express();
// const port = 3000;

app.set('view engine','ejs');
app.set('views', './public/')

app.get('/', function (request, response) {
  response.render('index.ejs');
});

app.get('/result', function (request, response) {
  response.render('result.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});