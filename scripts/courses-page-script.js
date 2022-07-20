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

// array for results
// let result = [];

// building array of results
// for (let n = 0; n < coursesList.length; n++) {
//   courseButtons[n].onclick = function () {
    // for (let j = 0; j < coursesList.length; j++) {
    //   if (!(courseButtons[n].textContent.substring(0, 5)).match(coursesList[j].type.substring(0, 5))) {
    //     coursesList.slice(coursesList[j]);
    //   } 
    //   else {
    //     result.push(coursesList[j]);
    //     console.log(result);
    //   }
    // }
    // coursesList = result;
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
//   };
// }
