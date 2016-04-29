'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const events = require('./auth/user-events');
const cheeseEvents = require('./auth/cheese-events');

// on document ready:
$(() => {
  events.addHandlers();
  cheeseEvents.getCheeses();
  console.log('Page loaded!');
});
