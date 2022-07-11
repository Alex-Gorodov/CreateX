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

let tutors = document.getElementsByClassName("tutor-card");
let next = document.querySelector(".slider-btn-next");
let prev = document.querySelector(".slider-btn-prev");
let i = 0;
let arLength = tutors.length;

let ww = window.innerWidth;

next.addEventListener("click", moveRight);

function moveRight() {
  if (ww <= 800) {
    if(i == arLength-1){
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

prev.addEventListener("click", moveLeft);

function moveLeft() {
  if (ww <= 800) {
    if(i == 0){
        tutors[arLength-1].style.display = "flex";
        tutors[i].style.display = "none";
        i = arLength-1;
    } else{
        tutors[i-1].style.display = "flex";
        tutors[i].style.display = "none";
        i--;
    }
  }
}
