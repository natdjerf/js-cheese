'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const ui = require('./user-ui');


// If I try to use handlebars --
//  This section should probably be relocated
// add to board click event needs load when page is rendered

// let displayCheeses = function(cheeses){
//   let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
//     $('.cheese-section').append(allCheeseTemplate({
//       cheeses
//     }));
//     $('.add-cheese-button').on('click', function (event) {
//       event.preventDefault();
//      --etc, etc..
//    };
// Phil used local storage..
// localStorage.setItem('ID', $(this).attr('data-attribute'));

// let getCheeses = function(){
//   $.ajax({
//     url: "http://localhost:3000/cheeses",
//   }).done(function(cheeses){
//     displayCheeses(cheeses);
//     console.log(cheeses);
//   });
// };




const cheeseHandlers = () => {
  $('#create-board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    data.board.user_id = ui.currentUser.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });
  $('#saved-boards').on('submit', function (event) {
    event.preventDefault();
    console.log('Get Saved Boards clicked.');
    cheeseApi.savedBoards(cheeseUi.savedBoardsSuccess, cheeseUi.savedBoardsFailure);
    // data.board.board_id = app.board.id;
    // data.board.user_id = app.user.id;
  });
  $('#single-saved-board').on('submit', function (event) {
    event.preventDefault();
    console.log('Get Details clicked.');
    cheeseApi.singleSavedBoard(cheeseUi.singleSavedBoardSuccess, cheeseUi.savedBoardFailure);
  });
  $('.add-cheese-button').on('click', function (event) {
   event.preventDefault();
   console.log('Add to Board clicked.');
   let data = getFormFields(this);
   data.cheese_addition = {};
   data.cheese_addition.cheese_id = $(event.target).closest('div').data('id');
   data.cheese_addition.board_id = cheeseUi.currentBoard.board_id;
   console.log(data);
   // data = the details of the board/cheese ids to the cheese addition table
   cheeseApi.addToBoard(cheeseUi.addToBoardSuccess,cheeseUi.addToBoardFailure, data);
});

};







module.exports = {
    // getCheeses,
    cheeseHandlers
  };
