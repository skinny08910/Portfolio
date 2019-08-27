// Menu

var menuIcon = document.getElementsByClassName('mobile-menu__menu');
var mainMenu = document.getElementsByClassName('main-menu');

var clickedBtn = function() {
  mainMenu[0].classList.toggle('active');
}

menuIcon[0].addEventListener("click", clickedBtn);