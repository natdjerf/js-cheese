'use strict';

const app = require('../app-data.js');

const createBoardSuccess = (data) => {
  app.board = data.board;
  app.user = data.user;
  console.log(data.user);
  console.log(data.board);
};

const createBoardFailure = (error) => {
  console.error(error);
};

const addToBoardSuccess = (data) => {
  app.board = data.board;
  console.log(data.board);
};

const addToBoardFailure = (error) => {
  console.error(error);
};

const savedBoardsSuccess = (data) => {
  app.board = data.board;
  console.log(data);
};

const savedBoardsFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  app.board = data.board;
  console.log(data);
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
