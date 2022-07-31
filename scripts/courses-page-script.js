// Course list filters toggler
const container = document.querySelector(".filters-list");
const courseButtons = document.querySelectorAll(".filter-item .button");
const coursesList = Array.from(document.querySelectorAll(".course-card"));

let courseType = document.querySelectorAll(".course-type-badge");
let courseName = document.querySelectorAll(".course-name");
let courseAuthor = document.querySelectorAll(".course-author");
let coursePrice = document.querySelectorAll(".course-price");

// Taken from StackOverFlow
// Add a click listener to the container
container.addEventListener('click', handleClick, false);

for (let i = 0; i < coursesList.length; i++) {
  coursesList[i] = {
    type: courseType[i].textContent,
    name: courseName[i].textContent,
    author: courseAuthor[i].textContent,
    price: coursePrice[i].textContent,
  };
}

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

function compare( a, b ) {
  if ( a.type < b.type ){
    return -1;
  }
  if ( a.type > b.type ){
    return 1;
  }
  return 0;
}

coursesList.sort( compare );

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}