var body = document.querySelector("body");
var navItem = document.querySelector(".nav-item");
var navLinks = document.querySelectorAll(".nav-link");
var main = document.querySelector(".main");
var btnSubmit = document.querySelector(".btn_submit");


// We want to left-align the text in the main div the link in the navabr
// Because the navbar has 'display: flex' the links in it have no padding
// To obtain the padding to be applied to the text in the main div in order to be align with the links in navbar,
// We first get the width of the first navbar element and the link in it
function getWidth(element) {
  return(parseFloat(window.getComputedStyle(element).getPropertyValue("width")));
}

var navItemWidth = getWidth(navItem);
var navLinkWidth = getWidth(navLinks[0]);

// Now we obtain the distance between the link and the navbar element's border
// which is the padding we want to apply to the main text and convert it into a str before using it
var mainPadLeft = ((navItemWidth - navLinkWidth) / 2).toString() + "px";
// We then apply it to the main element
// We also need a padding on the right so we use the same value as padding-left
main.style.paddingLeft = mainPadLeft;
main.style.paddingRight = mainPadLeft;

// We want to highlight the navigation
//e.g: on the about page, the about link in the navbar should have a different style than the other links
// To do it we'll check if the page title match with the link name (e.g: About)
// We select the page title but we have to remove the author from it to make it more easier
var pageTitle = document.title.replace(" | YoshuaPortfolio", ""); 

// We loop through the links in the navbar to see if one of them matches with the page's title
for(var i = 0; i < navLinks.length; i++) {
  if(navLinks[i].textContent === pageTitle) {
    // We add the class 'active' to the matching element
    navLinks[i].classList.add("active");
  } else {
    // We need to remove the 'active' class from the other elements to avoid multiple links being highlihted
    navLinks[i].classList.remove("active");
  }
}

// The animation causes a scrollbar on certain page even if the content is not longer than the screen's height
// This causes the transition between the pages to be kind of clunky
// We get the height of the main element and turn it into a number
mainHeight = Number(window.getComputedStyle(main).getPropertyValue("height").replace("px", ""));
// We check if the main'height in superior to the screen's height
if(mainHeight > screen.height) {
  // if yes we want the page to be scrollable
  // by default body has 'overflow-y: hidden', so we don't consider the other case
  body.style.overflowY = "scroll";
}
