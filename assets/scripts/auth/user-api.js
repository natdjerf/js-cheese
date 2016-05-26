'use strict';

const app = require('../app-data.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.server.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.server.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.server.api + '/sign-out/' + app.currentUser.id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.server.api + '/change-password/' + app.currentUser.id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
    data,
  }).done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
