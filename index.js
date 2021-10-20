const express = require('express')
const app = express()
const port = 3000

app.get('/', function (request, response) {
  response.render('./public/index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})