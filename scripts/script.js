let upButton = document.querySelector(".footer-to-top");

upButton.onclick = function() {
  window.scrollTo(0, 0);
};

let burger = document.querySelector(".nav-burger .burger-nav-list");

let firstLine = document.querySelector(".burger-line:nth-of-type(1)");
let secondLine = document.querySelector(".burger-line:nth-of-type(2)");
let thirdLine = document.querySelector(".burger-line:nth-of-type(3)");

function burgerOpen() {
    burger.classList.toggle("nav-list-opened");

    firstLine.classList.toggle("burger-open-first-line");
    secondLine.classList.toggle("burger-open-second-line");
    thirdLine.classList.toggle("burger-open-third-line");
}



// let tutors = Array.from(document.querySelectorAll(".tutors-card"));

// let tutorsPrev = document.querySelector(".swiper-button-prev");
// let tutorsNext = document.querySelector(".swiper-button-next");

