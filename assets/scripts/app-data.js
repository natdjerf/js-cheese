'use strict';

// const app = {
//   api: 'https://gentle-everglades-70199.herokuapp.com',
// };

const server = {
  api: 'http://localhost:3000',
};

// Board Temporary storage:
let currentBoard = {
  board_id: undefined,
  name: '',
};

// User storage
let currentUser = {
  id: undefined,
  token:''
};


module.exports = {
  server,
  currentBoard,
  currentUser
};
