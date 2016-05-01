'use strict';

const app = require('../app-data.js');

const createBoardSuccess = (data) => {
  console.log(data.board);
  $("#create-board-modal").modal('hide');
  $(".cheese").removeClass('hidden');
};

const createBoardFailure = (error) => {
  console.error(error);
};

const addToBoardSuccess = (data) => {
  console.log(data);
  // the addition to the cheese addition table
};

const addToBoardFailure = (error) => {
  console.error(error);
};

const savedBoardsSuccess = (data) => {
  app.board = data.board;
  // console.log(this.board);
  $( "#saved-boards-modal" ).find( "p" ).text('please print');
};

const savedBoardsFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  app.board = data.board;
  console.log(data);
  console.log(data.board.cheeses);
};

const singleSavedBoardFailure = (error) => {
  console.error(error);
};



module.exports= {
  createBoardSuccess,
  createBoardFailure,
  addToBoardSuccess,
  addToBoardFailure,
  savedBoardsSuccess,
  savedBoardsFailure,
  singleSavedBoardSuccess,
  singleSavedBoardFailure
};
