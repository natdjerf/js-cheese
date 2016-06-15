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



module.exports = {
  displayHardCheeses,
  displaySemiHardCheeses,
  displaySemiSoftCheeses,
  displaySoftCheeses,
  displayCurrentBoard
};
