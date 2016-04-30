'use strict';

const app = require('../app-data.js');

const createBoardSuccess = (data) => {
  app.board = data.board;
  console.log(data.board);
  console.log(app.board);
};

const createBoardFailure = (error) => {
  console.error(error);
};

const addToBoardSuccess = (data) => {
  console.log(data);
};

const addToBoardFailure = (error) => {
  console.error(error);
};

const savedBoardsSuccess = (data) => {
  app.board = data.board;
  console.log(data);
  console.log(app.board.cheeses);

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
