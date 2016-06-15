'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');

const cheeseHandlers = () => {
  // create board
  $('#create-board').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    data.board.user_id = app.currentUser.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess, cheeseUi.failure, data);
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
  $('#saved-boards-form').on('click', '#saved-boards-button', function(event) {
    event.preventDefault();
    cheeseApi.getBoards(cheeseUi.getBoardsSuccess, cheeseUi.failure);
  });


  // trigger add cheese modal:
  $('#all-cheeses').on('click', '.get-details', function(event) {
    event.preventDefault();
    let cheeseId = $(event.target).attr('data-id');
    let cheeseType = $(event.target).attr('data-type');
    $('.add-cheese-button').attr('data-id', cheeseId);
    $('.add-cheese-button').addClass(cheeseType);
  });
  // add cheese - each family:
  $('#add-cheese-form').on('click', '.hard', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    let cheeseId = $('.add-cheese-button').attr('data-id');
    data.cheese_addition = {};
    data.cheese_addition.cheese_id = cheeseId;
    data.cheese_addition.board_id = app.currentBoard.board_id;
    cheeseApi.addToBoard(cheeseUi.addHardBoardSuccess, cheeseUi.addToBoardFailure, data);
    $("#get-details-modal").modal('hide');
    $(".hard-cheese").addClass('hidden');
    $('.add-cheese-button').removeClass('hard');
    $(".semi-hard-cheese").removeClass('hidden');
  });
  $('#add-cheese-form').on('click', '.semi-hard', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    let cheeseId = $('.add-cheese-button').attr('data-id');
    data.cheese_addition = {};
    data.cheese_addition.cheese_id = cheeseId;
    data.cheese_addition.board_id = app.currentBoard.board_id;
    cheeseApi.addToBoard(cheeseUi.addSemiHardToBoardSuccess, cheeseUi.addToBoardFailure, data);
    $("#get-details-modal").modal('hide');
    $('.add-cheese-button').removeClass('semi-hard');
    $(".semi-hard-cheese").addClass('hidden');
    $(".semi-soft-cheese").removeClass('hidden');
  });
  $('#add-cheese-form').on('click', '.semi-soft', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    let cheeseId = $('.add-cheese-button').attr('data-id');
    data.cheese_addition = {};
    data.cheese_addition.cheese_id = cheeseId;
    data.cheese_addition.board_id = app.currentBoard.board_id;
    cheeseApi.addToBoard(cheeseUi.addSemiSoftToBoardSuccess, cheeseUi.addToBoardFailure, data);
    $("#get-details-modal").modal('hide');
    $('.add-cheese-button').removeClass('semi-soft');
    $(".semi-soft-cheese").addClass('hidden');
    $(".soft-cheese").removeClass('hidden');
  });
  $('#add-cheese-form').on('click', '.soft', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    let cheeseId = $('.add-cheese-button').attr('data-id');
    data.cheese_addition = {};
    data.cheese_addition.cheese_id = cheeseId;
    data.cheese_addition.board_id = app.currentBoard.board_id;
    cheeseApi.addToBoard(cheeseUi.addSoftToBoardSuccess, cheeseUi.addToBoardFailure, data);
    $("#get-details-modal").modal('hide');
    $('.add-cheese-button').removeClass('soft');
    $(".soft-cheese").addClass('hidden');
    $("#view-current-board-modal").modal('show');
    console.log(app.currentBoard.name);
  	$("#view-current-board-modal").find("h4").text(app.currentBoard.name);
  });






};


module.exports = {
  cheeseHandlers,
};
