'use strict';

// const app = require('../app-data.js');

let currentBoard = {
  board_id: undefined,
};
let currentCheeses = [];

const createBoardSuccess = (data) => {
  currentBoard.board_id = data.board.id;
  console.log(currentBoard);
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
  console.log(data);
};

const savedBoardsFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  console.log(data);
  // console.log(data.cheeses);
  for (let i = 0; i < data.cheeses.length; i++) {
      currentCheeses.push(data.cheeses[i].name);
      }
  console.log(currentCheeses);
  // $( "#saved-boards-modal" ).find( "p" ).text(myBoard);
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
  singleSavedBoardFailure,
  currentBoard,
  currentCheeses
};
