
const scrollableContainer = document.querySelector('#scrollable');
const scrollRightButton = document.querySelector('#scroll__right__button');
const scrollLeftButton = document.querySelector('#scroll__left__button');


scrollRightButton.addEventListener('click', (event) => {
    scrollableContainer.scrollLeft += 225;
})
scrollLeftButton.addEventListener('click', (event) => {
    scrollableContainer.scrollLeft -= 225;
})
