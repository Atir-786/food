// this line grabs the element with id hamburger
const hamburger = document.getElementById("hamburger");

// this line grabs the element with id main-nav
const mainNav = document.getElementById("main-nav");

const html = document.querySelector("html");

// if an element with burger id is clicked then run the displayMenu function
hamburger.addEventListener("click", displayMenu);

// Function definition of displayMenu
function displayMenu() {
  mainNav.classList.toggle("nav-active");
  hamburger.classList.toggle("close");
  html.classList.toggle("display-menu");
}
