let upButton = document.querySelector(".footer-to-top");

upButton.onclick = function() {
  window.scrollTo(0, 0);
};

let tutors = Array.from(document.querySelectorAll(".tutors-card"));

let tutorsPrev = document.querySelector(".swiper-button-prev");
let tutorsNext = document.querySelector(".swiper-button-next");

console.log("tutors amount: " + tutors.length);

tutorsNext.onclick = function () {
  console.log("next pressed");
  for (let i = 0; i <= tutors.length - 1; i++) {
    if (i !== tutors.length - 1) {
      let temp = tutors[i];
      tutors[i+1] = tutors[i];
      tutors[tutors.length - 1] = temp;
    }
  }
};