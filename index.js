import express from 'express';
import dirname from 'path';
import fileURLToPath from 'url';
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine','ejs');
app.set('views',__dirname);
app.use(express.static('.'));

// const express = require('express');
// const app = express();
// const port = 3000;

app.set('view engine','ejs');

app.get('/', function (request, response) {
  response.render('./public/index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});