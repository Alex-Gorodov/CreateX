// Course list filters toggler
const coursesFilter = document.querySelector(".filters-list");
const courseButtons = document.querySelectorAll(".filter-item .button");
const coursesList = Array.from(document.querySelectorAll(".course-card"));

let courseType = document.querySelectorAll(".course-type-badge");
let courseName = document.querySelectorAll(".course-name");
let courseAuthor = document.querySelectorAll(".course-author");
let coursePrice = document.querySelectorAll(".course-price");

// Taken from StackOverFlow
// Add a click listener to the container
coursesFilter.addEventListener('click', handleClick, false);
function handleClick(e) {
  const { target } = e;

  // If a button has been clicked
  if (target.classList.contains('button')) {

    // Clear any active buttons 
    courseButtons.forEach(button => button.classList.add('inactive-btn'));

    // Make the clicked button active
    target.classList.remove('inactive-btn');
  }
}

for (let i = 0; i < coursesList.length; i++) {
  coursesList[i] = {
    type: courseType[i].textContent,
    name: courseName[i].textContent,
    author: courseAuthor[i].textContent,
    price: coursePrice[i].textContent,
  };
}

for (const element of courseButtons) {
  let result = [];
  courseButtons.forEach(element => {
    element.onclick = function () {
      let coursesCards = document.querySelectorAll(".course-card");
      coursesCards.forEach(element => {
        element.classList.remove('visually-hidden');
      });
      result = coursesList.filter(course => element.textContent.match(course.type));
      for (let i = 0; i < coursesList.length; i++) {
        for (let j = 0; j < result.length; j++) {            
          if (!result.includes(coursesList[i])) {
            coursesCards[i].classList.add('visually-hidden');
          }
        }
      }
    };
  });
}

// sections animation
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

