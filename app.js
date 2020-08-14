// Carousel

const carouselSlide = document.querySelector('.carousel-slide');
const carouselText = document.querySelectorAll('.first-container');

//Buttons
const enBtn = document.querySelector('#enBtn');
const esBtn = document.querySelector('#esBtn');
const jaBtn = document.querySelector('#jaBtn');

// Counter

let counter =  1;


// Width of one individual p element
const size = carouselText[0].clientWidth;


// // Moves slide to the left so last clone is to the left of the first actual image - copied and pasted below for nextBtn and prevBtn for when counter increases/decreases 
// carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

// Button listeners

enBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    if (counter == 1) {
        return;
    } else if (counter == 2) {
        counter--;
        carouselSlide.style.transform = 'translateX(0)';
    } else if (counter == 3) {
        counter = 1;
        carouselSlide.style.transform = 'translateX(0)';
    }
});

esBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // To avoid users clicking too fast and going beyond 0 (transitionend triggers after 0.4s), add 'return' which acts as stopper
    // if (counter <= 0) return;
    if (counter == 1) {
        counter++;
        carouselSlide.style.transform = 'translateX(' +(-size) + 'px)';
    } else if (counter == 2) {
        return;
    } else if (counter == 3) {
        counter--;
        carouselSlide.style.transform = 'translateX(' +(-size) + 'px)';
    }
});

jaBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    if (counter == 1) {
        counter = 3;
        carouselSlide.style.transform = 'translateX(' +(-size * 2) + 'px)';
    } else if (counter == 2) {
        counter++;
        carouselSlide.style.transform = 'translateX(' +(-size * 2) + 'px)';
    } else if (counter == 3) {
        console.log("Already on Japanese")
        return;
    }
});

// transitionend used - event listener for transitions
// When it reaches lastClone, turns off transition effect, then jumps to the original copy of photo which is penultimate, so minus 2 from entire length

// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselText[counter].id === 'lastClone') {
//         // To remove transition when resetting counter to last image (second to last)
//         carouselSlide.style.transition = 'none';
//         counter = carouselText.length -2;
//         carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
//     }
//     if (carouselText[counter].id === 'firstClone') {
//         // To remove transition when resetting counter to last image (second to last)
//         carouselSlide.style.transition = 'none';
//         // counter = carouselText.length - counter;
//         counter = 1;
//         carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
//     }
// });

// About Me multilingual title

let language = "english";

const aboutTitle = document.querySelector('#aboutTitle');

aboutTitle.addEventListener('click', () => {

    if (language == "english") {
        aboutTitle.textContent = "Sobre mí";
        language = "spanish";
    } else if (language = "spanish") {
        aboutTitle.textContent = "私について";
        language = "japanese";
    }　else if (language = "japanese") {
        aboutTitle.textContent = "About me";
        language = "english";
    }
});

// Project selection
const projectBoxes = document.querySelectorAll(".project-box");

const projectModals = document.querySelectorAll(".project-modal");

const modalBg = document.querySelectorAll(".modal-bg");

const modalClose = document.querySelectorAll(".modal-close");

const body = 

projectBoxes.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.id);
        modalBg[item.id].classList.add("active");
        projectModals[item.id].classList.add("active");
        document.body.style.overflow = 'hidden';
    })
});

modalClose.forEach(item=>{
    item.addEventListener('click', () => {
        modalBg[item.id].classList.remove("active");
        projectModals[item.id].classList.remove("active");
        document.body.style.overflow = 'visible';
    })
});
