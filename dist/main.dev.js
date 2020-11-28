"use strict";

var _projects = require("./data/projects.js");

var _dragScrolling = _interopRequireDefault(require("./scripts/dragScrolling.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dragScrolling["default"])();

var scrollButtons = function scrollButtons() {
  //this  following items are for setting up events on the scroll buttons so we can click and scroll
  var scrollableContainer = document.querySelector('#scrollable');
  var scrollRightButton = document.querySelector('#scroll__right__button');
  var scrollLeftButton = document.querySelector('#scroll__left__button');
  scrollRightButton.addEventListener('click', function () {
    scrollableContainer.scrollLeft += 220;
  });
  scrollLeftButton.addEventListener('click', function () {
    scrollableContainer.scrollLeft -= 220;
  });
};

scrollButtons();

var createHTML = function createHTML(webLink, name, description, image, gitHubLink, techStack) {
  //this function will take the html template from the projects section and add the JSON project data in data/projects.
  var projectElementSelection = document.querySelector('.projects__container');
  projectElementSelection.innerHTML += "<div class=\"project__detail\">\n        <h1>".concat(name, "</h1>\n\n                                            <a href=").concat(webLink, ">\n                                                <img class=\"project__detail__image\" src=").concat(image, " alt=\"").concat(name, "\">\n                                            </a>\n                                            <div class=\"project__detail__text__git\">\n                                            <p class=\"project__text\">").concat(description, "</p>\n                                            <a href=").concat(gitHubLink, " target=\"_blank\" rel=\"noopener noreferrer\">\n                                            <i class=\"fab fa-github-square\"></i></a>\n                                            </div>\n                                            <p> ").concat(techStack, "</p>\n                                        </div> ");
};

_projects.projectItemsArray.map(function (item) {
  createHTML(item.webLink, item.name, item.description, item.image, item.gitHubLink, item.techStack);
});