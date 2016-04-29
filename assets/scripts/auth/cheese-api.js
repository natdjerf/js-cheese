'use strict';

const app = require('../app-data.js');

const createBoard = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/boards',
    headers:{
        Authorization: 'Token token=' + app.user.token,
    },
    data,
  }).done(success)
  .fail(failure);
};


module.exports = {
  createBoard
};
