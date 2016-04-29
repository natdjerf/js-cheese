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

};







module.exports = {
    getCheeses,
    cheeseHandlers
  };
