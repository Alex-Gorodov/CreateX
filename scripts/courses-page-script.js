// Course list filters toggler

const container = document.querySelector(".filters-list");
const courseButtons = document.querySelectorAll(".filter-item .button");

// Taken from StackOverFlow
// Add a click listener to the container
container.addEventListener('click', handleClick, false);

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