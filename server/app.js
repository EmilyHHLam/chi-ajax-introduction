// Step1: npm install express --save
var express = require('express');

var app = express();
var port = 5000; // 5000 used for localhost

// By default this looks for index.html
app.use(express.static('server/public', {
  index: 'views/index.html'
}));

app.listen(port);
console.log("Listening on port ", port);
