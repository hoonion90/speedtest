const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');

app.get('/', function (request, response) {
  response.render('./public/index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})