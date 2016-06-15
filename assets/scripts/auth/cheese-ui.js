'use strict';

const cheeseApi = require('./cheese-api');
const app = require('../app-data.js');
const display = require('../display.js');


// scroll function
function scrollToID(id, speed) {
  let offSet = 50;
  let targetOffset = $(id).offset().top - offSet;
  let mainNav = $('#main-nav');
  $('html,body').animate({
    scrollTop: targetOffset
  }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}

const failure = (error) => {
  console.error(error);
};

const createBoardSuccess = (data) => {
  app.currentBoard.board_id = data.board.id;
  app.currentBoard.name = data.board.name;
  console.log(app.currentBoard);
  cheeseApi.getCheeses(display.displayHardCheeses, editBoardFailure);
  $("#create-board-modal").modal('hide');

  $(".hard-cheese").removeClass('hidden');
  scrollToID("#cheeses", 750);
};

const createBoardFailure = (error) => {
  console.error(error);
  $("#create-board-modal").modal('hide');
  $("#create-board-fail-modal").modal('show');
};

const addHardToBoardSuccess = () => {
  cheeseApi.getCheeses(display.displaySemiHardCheeses, failure);
};

const addSemiHardToBoardSuccess = () => {
  cheeseApi.getCheeses(display.displaySemiSoftCheeses, failure);
};

const addSemiSoftToBoardSuccess = () => {
  cheeseApi.getCheeses(display.displaySoftCheeses, failure);
};

const addSoftToBoardSuccess = () => {
  cheeseApi.getCurrentBoard(display.displayCurrentBoard, failure);
};

const addToBoardFailure = (error) => {
  console.error(error);
};

const deleteBoardSuccess = () => {
  app.currentBoard.board_id = undefined;
  app.currentBoard.name = '';
  $("#view-current-board-modal").find("p").text('');
  $("#view-current-board-modal").find("h4").text('');
  $("#delete-board-modal").modal('hide');
  $(".launch-create").removeClass('hidden');
};
const deleteBoardFailure = (error) => {
  console.error(error);
};


const editBoardSuccess = (data) => {
  app.currentBoard.name = data.board.name;
  $("#edit-board-modal").modal('hide');
  $("#view-current-board-modal").find("h4").text(app.currentBoard.name);
  $("#view-current-board-modal").modal('show');
};

const editBoardFailure = (error) => {
  console.error(error);
};








module.exports = {
  scrollToID,
  createBoardSuccess,
  createBoardFailure,
  addHardToBoardSuccess,
  addSemiHardToBoardSuccess,
  addSemiSoftToBoardSuccess,
  addSoftToBoardSuccess,
	// getCurrentBoardSuccess,
  addToBoardFailure,
  deleteBoardSuccess,
  deleteBoardFailure,
  editBoardSuccess,
  editBoardFailure,
	failure,
};
