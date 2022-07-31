let upButton = document.querySelector('.footer-to-top');

upButton.onclick = function() {
  window.scrollTo(0, 0);
};

let pageBody = document.querySelector('html');

let burger = document.querySelector('.nav-burger .burger-nav-list');

let firstLine = document.querySelector('.burger-line:nth-of-type(1)');
let secondLine = document.querySelector('.burger-line:nth-of-type(2)');
let thirdLine = document.querySelector('.burger-line:nth-of-type(3)');

function burgerToggle() {
  burger.classList.toggle('nav-list-opened');

  firstLine.classList.toggle('burger-open-first-line');
  secondLine.classList.toggle('burger-open-second-line');
  thirdLine.classList.toggle('burger-open-third-line');

  pageBody.classList.toggle('locked');
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.floating-content');

for (let e of elements) {
  observer.observe(e);
}

// PARALLAX
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

// MODAL
let loginBtn = document.querySelectorAll('.login-btn');
let signInBtn = document.querySelector('.signin-btn');
let signUpBtn = document.querySelector('.signup-btn');

let modalBg = document.querySelector('.modal');
let modalSignIn = document.querySelector('.modal-signin');
let modalSignUp = document.querySelector('.modal-signup');

let modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modalToggle = function(modal) {
  modal.classList.toggle('modal-opened');
  pageBody.classList.add('locked');
};

function modalClose(modal) {
  modalToggle(modal);
  pageBody.classList.remove('locked');
}

loginBtn.forEach(button => {
  button.onclick = function() {
    modalToggle(modalBg);
    modalToggle(modalSignIn);  
    if (burger.classList.contains('nav-list-opened')) {
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
        element.classList.add('pas-showed');
        element.style.opacity = '0.5';
      } else {
        signInPas.setAttribute('type', 'password');
        element.classList.remove('pas-showed');
        element.style.opacity = '1';
      }
    }
    if (element.classList.contains('show-signup')) {
      if (signUpPas.getAttribute('type') === 'password') {
        signUpPas.setAttribute('type', 'text');
        element.classList.add('pas-showed');
        element.style.opacity = '0.5';
      } else {
        signUpPas.setAttribute('type', 'password');
        element.classList.remove('pas-showed');
        element.style.opacity = '1';
      }
    }
    if (element.classList.contains('show-confirm')) {
      if (confirmPas.getAttribute('type') === 'password') {
        confirmPas.setAttribute('type', 'text');
        element.classList.add('pas-showed');
        element.style.opacity = '0.5';
      } else {
        confirmPas.setAttribute('type', 'password');
        element.classList.remove('pas-showed');
        element.style.opacity = '1';
      }
    }
  };
});

// Modal closing
modalCloseBtn.forEach(button => {
  button.onclick = function() {
    modalToggle(modalBg);
    if (modalSignIn.classList.contains('modal-opened')) {
      modalToggle(modalSignIn);
    }
    if (modalSignUp.classList.contains('modal-opened')) {
      modalToggle(modalSignUp);
    } 
    if (burger.classList.contains('nav-list-opened')) {
      burgerToggle();
    }
    pageBody.classList.remove('locked');
    // Passwords hiding
    passwordInput.forEach(element => {
      if (element.getAttribute('type') === 'text') {
        element.setAttribute('type', 'password');
      }
      showPas.forEach(element => {
        if (element.classList.contains('pas-showed')) {
          element.classList.remove('pas-showed');
          element.style.opacity = '1';
        }
      });
    });
  };
});

document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    if (modalBg.classList.contains('modal-opened')) {
      modalClose(modalBg);
    }
    if (modalSignIn.classList.contains('modal-opened')) {
      modalClose(modalSignIn);
    }
    if (modalSignUp.classList.contains('modal-opened')) {
      modalClose(modalSignUp);
    }
  }
  // Passwords hiding
  passwordInput.forEach(element => {
    if (element.getAttribute('type') === 'text') {
      element.setAttribute('type', 'password');
    }
    showPas.forEach(element => {
      if (element.classList.contains('pas-showed')) {
        element.classList.remove('pas-showed');
        element.style.opacity = '1';
      }
    });
  });
});

// post showing

window.onscroll = function()  {
  var image = document.getElementsByClassName("blog-image-wrapper");
  for(let i=0;i<image.length;i++){
    if(image[i].getBoundingClientRect().top <= 500){
      image[i].classList.add("blog-image-show");
    }
  }
  var elem = document.getElementsByClassName("card");
  for(let i=0;i<elem.length;i++){
    if(elem[i].getBoundingClientRect().top <= 600){
      elem[i].classList.add("post-content-show");
    }
  }

  parallax(parallaxElements);
};