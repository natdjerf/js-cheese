'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');

//  This section should probably be relocated
let displayCheeses = function(cheeses){
  let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
    $('.cheese-section').append(allCheeseTemplate({
      cheeses
    }));
};

let getCheeses = function(){
  $.ajax({
    url: "http://localhost:3000/cheeses",
  }).done(function(cheeses){
    displayCheeses(cheeses);
  });
};
//

const cheeseHandlers = () => {
  $('#create-board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    data.board.user_id = app.user.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });
  $('#add-cheese').on('submit', function (event) {
    event.preventDefault();
    console.log('Add to Board clicked.');
    let data = this;
    console.log(data);
    // let data.board.board_id = app.board.id;
    // data.board.user_id = app.user.id;
    // cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });
  $('#saved-boards').on('submit', function (event) {
    event.preventDefault();
    console.log('Get Saved Boards clicked.');
    cheeseApi.savedBoards(cheeseUi.savedBoardsSuccess, cheeseUi.savedBoardsFailure);
    // let data.board.board_id = app.board.id;
    // data.board.user_id = app.user.id;
    // cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });




};







module.exports = {
    getCheeses,
    cheeseHandlers
  };
