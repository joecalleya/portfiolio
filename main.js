
const scrollableContainer = document.querySelector('#scrollable');
const scrollRightButton = document.querySelector('#scroll__right__button');
const scrollLeftButton = document.querySelector('#scroll__left__button');


scrollRightButton.addEventListener('click', (event) => {
    scrollableContainer.scrollLeft += 500;
})
scrollLeftButton.addEventListener('click', (event) => {
    console.log("scrolling left")
    scrollableContainer.scrollLeft -= 500;
})
