'use strict';

const app = require('../app-data.js');

let currentUser = {
  id: undefined,
  token:''
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
  currentUser.token = data.user.token;
  currentUser.id = data.user.id;
  console.log(currentUser);
  $("#sign-in-modal").modal('hide');
  $(".dropdown").removeClass('hidden');
  $(".sign-in-button").addClass('hidden');
  $(".launch-create").removeClass('hidden');
  // $(".create-board-start").removeClass('hidden');
  $(".access-saved-boards").removeClass('hidden');
};

const signInFailure = (error) => {
  console.error(error);
  $("#sign-in-modal").modal('hide');
  $('#sign-in-fail-modal').modal('show');
};

const signOutSuccess = () => {
  currentUser.token = '';
  currentUser.id = undefined;
  console.log('signed out');
  $(".cheese").addClass('hidden');
  // $(".logged-in-view").addClass('hidden');
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
  currentUser,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePasswordSuccess,
  success,
  failure,
};
