'use strict';


let displayCheeses = function(cheeses){
  let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
    $('.cheese-section').append(allCheeseTemplate({
      cheeses
    }));
};


let getCheeses = function(){
  $.ajax({
    url: "http://localhost:3000/cheeses",
  }).done(function(cheeses){
    displayCheeses(cheeses);
  });
};

module.exports = {
    getCheeses
  };
