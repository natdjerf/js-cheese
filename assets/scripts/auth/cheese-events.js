'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const display = require('../display.js');


const cheeseHandlers = () => {
  // create board
  $('#create-board').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    data.board.user_id = app.currentUser.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess, cheeseUi.failure, data);
    $(".semi-hard-cheese").addClass('hidden');
    $(".soft-cheese").addClass('hidden');
    $(".semi-soft-cheese").addClass('hidden');
  });
  // navigation click actions
  $('.scroll-link').on('click', function(event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    cheeseUi.scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function(event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
  // delete board action
  $('#delete-board').on('submit', function(event) {
    event.preventDefault();
    console.log('Delete Board clicked');
    cheeseApi.deleteBoard(cheeseUi.deleteBoardSuccess, cheeseUi.deleteBoardFailure);
  });

  // edit board name
  $('#edit-board').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    data.board.user_id = app.currentUser.id;
    console.log(data);
    console.log('Edit Board clicked');
    cheeseApi.editBoard(cheeseUi.editBoardSuccess, cheeseUi.editBoardFailure, data);
  });

  // these are the add cheese events; testing:
  $('#all-cheeses').on('click', '.get-details', function(event) {
    event.preventDefault();
    let cheeseId = $(event.target).attr('data-id');
    $('.add-cheese-button').attr('data-id', cheeseId);
  });

  // add to cheese_addition table
  $('#add-cheese-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    let cheeseId = $('.add-cheese-button').attr('data-id');
    data.cheese_addition = {};
    data.cheese_addition.cheese_id = cheeseId;
    data.cheese_addition.board_id = app.currentBoard.board_id;
    cheeseApi.addToBoard(cheeseUi.addToBoardSuccess, cheeseUi.addToBoardFailure, data);
  });





};


module.exports = {
  cheeseHandlers,
};
