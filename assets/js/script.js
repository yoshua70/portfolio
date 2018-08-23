var navItem = document.querySelector(".nav-item");
var navLink = document.querySelector(".nav-link");
var main = document.querySelector(".main");
var btnSubmit = document.querySelector(".btn_submit");



var navItemWidth = parseFloat(window.getComputedStyle(navItem).getPropertyValue("width"));
var navLinkWidth = parseFloat(window.getComputedStyle(navLink).getPropertyValue("width"));

var mainPadLeft = (navItemWidth - navLinkWidth) / 2;
var mainPadLeftStr = mainPadLeft.toString() + "px";
main.style.paddingLeft = mainPadLeftStr;
main.style.paddingRight = mainPadLeftStr;

/*
btnSubmit.addEventListener("click", function() {
  btnSubmit.classList.add("btn_submit--click");
}); */

var navLinks = document.querySelectorAll(".nav-link");

var pageTitle = document.title.replace(" | YoshuaPortfolio", ""); 
for(var i = 0; i < navLinks.length; i++) {
  if(navLinks[i].textContent === pageTitle || navLinks[i].textContent === pageTitle || navLinks[i].textContent === pageTitle) {
    navLinks[i].classList.add("active");
  } else {
    navLinks[i].classList.remove("active");
  }
}