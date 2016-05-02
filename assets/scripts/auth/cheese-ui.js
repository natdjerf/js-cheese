'use strict';

const app = require('../app-data.js');

let currentBoard = {
  board_id: undefined,
};
let myBoards;
let myCheeses;

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
  // console.log(currentBoard.board_id.cheeses);
  myBoards=currentBoard.board_id.cheeses ;
  console.log(myBoards);


//       for (let i = 0; i < data.length; i++) {
//               myBoards.push(this.data.name[i]);
//       }
//     }
//   $( "#saved-boards-modal" ).find( "p" ).text(data);
// };
};



const savedBoardsFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  console.log(data.board);
  myCheeses = data.board;
  console.log(myCheeses);
  console.log(myCheeses.cheeses);


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
  singleSavedBoardFailure,
  currentBoard,
  myCheeses
};
