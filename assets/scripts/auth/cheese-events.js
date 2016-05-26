'use strict';

const cheeseApi = require('./cheese-api');
const cheeseUi = require('./cheese-ui');
const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');


const cheeseHandlers = () => {
  // create board
  $('#create-board').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    data.board.user_id = app.currentUser.id;
    console.log('Create Board clicked.');
    cheeseApi.createBoard(cheeseUi.createBoardSuccess,cheeseUi.failure, data);
  });
  // navigation click actions
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		cheeseUi.scrollToID('#' + sectionID, 750);
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
    data.board.user_id = app.currentUser.id;
    console.log(data);
    console.log('Edit Board clicked');
    cheeseApi.editBoard(cheeseUi.editBoardSuccess, cheeseUi.editBoardFailure, data);
  });

};


module.exports = {
    cheeseHandlers,
  };
