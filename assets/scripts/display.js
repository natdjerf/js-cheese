'use strict';

let displayCheeses = function(cheeses) {
  let allCheeseTemplate = require('./templates/all-cheese.handlebars');
  $('.all-cheese').html(allCheeseTemplate({
    cheeses: cheeses.cheeses
  }));
};


// Handlebars render:
let displayCurrentBoard = function(cheeses){
  let currentBoardTemplate = require('./templates/current-board.handlebars');
    $('.single-saved-board-body').html(currentBoardTemplate({
      cheeses : cheeses.cheeses
    }));
    // $('.single-saved-board-body').addClass('hidden');
    // $('#single-saved-board').on('submit', function (event) {
    //   event.preventDefault();
    //   console.log('Get Details clicked.');
      // singleSavedBoard(singleSavedBoardSuccess, singleSavedBoardFailure);
    // });
};



module.exports = {
  displayCheeses,
  displayCurrentBoard
};
