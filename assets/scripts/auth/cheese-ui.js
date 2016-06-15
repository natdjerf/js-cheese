'use strict';

const cheeseApi = require('./cheese-api');
const app = require('../app-data.js');
const display = require('../display.js');

const failure = (error) => {
  console.error(error);
};

const createBoardSuccess = (data) => {
  app.currentBoard.board_id = data.board.id;
  app.currentBoard.name = data.board.name;
  cheeseApi.getCheeses(display.displayHardCheeses, failure);
  $("#create-board-modal").modal('hide');

  $(".hard-cheese").removeClass('hidden');
  app.scrollToID("#cheeses", 750);
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
  $(".create-instructions").removeClass('hidden');
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

const getBoardsSuccess = () => {
		cheeseApi.getBoards(display.displayBoards, failure);
};

const getCheeseSuccess = () => {
  cheeseApi.getCheese(display.displayCheeseDetails, failure);
};





module.exports = {
  createBoardSuccess,
  createBoardFailure,
  addHardToBoardSuccess,
  addSemiHardToBoardSuccess,
  addSemiSoftToBoardSuccess,
  addSoftToBoardSuccess,
  addToBoardFailure,
  deleteBoardSuccess,
  deleteBoardFailure,
  editBoardSuccess,
	getBoardsSuccess,
	failure,
	getCheeseSuccess,
};
