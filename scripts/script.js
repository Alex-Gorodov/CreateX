let upButton = document.querySelector(".footer-to-top");

upButton.onclick = function() {
  window.scrollTo(0, 0);
};

let pageBody = document.querySelector("body");

let burger = document.querySelector(".nav-burger .burger-nav-list");

let firstLine = document.querySelector(".burger-line:nth-of-type(1)");
let secondLine = document.querySelector(".burger-line:nth-of-type(2)");
let thirdLine = document.querySelector(".burger-line:nth-of-type(3)");

function burgerToggle() {
  burger.classList.toggle("nav-list-opened");

  firstLine.classList.toggle("burger-open-first-line");
  secondLine.classList.toggle("burger-open-second-line");
  thirdLine.classList.toggle("burger-open-third-line");
}

// Parallax
const parallaxElements = document.querySelectorAll('.parallax');

const parallax = elements => {
  if ('undefined' !== elements && elements.length > 0) {
    elements.forEach(element => {
      let y = window.innerHeight - element.getBoundingClientRect().top;
      if (y > 0) {
        element.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px, 0)';
      }
    });
  }
};

parallax(parallaxElements);

window.onscroll = () => {
  parallax(parallaxElements);
};

// MODAL
let loginBtn = document.querySelectorAll(".login-btn");
let signInBtn = document.querySelector(".signin-btn");
let signUpBtn = document.querySelector(".signup-btn");

let modalBg = document.querySelector(".modal");
let modalSignIn = document.querySelector(".modal-signin");
let modalSignUp = document.querySelector(".modal-signup");

let modalCloseBtn = document.querySelectorAll(".modal-close-btn");

const modalToggle = function(modal) {
  modal.classList.toggle("modal-opened");
};

loginBtn.forEach(button => {
  button.onclick = function() {
    modalToggle(modalBg);
    modalToggle(modalSignIn);  
    if (burger.classList.contains("nav-list-opened")) {
      burgerToggle();
    }
    pageBody.classList.add('locked');
  };
});

signUpBtn.onclick = function() {
  modalToggle(modalSignIn);
  modalToggle(modalSignUp);
};

signInBtn.onclick = function() {
  modalToggle(modalSignIn);
  modalToggle(modalSignUp);
};

let passwordInput = document.querySelectorAll("[type='password']");

modalCloseBtn.forEach(button => {
  button.onclick = function() {
    modalToggle(modalBg);
    if (modalSignIn.classList.contains('modal-opened')) {
      modalToggle(modalSignIn);
    }
    if (modalSignUp.classList.contains('modal-opened')) {
      modalToggle(modalSignUp);
    } 
    if (burger.classList.contains("nav-list-opened")) {
      burgerToggle();
    }
    pageBody.classList.remove('locked');
    passwordInput.forEach(element => {
      if (element.getAttribute('type') === 'text') {
        element.setAttribute('type', 'password');
      }
    });
  };
});

// Show password button
let showPas = document.querySelectorAll('.show-password-btn');

let signInPas = document.getElementById('signin-password');
let signUpPas = document.getElementById('signup-password');
let confirmPas = document.getElementById('signup-confirm-password');

showPas.forEach(element => {
  element.onclick = function() {
    if (element.classList.contains('show-signin')) {
      if (signInPas.getAttribute('type') === 'password') {
        signInPas.setAttribute('type', 'text');
      } else {
        signInPas.setAttribute('type', 'password');
      }
    }
    if (element.classList.contains('show-signup')) {
      if (signUpPas.getAttribute('type') === 'password') {
        signUpPas.setAttribute('type', 'text');
      } else {
        signUpPas.setAttribute('type', 'password');
      }
    }
    if (element.classList.contains('show-confirm')) {
      if (confirmPas.getAttribute('type') === 'password') {
        confirmPas.setAttribute('type', 'text');
      } else {
        confirmPas.setAttribute('type', 'password');
      }
    }
  };
});