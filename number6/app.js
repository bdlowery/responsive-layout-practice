const featureClick = function(buttonClick) {
let bookmarkButton = document.querySelector('.bookmark-button');
let searchButton = document.querySelector('.search-button');
let shareButton = document.querySelector('.share-button');

let featuresBookmark = document.querySelector('.features__bookmark');
let featuresSearch = document.querySelector('.features__search');
let featuresShare = document.querySelector('.features__share');



if (buttonClick == "bookmark") {
  bookmarkButton.classList.add("features__nav-button--is-active");
  searchButton.classList.remove("features__nav-button--is-active");
  shareButton.classList.remove("features__nav-button--is-active");

  featuresBookmark.classList.remove("features__display-none");
  featuresShare.classList.add("features__display-none");
  featuresSearch.classList.add("features__display-none");
} else if (buttonClick == "search") {
  bookmarkButton.classList.remove("features__nav-button--is-active");
  searchButton.classList.add("features__nav-button--is-active");
  shareButton.classList.remove("features__nav-button--is-active");

  featuresBookmark.classList.add("features__display-none");
  featuresShare.classList.add("features__display-none");
  featuresSearch.classList.remove("features__display-none");
} else if (buttonClick == "share") {
  bookmarkButton.classList.remove("features__nav-button--is-active");
  searchButton.classList.remove("features__nav-button--is-active");
  shareButton.classList.add("features__nav-button--is-active");

  featuresBookmark.classList.add("features__display-none");
  featuresShare.classList.remove("features__display-none");
  featuresSearch.classList.add("features__display-none");
} else {
  bookmarkButton.classList.add("features__nav-button--is-active");
  searchButton.classList.remove("features__nav-button--is-active");
  shareButton.classList.remove("features__nav-button--is-active");

  featuresBookmark.classList.remove("features__display-none");
  featuresShare.classList.add("features__display-none");
  featuresSearch.classList.add("features__display-none");
}

}

//FAQ ACCORDION
//element.classList.contains(classname); <--- important

//click button ----> onclick="faqClick('question1)"
//const faqClick(question) = {}
//add all buttons as variables with queryselector

//if question == "question1"
    //if elementname.classList.contains(is-active-class-name) === true
      //remove it (aka close accordion, do it with a transition)
    //else if elementname.classList.contains(is-active-class-name) === false
      //add it to classList (like what was done in the first section of app.js)
      //do with transition to make it look flow
    