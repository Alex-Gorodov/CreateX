let upButton = document.querySelector(".footer-to-top");

upButton.onclick = function() {
  window.scrollTo(0, 0);
};



let tutors = Array.from(document.querySelectorAll(".tutors-card"));

let tutorsPrev = document.querySelector(".swiper-button-prev");
let tutorsNext = document.querySelector(".swiper-button-next");

let ww = window.innerWidth;

let containers = Array.from(document.querySelectorAll(".section-container"));

console.log(containers.length);

let containerWidth = function () {
  for (let i = 0; i < containers.length; i++) {
    if (ww < 800) {
      console.log('Less than 800');
      containers[i].classList.add("one-columned-container");
    }
  }
};

containerWidth();
