let upButton = document.querySelector(".footer-to-top");

upButton.onclick = function() {
  window.scrollTo(0, 0);
};



let tutors = Array.from(document.querySelectorAll(".tutors-card"));

let tutorsPrev = document.querySelector(".swiper-button-prev");
let tutorsNext = document.querySelector(".swiper-button-next");
