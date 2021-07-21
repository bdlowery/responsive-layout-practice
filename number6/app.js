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

const get_height = function(el) {
  el.classList.add('faq__item-answer--open');
  const height = el.clientHeight;
  el.classList.remove('faq__item-answer--open');
  
  //https://stackoverflow.com/questions/8210560/css-transitions-do-not-work-when-assigned-trough-javascript
  el.clientHeight;
  
  return height;
}

const faqButton = function(question) {

  let answerOne = document.querySelector('.answer-one');
  let answerTwo = document.querySelector('.answer-two');
  let answerThree = document.querySelector('.answer-three');
  let answerFour = document.querySelector('.answer-four');

  let arrowQuestionOne = document.querySelector('.arrow-question-one');
  let arrowQuestionTwo = document.querySelector('.arrow-question-two');
  let arrowQuestionThree = document.querySelector('.arrow-question-three');
  let arrowQuestionFour = document.querySelector('.arrow-question-four');


  let buttonOne = document.querySelector('.button-one');
  let buttonTwo = document.querySelector('.button-two');
  let buttonThree = document.querySelector('.button-three');
  let buttonFour = document.querySelector('.button-four');

  let buttonRed = document.querySelector('.button--red');



  if (question == "question1") {
    if (answerOne.classList.contains("faq__item-answer--open") === true) {
      answerOne.classList.remove("faq__item-answer--open");
      answerOne.removeAttribute('style');
      arrowQuestionOne.classList.remove("active-arrow");
      buttonOne.classList.remove("button--red");
    } else {
      const body_height = get_height(answerOne);
      answerOne.style.height = body_height + 'px';
      answerOne.classList.add("faq__item-answer--open")
      arrowQuestionOne.classList.add("active-arrow");
      buttonOne.classList.add("button--red");
    }
  }

  if (question == "question2") {
    if (answerTwo.classList.contains("faq__item-answer--open") === true) {
      answerTwo.classList.remove("faq__item-answer--open");
      answerTwo.removeAttribute('style');
      arrowQuestionTwo.classList.remove("active-arrow");
      buttonTwo.classList.remove("button--red");

    } else {
      const body_height = get_height(answerTwo);
      answerTwo.style.height = body_height + 'px';
      answerTwo.classList.add("faq__item-answer--open")
      arrowQuestionTwo.classList.add("active-arrow");
      buttonTwo.classList.add("button--red");
    }
  }

  if (question == "question3") {
    if (answerThree.classList.contains("faq__item-answer--open") === true) {
      answerThree.classList.remove("faq__item-answer--open");
      answerThree.removeAttribute('style');
      arrowQuestionThree.classList.remove("active-arrow");
      buttonThree.classList.remove("button--red");
    } else {
      const body_height = get_height(answerThree);
      answerThree.style.height = body_height + 'px';
      answerThree.classList.add("faq__item-answer--open")
      arrowQuestionThree.classList.add("active-arrow");
      buttonThree.classList.add("button--red");
    }
  }

  if (question == "question4") {
    if (answerFour.classList.contains("faq__item-answer--open") === true) {
      answerFour.classList.remove("faq__item-answer--open");
      answerFour.removeAttribute('style');
      arrowQuestionFour.classList.remove("active-arrow");
      buttonFour.classList.remove("button--red");
    } else {
      const body_height = get_height(answerFour);
      answerFour.style.height = body_height + 'px';
      answerFour.classList.add("faq__item-answer--open")
      arrowQuestionFour.classList.add("active-arrow");
      buttonFour.classList.add("button--red");

    }
  }
}
