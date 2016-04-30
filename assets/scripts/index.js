'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const events = require('./auth/user-events');
const cheeseEvents = require('./auth/cheese-events');

// on document ready:
$(() => {
  events.addHandlers();
  // cheeseEvents.getCheeses();
  cheeseEvents.cheeseHandlers();
  console.log('Page loaded!');
  $(".change-pass-button").addClass('hidden');
  $(".sign-out-button").addClass('hidden');
  $(".sign-up-button").addClass('hidden');
  $(".create-board-start").addClass('hidden');
  $(".access-saved-boards").addClass('hidden');
  $(".cheese").addClass('hidden');

});
