// Step1: npm install express --save
var express = require('express');

var app = express();
var port = 5000; // 5000 used for localhost

var products = [{make: "Current Designs", model:"Tsunami"},
                {make:"Geo", model:"Tracker"}];

// By default this looks for index.html
app.use(express.static('server/public', {
  index: 'views/index.html'
}));

app.get("/products", function(req, res){
  res.send(products);
});

// npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post("/newProduct", function(req, res){
  var newProduct = req.body;
  products.push(newProduct);
  console.log(newProduct);
  res.sendStatus(200);
});

app.listen(port);
console.log("Listening on port ", port);
