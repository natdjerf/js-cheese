'use strict';

const app = require('../app-data.js');

const savedBoardsSuccess = () => {
  $('.saved-boards-body').removeClass('hidden');
};

const savedBoardsFailure = (error) => {
  console.error(error);
};

const signUpSuccess = () => {
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
  $("#sign-in-modal").modal('hide');
  $(".dropdown").removeClass('hidden');
  $(".sign-in-button").addClass('hidden');
  $(".create-instructions").removeClass('hidden');
  $(".access-saved-boards").removeClass('hidden');
  app.scrollToID("#create", 750);
};

const signInFailure = (error) => {
  console.error(error);
  $("#sign-in-modal").modal('hide');
  $('#sign-in-fail-modal').modal('show');
};

const signOutSuccess = () => {
  app.currentUser.token = '';
  app.currentUser.id = undefined;
  $(".cheese").addClass('hidden');
  $(".create-instructions").addClass('hidden');
  $("#sign-out-modal").modal('hide');
  $(".arrow-down-create").addClass('hidden');
  $(".dropdown").addClass('hidden');
  $(".sign-in-button").removeClass('hidden');

};

const changePasswordSuccess = () => {
  console.log('Password changed');
};

const success = () => {
};

const failure = (error) => {
  console.error(error);
};


module.exports= {
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
