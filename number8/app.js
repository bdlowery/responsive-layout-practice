var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Look for .hamburger
let hamburger = document.querySelector(".hamburger");

let navList = document.querySelector('.nav__list-primary');

let html = document.querySelector("html")

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  navList.classList.toggle("active");
  html.classList.toggle("background-clicked")
});

