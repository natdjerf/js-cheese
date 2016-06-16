'use strict';

// const server = {
//   api: 'http://localhost:3000',
// };

const server = {
  api: 'https://gentle-everglades-70199.herokuapp.com',
};

// Board Temporary storage:
let currentBoard = {
  board_id: undefined,
  name: ''
};

// User Temporary storage
let currentUser = {
  id: undefined,
  token:''
};

let currentCheese = {
  id: undefined,
};

// Scroll function
function scrollToID(id, speed) {
  let offSet = 50;
  let targetOffset = $(id).offset().top - offSet;
  let mainNav = $('#main-nav');
  $('html,body').animate({
    scrollTop: targetOffset
  }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}


module.exports = {
  server,
  currentBoard,
  currentUser,
  currentCheese,
  scrollToID
};
