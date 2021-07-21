let hamburger = document.querySelector(".hamburger");

let navList = document.querySelectorAll(".nav-list");

let navContainerFlex = document.querySelector(".nav-container-flex");

// let html = document.querySelector("html")

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu

  navContainerFlex.classList.toggle("active");

  // for (var i = 0, navListLength = navList.length; i < navListLength; i++) {
  //   navList[i].classList.toggle("active");
  // }
  // html.classList.toggle("background-clicked")
});

//shrtco.de api

let shortenUrl = "https://api.shrtco.de/v2/shorten?url=";
let shortenLinkForm = document.querySelector(".shorten-link-form");
let shortenLinkInput = document.getElementById("shorten-link");
let outputContainer = document.querySelector(".output-container");

shortenLinkForm.addEventListener("submit", async function (buttonClick) {
  buttonClick.preventDefault();
  let originalUrl = shortenLinkInput.value;
  console.log(originalUrl);

  fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
    .then((apiResponse) => apiResponse.json())
    .then((apiData) => renderOutput(originalUrl, apiData.result.full_short_link));
});

// 

function renderOutput(userInputLink, shortenedLink) {

  let outputContent = `<div class="output-api-data">
  <div class="output-api-flex">
    <div class="original-url">
      <p class="original-url-text">${userInputLink}</p>
    </div>
    <div class="shortened-url shortened-url-flex">
      <p class="shortened-url-text">${shortenedLink}</p>
      <button type="submit" class="copy-button">Copy</button>
    </div>
  </div>
</div>`
  console.log(userInputLink, shortenedLink);

  outputContainer.insertAdjacentHTML("afterbegin", outputContent);
}

// shortenLinkForm.addEventListener("submit", async function(buttonClick) {
//   buttonClick.preventDefault();
//   try {
//     let apiResponse = await fetch(shortenUrl, {
//       method: 'POST',

//     })
//   }
//   catch {
//   console.log("button works")
// }
// })
