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

module.exports= {
  createBoardSuccess,
  createBoardFailure
};
