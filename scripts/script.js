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
        } else{
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
    } else{
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

console.log(reviewPagination.length);

nextReview.addEventListener("click", moveRightReview);

function moveRightReview() {
    if(j == arReviewsLength-1){
            reviews[0].style.display = "flex";
            reviews[j].style.display = "none";
            reviewPagination[j].classList.remove("active-slide");
            reviewPagination[0].classList.add("active-slide");
            j = 0;
        } else{
            reviews[j+1].style.display = "flex";
            reviews[j].style.display = "none";
            reviewPagination[j].classList.remove("active-slide");
            reviewPagination[j+1].classList.add("active-slide");
            j++;
        }

}

prevReview.addEventListener("click", moveLeftReview);

function moveLeftReview() {
    if(j == 0){
        reviews[arReviewsLength-1].style.display = "flex";
        reviews[j].style.display = "none";

        reviewPagination[j].classList.remove("active-slide");
        reviewPagination[reviewPagination.length-1].classList.add("active-slide");
        j = arReviewsLength-1;
    } else{
        reviews[j-1].style.display = "flex";
        reviews[j].style.display = "none";

        reviewPagination[j].classList.remove("active-slide");
        reviewPagination[j-1].classList.add("active-slide");
        j--;
    }
}