'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const ui = require('./user-ui');


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

const cheeseHandlers = () => {
  // create board
  $('#create-board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    data.board.user_id = ui.currentUser.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });
  // get saved boards
	//Temp moved:
  // $('#saved-boards').on('submit', function (event) {
  //   event.preventDefault();
  //   console.log('Get Saved Boards clicked.');
  //   cheeseApi.savedBoards(cheeseUi.savedBoardsSuccess, cheeseUi.savedBoardsFailure);

    // $(".edit-link").addClass('hidden');
    // data.board.board_id = app.board.id;
    // data.board.user_id = app.user.id;
  // });
  // get current board
  $('#single-saved-board').on('submit', function (event) {
    event.preventDefault();
    console.log('Get Details clicked.');
    cheeseApi.singleSavedBoard(cheeseUi.singleSavedBoardSuccess, cheeseUi.savedBoardFailure);
  });

  // navigation click actions
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
  // delete board action
  $('#delete-board').on('submit', function (event) {
    event.preventDefault();
    console.log('Delete Board clicked');
    cheeseApi.deleteBoard(cheeseUi.deleteBoardSuccess, cheeseUi.deleteBoardFailure);
  });
  // edit board name
  $('#edit-board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    data.board.user_id = ui.currentUser.id;
    console.log(data);
    console.log('Edit Board clicked');
    cheeseApi.editBoard(cheeseUi.editBoardSuccess, cheeseUi.editBoardFailure, data);
  });

};


// getCheess is in cheeseUI

module.exports = {
    // displayCheeses,
    cheeseHandlers,
    scrollToID
  };
