'use strict';

let displayHardCheeses = function(cheeses) {
  let allCheeseTemplate = require('./templates/all-cheese.handlebars');
  $('.all-cheese').html(allCheeseTemplate({
    cheeses: cheeses.cheeses
  }));
  $(".semi-hard-cheese").addClass('hidden');
  $(".soft-cheese").addClass('hidden');
  $(".semi-soft-cheese").addClass('hidden');
};

let displaySemiHardCheeses = function(cheeses) {
  let allCheeseTemplate = require('./templates/all-cheese.handlebars');
  $('.all-cheese').html(allCheeseTemplate({
    cheeses: cheeses.cheeses
  }));
  $(".hard-cheese").addClass('hidden');
  $(".soft-cheese").addClass('hidden');
  $(".semi-soft-cheese").addClass('hidden');
};

let displaySemiSoftCheeses = function(cheeses) {
  let allCheeseTemplate = require('./templates/all-cheese.handlebars');
  $('.all-cheese').html(allCheeseTemplate({
    cheeses: cheeses.cheeses
  }));
  $(".hard-cheese").addClass('hidden');
  $(".semi-hard-cheese").addClass('hidden');
  $(".soft-cheese").addClass('hidden');
};

let displaySoftCheeses = function(cheeses) {
  let allCheeseTemplate = require('./templates/all-cheese.handlebars');
  $('.all-cheese').html(allCheeseTemplate({
    cheeses: cheeses.cheeses
  }));
  $(".hard-cheese").addClass('hidden');
  $(".semi-hard-cheese").addClass('hidden');
  $(".semi-soft-cheese").addClass('hidden');
};

// Handlebars render:
let displayCurrentBoard = function(cheeses) {
  let currentBoardTemplate = require('./templates/current-board.handlebars');
  $('.view-current-board-body').html(currentBoardTemplate({
    cheeses: cheeses.cheeses
  }));
};

let displayBoards = function(boards){
  let allBoardsTemplate = require('./templates/all-boards.handlebars');
    $('.saved-boards-body').html(allBoardsTemplate({
      boards : boards.boards
    }));
    // $('.saved-boards-body').addClass('hidden');
    // $('#saved-boards').on('submit', function (event) {
    //   event.preventDefault();
    //   console.log('Get Saved Boards clicked.');
      // savedBoards(savedBoardsSuccess, savedBoardsFailure);
    // });
};

let displayCheeseDetails = function(cheeses) {
  let cheeseModalTemplate = require('./templates/cheese-modal.handlebars');
  $('.view-cheese-details-body').html(cheeseModalTemplate({
    cheeses: cheeses
  }));
};



module.exports = {
  displayHardCheeses,
  displaySemiHardCheeses,
  displaySemiSoftCheeses,
  displaySoftCheeses,
  displayCurrentBoard,
  displayBoards,
  displayCheeseDetails
};
