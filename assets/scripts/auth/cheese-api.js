'use strict';

const app = require('../app-data.js');


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







module.exports = {
  createBoard,
  deleteBoard,
  editBoard
};
