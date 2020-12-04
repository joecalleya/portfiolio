
import {projectItemsArray} from "./data/projects.js";
import dragScrolling from "./scripts/dragScrolling.js";

dragScrolling();

const scrollButtons = () => {
    //this  following items are for setting up events on the scroll buttons so we can click and scroll

    const scrollableContainer = document.querySelector('#scrollable');
    const scrollRightButton = document.querySelector('#scroll__right__button');
    const scrollLeftButton = document.querySelector('#scroll__left__button');
    
    scrollRightButton.addEventListener('click', () => {
        scrollableContainer.scrollLeft += 220;
    })
    scrollLeftButton.addEventListener('click', () => {
        scrollableContainer.scrollLeft -= 220;
    })
}
scrollButtons()

const createHTML = (webLink, name, description, image, gitHubLink, techStack) => {
    
    //this function will take the html template from the projects section and add the JSON project data in data/projects.
    const projectElementSelection = document.querySelector('.projects__container');
    projectElementSelection.innerHTML +=
                                            `<div class="project__detail">
                                            <div class="project__detail__text__git">
                                            <h1>${name}</h1>
                                            <a href=${gitHubLink} target="_blank" rel="noopener noreferrer">
                                            <i class="fab fa-github-square"></i></a>
                                            </div>
                                            <a href=${webLink}>
                                                <img class="project__detail__image" src=${image} alt="${name}">
                                            </a>
                                            <p class="project__text">${description}</p>

                                            <p> ${techStack}</p>
                                        </div> `
};

projectItemsArray.map((item) => {
    createHTML(item.webLink, item.name, item.description, item.image, item.gitHubLink, item.techStack)
})