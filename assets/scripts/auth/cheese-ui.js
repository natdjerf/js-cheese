'use strict';

const cheeseApi = require('./cheese-api');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const ui = require('./user-ui');

const addToBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/cheese_additions',
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

const addToBoardSuccess = (data) => {
  console.log(data);
  // the addition to the cheese addition table
};

const addToBoardFailure = (error) => {
  console.error(error);
};

let displayCheeses = function(cheeses){
  let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
    $('.all-cheese').append(allCheeseTemplate({
      cheeses : cheeses.cheeses
    }));
    $('.hard-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
    $(".hard-cheese").addClass('hidden');
    });
    $('.semi-hard-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".semi-hard-cheese").addClass('hidden');
    });
    $('.semi-soft-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".semi-soft-cheese").addClass('hidden');
    });
    $('.soft-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".soft-cheese").addClass('hidden');
    });
    // add to cheese_addition table
    $('.add-cheese-button').on('click', function (event) {
     event.preventDefault();
     console.log('Add to Board clicked.');
     let data = getFormFields(this);
     data.cheese_addition = {};
     data.cheese_addition.cheese_id = $(event.target).closest('div').data('id');
     data.cheese_addition.board_id = currentBoard.board_id;
     console.log(data);
     // data = the details of the board/cheese ids to the cheese addition table
     addToBoard(addToBoardSuccess,addToBoardFailure, data);
    });

};

let getCheeses = function(){
  $.ajax({
    url: "http://localhost:3000/cheeses",
  }).done(function(cheeses){
    displayCheeses(cheeses);
    console.log(cheeses);
  });
};




let currentBoard = {
  board_id: undefined,
  name: '',
};
let currentCheeses = [];
let myBoards = [];

const createBoardSuccess = (data) => {
  currentBoard.board_id = data.board.id;
  console.log(currentBoard);
  currentBoard.name = data.board.name;
  console.log(currentBoard);
  getCheeses();
  $("#create-board-modal").modal('hide');
  $(".cheese").removeClass('hidden');
  // $(".launch-create").addClass('hidden');

};

const createBoardFailure = (error) => {
  console.error(error);
  $("#create-board-modal").modal('hide');
  $("#create-board-fail-modal").modal('show');
};


const savedBoardsSuccess = (data) => {
  console.log(data);
  console.log(data.boards);
  for (let i = 0; i < data.boards.length; i++) {
      myBoards.push(data.boards[i].name);
      }
  console.log(myBoards);
  // $(".edit-link").removeClass('hidden');

};

const savedBoardsFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  console.log(data);
  console.log(data.cheeses);
  for (let i = 0; i < data.cheeses.length; i++) {
      currentCheeses.push(data.cheeses[i].name);
      }
  console.log(currentCheeses);
  for (var i = 0; i < currentCheeses.length; i++) {
    $("#single-saved-board-modal").find( "p" ).text('Cheeses:  ' + currentCheeses);
    $("#single-saved-board-modal").find( "h4" ).text(currentBoard.name);
  }
};

const singleSavedBoardFailure = (error) => {
  console.error(error);
};

const deleteBoardSuccess = () => {
  currentBoard.board_id = undefined;
  currentBoard.name = '';
  currentCheeses = [];
  $("#single-saved-board-modal").find( "p" ).text('');
  $("#single-saved-board-modal").find( "h4" ).text('');
  $("#delete-board-modal").modal('hide');
  $(".launch-create").removeClass('hidden');
  console.log('board deleted');
};

const deleteBoardFailure = (error) => {
  console.error(error);
};

const editBoardSuccess = (data) => {
  console.log(data);
  currentBoard.name = data.board.name;
  $("#edit-board-modal").modal('hide');
  $("#single-saved-board-modal").find( "h4" ).text(currentBoard.name);
  $("#single-saved-board-modal").modal('show');

};

const editBoardFailure = (error) => {
  console.error(error);
};




module.exports= {
  getCheeses,
  addToBoard,
  currentBoard,
  currentCheeses,
  myBoards,
  createBoardSuccess,
  createBoardFailure,
  addToBoardSuccess,
  addToBoardFailure,
  savedBoardsSuccess,
  savedBoardsFailure,
  singleSavedBoardSuccess,
  singleSavedBoardFailure,
  deleteBoardSuccess,
  deleteBoardFailure,
  editBoardSuccess,
  editBoardFailure
};
