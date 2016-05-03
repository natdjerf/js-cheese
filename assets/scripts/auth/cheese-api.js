'use strict';

const app = require('../app-data.js');
const authUi = require('./user-ui.js');
const cheeseUi = require('./cheese-ui');


const createBoard = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/boards',
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};


const deleteBoard = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/boards/' + cheeseUi.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};


const editBoard = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/boards/' + cheeseUi.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + authUi.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};







module.exports = {
  createBoard,
  deleteBoard,
  editBoard
};
