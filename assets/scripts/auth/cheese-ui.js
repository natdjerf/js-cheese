'use strict';

const cheeseApi = require('./cheese-api');
// const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const display = require('../display.js');


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

const addToBoardSuccess = (data) => {
	cheeseApi.getCheeses(display.displayCheeses, editBoardFailure);
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
// let displayCheeses = function(cheeses){
//   let allCheeseTemplate = require('./../templates/all-cheese.handlebars');
//     $('.all-cheese').html(allCheeseTemplate({
//       cheeses : cheeses.cheeses
//     }));
//     $(".semi-hard-cheese").addClass('hidden');
//     $(".soft-cheese").addClass('hidden');
//     $(".semi-soft-cheese").addClass('hidden');
//
//
//     $('.hard-cheese .add-cheese-button').on('click', function (event) {
//      event.preventDefault();
//     $(".hard-cheese").addClass('hidden');
//     $(".semi-hard-cheese").removeClass('hidden');
//     });
//
//     $('.semi-hard-cheese .add-cheese-button').on('click', function (event) {
//      event.preventDefault();
//      $(".semi-hard-cheese").addClass('hidden');
//      $(".semi-soft-cheese").removeClass('hidden');
//     });
//
//     $('.semi-soft-cheese .add-cheese-button').on('click', function (event) {
//      event.preventDefault();
//      $(".semi-soft-cheese").addClass('hidden');
//     	$(".soft-cheese").removeClass('hidden');
//     });
//
//     $('.soft-cheese .add-cheese-button').on('click', function (event) {
//      event.preventDefault();
//      $(".soft-cheese").addClass('hidden');
// 		 $('.single-saved-board-body').html('');
//      getCurrentBoard();
//      $("#single-saved-board-modal").modal('show');
// 		 $("#single-saved-board-modal").find( "h4" ).text(app.currentBoard.name);
//     });
//
//     // add to cheese_addition table
//     $('.add-cheese-button').on('click', function (event) {
//      event.preventDefault();
//      console.log('Add to Board clicked.');
//      let data = getFormFields(this);
//      data.cheese_addition = {};
//      data.cheese_addition.cheese_id = $(event.target).closest('div').data('id');
//      data.cheese_addition.board_id = app.currentBoard.board_id;
//      console.log(data);
//      addToBoard(addToBoardSuccess,addToBoardFailure, data);
//     });
//
// };



const createBoardSuccess = (data) => {
  app.currentBoard.board_id = data.board.id;
  app.currentBoard.name = data.board.name;
  console.log(app.currentBoard);
  cheeseApi.getCheeses(display.displayCheeses, editBoardFailure);
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
  app.currentBoard.board_id = undefined;
  app.currentBoard.name = '';
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
  app.currentBoard.name = data.board.name;
  $("#edit-board-modal").modal('hide');
  $("#single-saved-board-modal").find( "h4" ).text(app.currentBoard.name);
  $("#single-saved-board-modal").modal('show');
};

const editBoardFailure = (error) => {
  console.error(error);
};








module.exports= {
  scrollToID,
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
