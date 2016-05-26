'use strict';

const app = require('../app-data.js');


// Handlebars JSON Render Events: Saved Boards
const savedBoards = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.server.api + '/boards',
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const savedBoardsSuccess = (data) => {
  console.log(data);
  console.log(data.boards);
  $('.saved-boards-body').removeClass('hidden');
};

const savedBoardsFailure = (error) => {
  console.error(error);
};

let displayBoards = function(boards){
  let allBoardsTemplate = require('./../templates/all-boards.handlebars');
    $('.saved-boards-body').html(allBoardsTemplate({
      boards : boards.boards
    }));
    $('.saved-boards-body').addClass('hidden');
    $('#saved-boards').on('submit', function (event) {
      event.preventDefault();
      console.log('Get Saved Boards clicked.');
      savedBoards(savedBoardsSuccess, savedBoardsFailure);
    });
};

let getBoards = function(){
  $.ajax({
    url: app.server.api + '/boards',
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(function(boards){
    displayBoards(boards);
    console.log(boards);
  });
};




const signUpSuccess = (data) => {
  console.log(data);
  $("#sign-up-modal").modal('hide');
  $("#sign-in-modal").modal('show');
};

const signUpFailure = (error) => {
  console.error(error);
  $("#sign-up-modal").modal('hide');
  $('#sign-up-fail-modal').modal('show');
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user.id;
  console.log(app.currentUser);
  getBoards();
  $("#sign-in-modal").modal('hide');
  $(".dropdown").removeClass('hidden');
  $(".sign-in-button").addClass('hidden');
  $(".arrow-down-create").removeClass('hidden');
  $(".access-saved-boards").removeClass('hidden');
  // cheeseUi.scrollToID("#anatomy", 750);
};

const signInFailure = (error) => {
  console.error(error);
  $("#sign-in-modal").modal('hide');
  $('#sign-in-fail-modal').modal('show');
};

const signOutSuccess = () => {
  app.currentUser.token = '';
  app.currentUser.id = undefined;
  console.log('signed out');
  $(".cheese").addClass('hidden');
  $("#sign-out-modal").modal('hide');
  $(".arrow-down-create").addClass('hidden');
  $(".dropdown").addClass('hidden');
  $(".sign-in-button").removeClass('hidden');

};

const changePasswordSuccess = () => {
  console.log('Password changed');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


module.exports= {
  app,
  getBoards,
  savedBoardsSuccess,
  savedBoardsFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePasswordSuccess,
  success,
  failure,
};
