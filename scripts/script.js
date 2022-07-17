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

// Tutors slider
let tutors = document.getElementsByClassName("tutor-card");
let nextTutor = document.querySelector(".slider-btn-next");
let prevTutor = document.querySelector(".slider-btn-prev");
let i = 0;
let arTutorsLength = tutors.length;

let ww = window.innerWidth;

nextTutor.addEventListener("click", moveRight);

function moveRight() {
  if (ww <= 800) {
    if(i == arTutorsLength-1){
      tutors[0].style.display = "flex";
      tutors[i].style.display = "none";
      i = 0;
    } else {
      tutors[i+1].style.display = "flex";
      tutors[i].style.display = "none";
      i++;
    }
  }   
}

prevTutor.addEventListener("click", moveLeft);

function moveLeft() {
  if (ww <= 800) {
    if(i == 0){
      tutors[arTutorsLength-1].style.display = "flex";
      tutors[i].style.display = "none";
      i = arTutorsLength-1;
    } else {
      tutors[i-1].style.display = "flex";
      tutors[i].style.display = "none";
      i--;
    }
  }
}

// Reviews slider
let reviews = document.getElementsByClassName("review-item");
let prevReview = document.querySelector(".review-prev");
let nextReview = document.querySelector(".review-next");
let j = 0;
let arReviewsLength = reviews.length;

let reviewPagination = document.querySelectorAll(".pagination-btn");

for (let i = 0; i < reviewPagination.length; i++) {
    reviewPagination[i].onclick = function () {
      if (reviewPagination[i].classList.contains("active-slide")) {
        return;
      } else { 
        for (let n = 0; n < reviews.length; n++) {
          if (reviewPagination[n].classList.contains("active-slide")) {
            reviewPagination[n].classList.remove("active-slide");
            reviews[n].classList.remove("review-active");
            reviewPagination[i].classList.add("active-slide");
            reviews[i].classList.add("review-active");
          }
        }
      }
    };
}


nextReview.addEventListener("click", moveRightReview);

function moveRightReview() {
    if(j == arReviewsLength-1) {
      reviews[0].classList.add("review-active");
      reviews[j].classList.remove("review-active");
      reviewPagination[j].classList.remove("active-slide");
      reviewPagination[0].classList.add("active-slide");
      j = 0;
    } else {
      reviews[j].classList.remove("review-active");
      reviews[j+1].classList.add("review-active");
      reviewPagination[j].classList.remove("active-slide");
      reviewPagination[j+1].classList.add("active-slide");
      j++;
    }

}

prevReview.addEventListener("click", moveLeftReview);

function moveLeftReview() {
    if(j == 0) {
      reviews[j].classList.remove("review-active");
      reviews[arReviewsLength-1].classList.add("review-active");

      reviewPagination[j].classList.remove("active-slide");
      reviewPagination[reviewPagination.length-1].classList.add("active-slide");
      j = arReviewsLength-1;
    } else {
      reviews[j].classList.remove("review-active");
      reviews[j-1].classList.add("review-active");

      reviewPagination[j].classList.remove("active-slide");
      reviewPagination[j-1].classList.add("active-slide");
      j--;
    }
}

// Parallax
const parallaxElements = document.querySelectorAll('.parallax');

const parallax = elements => {
  if ('undefined' !== elements && elements.length > 0) {
    elements.forEach(element => {
      let y = window.innerHeight - element.getBoundingClientRect().top;
      if (y > 0) {
        element.style.transform = 'translate3d(0, -' + (0.28 * y) + 'px, 0)';
      }
    });
  }
};

parallax(parallaxElements);

window.onscroll = () => {
  parallax(parallaxElements);
};