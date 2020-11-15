"use strict";

var scrollableContainer = document.querySelector('#scrollable');
var scrollRightButton = document.querySelector('#scroll__right__button');
var scrollLeftButton = document.querySelector('#scroll__left__button');
scrollRightButton.addEventListener('click', function (event) {
  scrollableContainer.scrollLeft += 275;
});
scrollLeftButton.addEventListener('click', function (event) {
  scrollableContainer.scrollLeft -= 275;
});