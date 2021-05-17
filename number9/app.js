let hamburger = document.querySelector(".hamburger");

// let navList = document.querySelector('.nav__list-primary');

// let html = document.querySelector("html")

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  navList.classList.toggle("active");
  // html.classList.toggle("background-clicked")
});