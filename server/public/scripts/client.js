var products = [];

$(document).ready(function(){
  console.log('jQuery sourced.');

  $('form').on('submit', function(event) {
    event.preventDefault();
    var product = {};
    product.make = $("#make").val();
    product.model = $("#model").val();
    console.log(product);
  });
});
