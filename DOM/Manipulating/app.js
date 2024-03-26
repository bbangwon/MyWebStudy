const h2 = document.querySelector('h2');
//h2.setAttribute('class', 'purple border');

// classList
h2.classList.add('purple');
h2.classList.add('border');

h2.classList.remove('border');

// add/remove toggle
h2.classList.toggle('border');

const firstBold = document.querySelector('b');
const paragraph = firstBold.parentElement;
const ChildrenOfParagraph = paragraph.children;

//Node vs Element
const squareImg = document.querySelector('.square');
const squareImgPrevious = squareImg.previousElementSibling;
const squareImgNext = squareImg.nextElementSibling;

const squareImgPreviousSibling = squareImg.previousSibling;
const squareImgNextSibling = squareImg.nextSibling;

