'use strict';

// const cheeseApi = require('./cheese-api');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const authUi = require('./user-ui');

// scroll function
function scrollToID(id, speed){
	let offSet = 50;
	let targetOffset = $(id).offset().top - offSet;
	let mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}


// Board Temporary storage:
let currentBoard = {
  board_id: undefined,
  name: '',
  };



// Handlebars JSON Render Events: Cheese Actions
const addToBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/cheese_additions',
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
    data,
  }).done(success)
  .fail(failure);
};


const addToBoardSuccess = (data) => {
  console.log(data);
};
const addToBoardFailure = (error) => {
  console.error(error);
};

const singleSavedBoardSuccess = (data) => {
  console.log(data);
  console.log(data.cheeses);
  $('.single-saved-board-body').removeClass('hidden');
};
const singleSavedBoardFailure = (error) => {
  console.error(error);
};

// Handlebars render:
let displayCurrentBoard = function(cheeses){
  let currentBoardTemplate = require('./../templates/current-board.handlebars');
    $('.single-saved-board-body').html(currentBoardTemplate({
      cheeses : cheeses.cheeses
    }));
    $('.single-saved-board-body').addClass('hidden');
    $('#single-saved-board').on('submit', function (event) {
      event.preventDefault();
      console.log('Get Details clicked.');
      singleSavedBoard(singleSavedBoardSuccess, singleSavedBoardFailure);
    });
};


let getCurrentBoard = function(){
  $.ajax({
    url: 'http://localhost:3000/boards/' + currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
  }).done(function(cheeses){
    displayCurrentBoard(cheeses);
    console.log(cheeses);
  });
};

// Handlebars render:
let displayCheeses = function(cheeses){
  let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
    $('.all-cheese').html(allCheeseTemplate({
      cheeses : cheeses.cheeses
    }));
    $(".semi-hard-cheese").addClass('hidden');
    $(".soft-cheese").addClass('hidden');
    $(".semi-soft-cheese").addClass('hidden');


    $('.hard-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
    $(".hard-cheese").addClass('hidden');
    $(".semi-hard-cheese").removeClass('hidden');
    });

    $('.semi-hard-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".semi-hard-cheese").addClass('hidden');
     $(".semi-soft-cheese").removeClass('hidden');
    });

    $('.semi-soft-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".semi-soft-cheese").addClass('hidden');
    	$(".soft-cheese").removeClass('hidden');
    });

    $('.soft-cheese .add-cheese-button').on('click', function (event) {
     event.preventDefault();
     $(".soft-cheese").addClass('hidden');
		 $('.single-saved-board-body').html('');
     getCurrentBoard();
     $("#single-saved-board-modal").modal('show');
		 $("#single-saved-board-modal").find( "h4" ).text(currentBoard.name);
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


// Handlebars JSON Render Events: Board Action
const singleSavedBoard = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/boards/' + currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};






const createBoardSuccess = (data) => {
  currentBoard.board_id = data.board.id;
  console.log(currentBoard);
  currentBoard.name = data.board.name;
  console.log(currentBoard);
  getCheeses();
  $("#create-board-modal").modal('hide');
  $(".cheese").removeClass('hidden');
	$(".hard-cheese").removeClass('hidden');
  scrollToID("#cheeses", 750);

  // $(".launch-create").addClass('hidden');
};
const createBoardFailure = (error) => {
  console.error(error);
  $("#create-board-modal").modal('hide');
  $("#create-board-fail-modal").modal('show');
};


const deleteBoardSuccess = () => {
  currentBoard.board_id = undefined;
  currentBoard.name = '';
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
  scrollToID,
  getCheeses,
  addToBoard,
  getCurrentBoard,
  singleSavedBoard,
  currentBoard,
  createBoardSuccess,
  createBoardFailure,
  addToBoardSuccess,
  addToBoardFailure,
  singleSavedBoardSuccess,
  singleSavedBoardFailure,
  deleteBoardSuccess,
  deleteBoardFailure,
  editBoardSuccess,
  editBoardFailure
};
