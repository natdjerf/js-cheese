'use strict';

const app = require('../app-data.js');
const display = require('../display.js');

const getCheeses = function(success, failure){
  $.ajax({
    url: app.server.api + '/cheeses/',
  }).done(success)
  .fail(failure);
};

const getCheese = function(success, failure){
  $.ajax({
    url: app.server.api + '/cheeses/' + app.currentCheese.id,
  }).done(success)
  .fail(failure);
};


const addToBoard = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.server.api + '/cheese_additions',
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
    data,
  }).done(success)
  .fail(failure);
};

const getCurrentBoard = function(success,failure){
  $.ajax({
    url: app.server.api + '/boards/' + app.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

// Handlebars JSON Render Events: Board Action
const singleSavedBoard = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.server.api + '/boards/' + app.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};
//until here:

const createBoard = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.server.api + '/boards',
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};


const deleteBoard = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.server.api + '/boards/' + app.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};


const editBoard = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.server.api + '/boards/' + app.currentBoard.board_id,
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
    data,
  }).done(success, data)
  .fail(failure);
};

const getBoards = function(success, failure){
  $.ajax({
    url: app.server.api + '/boards',
    headers:{
        Authorization: 'Token token=' + app.currentUser.token,
    },
  }).done(success)
    .fail(failure);
};





module.exports = {
  getCheeses,
  getCheese,
  addToBoard,
  getCurrentBoard,
  singleSavedBoard,
  createBoard,
  deleteBoard,
  editBoard,
  getBoards
};
