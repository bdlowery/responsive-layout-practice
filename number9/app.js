let hamburger = document.querySelector(".hamburger");

let navList = document.querySelectorAll(".nav-list");

let navContainerFlex = document.querySelector(".nav-container-flex");

// let html = document.querySelector("html")

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu

  navContainerFlex.classList.toggle('active');

  // for (var i = 0, navListLength = navList.length; i < navListLength; i++) {
  //   navList[i].classList.toggle("active");
  // }
  // html.classList.toggle("background-clicked")
});
