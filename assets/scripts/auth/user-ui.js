'use strict';

const app = require('../app-data.js');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signUpFailure = (error) => {
  console.error(error);
  $("#sign-up-modal").modal('hide');
  $('#sign-up-fail-modal').modal('show');
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $(".change-pass-button").removeClass('hidden');
  $(".sign-out-button").removeClass('hidden');
  $(".sign-up-button").addClass('hidden');
  $(".sign-in-button").addClass('hidden');
};

const signInFailure = (error) => {
  console.error(error);
  $("#sign-in-modal").modal('hide');
  $('#sign-in-fail-modal').modal('show');
};

const signOutSuccess = (data) => {
  app.user = null;
  console.log(data);
  console.log('signed out');
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
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePasswordSuccess,
  success,
  failure,
};
