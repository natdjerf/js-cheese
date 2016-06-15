'use strict';

const cheeseApi = require('./cheese-api');
// const getFormFields = require('../../../lib/get-form-fields');
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

const addHardToBoardSuccess = (data) => {
  cheeseApi.getCheeses(display.displaySemiHardCheeses, editBoardFailure);
};

const addSemiHardToBoardSuccess = (data) => {
  cheeseApi.getCheeses(display.displaySemiSoftCheeses, editBoardFailure);
};

const addSemiSoftToBoardSuccess = (data) => {
  cheeseApi.getCheeses(display.displaySoftCheeses, editBoardFailure);
};

const addSoftToBoardSuccess = (data) => {
  // cheeseApi.getCheeses(display.displaySoftCheeses, editBoardFailure);
};






const addToBoardFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  console.log(data);
  console.log(data.cheeses);
  $('.single-saved-board-body').removeClass('hidden');
};

const singleSavedBoardFailure = (error) => {
  console.error(error);
};


const deleteBoardSuccess = () => {
  app.currentBoard.board_id = undefined;
  app.currentBoard.name = '';
  $("#single-saved-board-modal").find("p").text('');
  $("#single-saved-board-modal").find("h4").text('');
  $("#delete-board-modal").modal('hide');
  $(".launch-create").removeClass('hidden');
  console.log('board deleted');
};
const deleteBoardFailure = (error) => {
  console.error(error);
};


const editBoardSuccess = (data) => {
  console.log(data);
  app.currentBoard.name = data.board.name;
  $("#edit-board-modal").modal('hide');
  $("#single-saved-board-modal").find("h4").text(app.currentBoard.name);
  $("#single-saved-board-modal").modal('show');
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
  addToBoardFailure,
  singleSavedBoardSuccess,
  singleSavedBoardFailure,
  deleteBoardSuccess,
  deleteBoardFailure,
  editBoardSuccess,
  editBoardFailure,
};
