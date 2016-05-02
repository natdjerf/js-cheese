'use strict';

const app = require('../app-data.js');
const ui = require('./user-ui.js');
const cheeseUi = require('./cheese-ui');

const createBoard = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/boards',
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};

const addToBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/cheese_additions',
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

const savedBoards = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/boards',
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const singleSavedBoard = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/boards/' + cheeseUi.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const deleteBoard = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/boards/' + cheeseUi.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const editBoard = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/boards/' + cheeseUi.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + ui.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};







module.exports = {
  createBoard,
  addToBoard,
  savedBoards,
  singleSavedBoard,
  deleteBoard,
  editBoard
};
