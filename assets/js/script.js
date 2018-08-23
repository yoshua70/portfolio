var navItem = document.querySelector(".nav-item");
var navLink = document.querySelector(".nav-link");
var main = document.querySelector(".main");
var btnSubmit = document.querySelector(".btn_submit");


function resize() {
  var navItemWidth = parseFloat(window.getComputedStyle(navItem).getPropertyValue("width"));
  var navLinkWidth = parseFloat(window.getComputedStyle(navLink).getPropertyValue("width"));

  var mainPadLeft = (navItemWidth - navLinkWidth) / 2;
  var mainPadLeftStr = mainPadLeft.toString() + "px";
  main.style.paddingLeft = mainPadLeftStr;
}

window.onresize = resize();
/*
btnSubmit.addEventListener("click", function() {
  btnSubmit.classList.add("btn_submit--click");
}); */