'use strict';

const authApi = require('./user-api');
const authUi = require('./user-ui');
const getFormFields = require('../../../lib/get-form-fields');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Sign Up clicked.');
    authApi.signUp(authUi.signUpSuccess, authUi.signUpFailure, data);
  });
  $('#sign-in').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Sign In clicked');
    authApi.signIn(authUi.signInSuccess, authUi.signInFailure, data);
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    console.log('Sign Out clicked');
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Change Password');
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
  });
  $('#new_user').on("click", function (event) {
    event.preventDefault();
    console.log('Register clicked');
  });
};

module.exports = {
    addHandlers
  };
