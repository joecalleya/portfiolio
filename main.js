
import {projectItemsArray} from "./data/projects.js";


const scrollButtons = () => {
    //this  following items are for setting up events on the scroll buttons so we can click and scroll

    const scrollableContainer = document.querySelector('#scrollable');
    const scrollRightButton = document.querySelector('#scroll__right__button');
    const scrollLeftButton = document.querySelector('#scroll__left__button');
    
    scrollRightButton.addEventListener('click', (event) => {
        scrollableContainer.scrollLeft += 225;
    })
    scrollLeftButton.addEventListener('click', (event) => {
        scrollableContainer.scrollLeft -= 225;
    })
}
scrollButtons()

const createHTML = (webLink, name, description, image, gitHubLink, techStack) => {
    
    //this function will take the html template from the projects section and add the JSON project data in data/projects.
    const projectElementSelection = document.querySelector('.projects__container');
    projectElementSelection.innerHTML +=
        `<div class="project__detail">
                                            <a href=${webLink}>
                                                <img class="project__detail__image" src=${image} alt="${name}">
                                            </a>
                                            <h1>${name}</h1>
                                            <p class="project__text">${description}</p>
                                            <a href=${gitHubLink} target="_blank" rel="noopener noreferrer">
                                            <i class="fab fa-github-square"></i>
                                            <p> ${techStack}</p>
                                        </a>
                                        </div> `
};

projectItemsArray.map((item) => {
    createHTML(item.webLink, item.name, item.description, item.image, item.gitHubLink, item.techStack)
})