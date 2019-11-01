// Mobile menu

var menuIcon = document.getElementsByClassName('mobile-menu__menu');
var mainMenuClass = document.getElementsByClassName('main-menu');

var clickedBtn = function() {
  mainMenuClass[0].classList.toggle('active');
}

menuIcon[0].addEventListener("click", clickedBtn);

/*******************************************************************/

// Icon menu

var homeIcon = document.getElementById('home-icon');
var aboutIcon = document.getElementById('about-icon');
var projectIcon = document.getElementById('project-icon');

// Mobile icon menu

var homeIconMobile = document.getElementById('home-icon');
var aboutIconMobile = document.getElementById('about-icon');
var projectIconMobile = document.getElementById('project-icon');

// Pages

var homeSection = document.getElementById('home');
var aboutSection = document.getElementById('about');
var projectSection = document.getElementById('project');

/*******************************************************************/


var screenResolution = function() {

  if (window.matchMedia("(max-width: 900px)").matches) {

    // Mobile

    //  Making the desktop menu disappear on mobile

    // Top section function

    var clickedTopMobile = function() {
      homeSection.style.filter = "blur(0)";
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
    }

    // About section function

    var clickedAboutMobile = function() {
      homeSection.style.filter = "blur(2px)";
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
    }

    // Project section function

    var clickedProjectMobile = function() {
      homeSection.style.filter = "blur(2px)";
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
    }

    // Addind Event Listener to the menu icons for mobile

    homeIconMobile.addEventListener('click', clickedTopMobile);
    aboutIconMobile.addEventListener('click', clickedAboutMobile);
    projectIconMobile.addEventListener('click', clickedProjectMobile);


  } else {

    // Laptop and up


    // Top section function

    var clickedHomeIcon = function() {
      homeSection.style.filter = "blur(0)";
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
    }

    // About section function

    var clickedAboutIcon = function() {
      homeSection.style.filter = "blur(2px)";
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
    }

    // Project section function

    var clickedProjectIcon = function() {
      homeSection.style.filter = "blur(2px)";
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
    }

    // Addind Event Listener to the menu icons

    homeIcon.addEventListener('click', clickedHomeIcon);
    aboutIcon.addEventListener('click', clickedAboutIcon);
    projectIcon.addEventListener('click', clickedProjectIcon);


  }

};

screenResolution();



/*******************************************************************/

// Getting the items from the HTML file

var wrapperItem1 = document.getElementsByClassName('wrapper__items--1');
var wrapperItem2 = document.getElementsByClassName('wrapper__items--2');
var wrapperItem3 = document.getElementsByClassName('wrapper__items--3');
var wrapperItem4 = document.getElementsByClassName('wrapper__items--4');
var wrapperItemAll = document.getElementsByClassName('wrapper__items');

window.addEventListener('mouseup', function(event) {

  var box = document.getElementsByClassName('wrapper__items');


  if (event.target != box && event.target.parentNode != box) {

    // Function for wrapper item 1

    var clickedWrapperItem1 = function() {
      wrapperItem1[0].classList.toggle('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }

    // Remove function for wrapper item 1

    var removeWrapperItem1 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }


    //  Function for wrapper item 2

    var clickedWrapperItem2 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.toggle('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }

    // Remove function for wrapper item 2

    var removeWrapperItem2 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }


    //  Function for wrapper item 3

    var clickedWrapperItem3 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.toggle('active');
      wrapperItem4[0].classList.remove('active');
    }

    // Remove function for wrapper item 3

    var removeWrapperItem3 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }


    //  Function for wrapper item 4

    var clickedWrapperItem4 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.toggle('active');
    }

    // Remove function for wrapper item 4

    var removeWrapperItem4 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
    }


    // Initializing the wrapper items functions to remove them once click outside of them

    removeWrapperItem1();
    removeWrapperItem2();
    removeWrapperItem3();
    removeWrapperItem4();

    // Adding Event Listener to the project items

    wrapperItem1[0].addEventListener('click', clickedWrapperItem1);
    wrapperItem2[0].addEventListener('click', clickedWrapperItem2);
    wrapperItem3[0].addEventListener('click', clickedWrapperItem3);
    wrapperItem4[0].addEventListener('click', clickedWrapperItem4);

  };

});



/*******************************************************************/



// Functions for the color picker icon, once they click on it, the site will change color

// Getting the elements
// Color Switcher

var colorSwitcher = document.getElementsByClassName('color-switcher');
var switchocean = document.getElementById('switcher-1');
var switchblack = document.getElementById('switcher-2');
var switchSkyBlue = document.getElementById('switcher-3');

// Icons

var htmlTag = document.getElementById('html-tag');
var colorIcon = document.getElementById('color-icon');
var homeIcon = document.getElementById('home-icon');
var aboutIcon = document.getElementById('about-icon');
var projectIcon = document.getElementById('project-icon');
var mainMenu = document.getElementById('mainMenu');
var mobileMenu = document.getElementById('mobileMenu');
var mobileMenuIcon = document.getElementById('mobile-menu-icon');
var socialMediaIcon = document.getElementById('social-media');
var bioBox = document.getElementById('bio-box');
var centerHr = document.getElementById('center-hr');
var centerHr2 = document.getElementById('center-hr-2');
var centerHr3 = document.getElementById('center-hr-3');
var centerHr4 = document.getElementById('center-hr-4');
var locationBox = document.getElementById('location-box');
var locationIcon = document.getElementById('location-icon');
var country = document.getElementById('country');
var html = document.getElementById('html');
var css = document.getElementById('css');
var click = document.getElementById('click');
var click2 = document.getElementById('click-2');
var click3 = document.getElementById('click-3');
var click4 = document.getElementById('click-4');
var click5 = document.getElementById('click-5');
var wrapperInfo1 = document.getElementById('wrapper-info-1');
var wrapperInfo2 = document.getElementById('wrapper-info-2');
var wrapperInfo3 = document.getElementById('wrapper-info-3');
var wrapperInfo4 = document.getElementById('wrapper-info-4');
var projectBtn = document.getElementsByClassName('wrapper__button-container--project');
var codeBtn = document.getElementsByClassName('wrapper__button-container--code');
var footerCopy = document.getElementById('footer-copy');
var footerFirstName = document.getElementById('footer__first-name');
var footerLastName = document.getElementById('footer__last-name');


// Pages

var homeSection = document.getElementById('home');
var aboutSection = document.getElementById('about');
var projectSection = document.getElementById('project');

// Function to switch colors

// ocean color function

var switchColorocean = function() {

  // Adding ocean classes

  // Icons

  colorSwitcher[0].classList.add('ocean');
  colorIcon.classList.add('ocean');
  homeIcon.classList.add('ocean');
  aboutIcon.classList.add('ocean');
  projectIcon.classList.add('ocean');
  colorIcon.classList.add('ocean');
  mobileMenuIcon.classList.add('ocean');
  mainMenu.classList.add('ocean');
  mobileMenu.classList.add('ocean');
  socialMediaIcon.classList.add('ocean');
  bioBox.classList.add('ocean');
  centerHr.classList.add('ocean');
  centerHr2.classList.add('ocean');
  centerHr3.classList.add('ocean');
  centerHr4.classList.add('ocean');
  locationBox.classList.add('ocean');
  locationIcon.classList.add('ocean');
  country.classList.add('ocean');
  html.classList.add('ocean');
  css.classList.add('ocean');
  click.classList.add('ocean');
  click2.classList.add('ocean');
  click3.classList.add('ocean');
  click4.classList.add('ocean');
  click5.classList.add('ocean');
  wrapperItem1[0].classList.add('ocean');
  wrapperItem2[0].classList.add('ocean');
  wrapperItem3[0].classList.add('ocean');
  wrapperItem4[0].classList.add('ocean');
  wrapperInfo1.classList.add('ocean');
  wrapperInfo2.classList.add('ocean');
  wrapperInfo3.classList.add('ocean');
  wrapperInfo4.classList.add('ocean');
  projectBtn[0].classList.add('ocean');
  projectBtn[1].classList.add('ocean');
  projectBtn[2].classList.add('ocean');
  projectBtn[3].classList.add('ocean');
  codeBtn[0].classList.add('ocean');
  codeBtn[1].classList.add('ocean');
  codeBtn[2].classList.add('ocean');
  codeBtn[3].classList.add('ocean');
  footerCopy.classList.add('ocean');
  footerFirstName.classList.add('ocean');
  footerLastName.classList.add('ocean');

  // Pages

  htmlTag.classList.add('ocean');
  homeSection.classList.add('ocean');
  aboutSection.classList.add('ocean');
  projectSection.classList.add('ocean');

  // Removing black classes

  // Icons

  colorSwitcher[0].classList.remove('black');
  colorIcon.classList.remove('black');
  homeIcon.classList.remove('black');
  aboutIcon.classList.remove('black');
  projectIcon.classList.remove('black');
  colorIcon.classList.remove('black');
  mobileMenuIcon.classList.remove('black');
  mainMenu.classList.remove('black');
  mobileMenu.classList.remove('black');
  socialMediaIcon.classList.remove('black');
  bioBox.classList.remove('black');
  centerHr.classList.remove('black');
  centerHr2.classList.remove('black');
  centerHr3.classList.remove('black');
  centerHr4.classList.remove('black');
  locationBox.classList.remove('black');
  locationIcon.classList.remove('black');
  country.classList.remove('black');
  html.classList.remove('black');
  css.classList.remove('black');
  click.classList.remove('black');
  click2.classList.remove('black');
  click3.classList.remove('black');
  click4.classList.remove('black');
  click5.classList.remove('black');
  wrapperItem1[0].classList.remove('black');
  wrapperItem2[0].classList.remove('black');
  wrapperItem3[0].classList.remove('black');
  wrapperItem4[0].classList.remove('black');
  wrapperInfo1.classList.remove('black');
  wrapperInfo2.classList.remove('black');
  wrapperInfo3.classList.remove('black');
  wrapperInfo4.classList.remove('black');
  projectBtn[0].classList.remove('black');
  projectBtn[1].classList.remove('black');
  projectBtn[2].classList.remove('black');
  projectBtn[3].classList.remove('black');
  codeBtn[0].classList.remove('black');
  codeBtn[1].classList.remove('black');
  codeBtn[2].classList.remove('black');
  codeBtn[3].classList.remove('black');
  footerCopy.classList.remove('black');
  footerFirstName.classList.remove('black');
  footerLastName.classList.remove('black');

  // Pages

  htmlTag.classList.remove('black');
  homeSection.classList.remove('black');
  aboutSection.classList.remove('black');
  projectSection.classList.remove('black');
}

// black Color function

var switchColorblack = function() {

  // Adding black classes

  // Icons

  colorSwitcher[0].classList.add('black');
  colorIcon.classList.add('black');
  homeIcon.classList.add('black');
  aboutIcon.classList.add('black');
  projectIcon.classList.add('black');
  colorIcon.classList.add('black');
  mobileMenuIcon.classList.add('black');
  mainMenu.classList.add('black');
  mobileMenu.classList.add('black');
  socialMediaIcon.classList.add('black');
  bioBox.classList.add('black');
  centerHr.classList.add('black');
  centerHr2.classList.add('black');
  centerHr3.classList.add('black');
  centerHr4.classList.add('black');
  locationBox.classList.add('black');
  locationIcon.classList.add('black');
  country.classList.add('black');
  html.classList.add('black');
  css.classList.add('black');
  click.classList.add('black');
  click2.classList.add('black');
  click3.classList.add('black');
  click4.classList.add('black');
  click5.classList.add('black');
  wrapperItem1[0].classList.add('black');
  wrapperItem2[0].classList.add('black');
  wrapperItem3[0].classList.add('black');
  wrapperItem4[0].classList.add('black');
  wrapperInfo1.classList.add('black');
  wrapperInfo2.classList.add('black');
  wrapperInfo3.classList.add('black');
  wrapperInfo4.classList.add('black');
  projectBtn[0].classList.add('black');
  projectBtn[1].classList.add('black');
  projectBtn[2].classList.add('black');
  projectBtn[3].classList.add('black');
  codeBtn[0].classList.add('black');
  codeBtn[1].classList.add('black');
  codeBtn[2].classList.add('black');
  codeBtn[3].classList.add('black');
  footerCopy.classList.add('black');
  footerFirstName.classList.add('black');
  footerLastName.classList.add('black');

  // Pages

  htmlTag.classList.add('black');
  homeSection.classList.add('black');
  aboutSection.classList.add('black');
  projectSection.classList.add('black');

  // Removing ocean classes

  // Icons

  colorSwitcher[0].classList.remove('ocean');
  colorIcon.classList.remove('ocean');
  homeIcon.classList.remove('ocean');
  aboutIcon.classList.remove('ocean');
  projectIcon.classList.remove('ocean');
  colorIcon.classList.remove('ocean');
  mobileMenuIcon.classList.remove('ocean');
  mainMenu.classList.remove('ocean');
  mobileMenu.classList.remove('ocean');
  socialMediaIcon.classList.remove('ocean');
  bioBox.classList.remove('ocean');
  centerHr.classList.remove('ocean');
  centerHr2.classList.remove('ocean');
  centerHr3.classList.remove('ocean');
  centerHr4.classList.remove('ocean');
  locationBox.classList.remove('ocean');
  locationIcon.classList.remove('ocean');
  country.classList.remove('ocean');
  html.classList.remove('ocean');
  css.classList.remove('ocean');
  click.classList.remove('ocean');
  click2.classList.remove('ocean');
  click3.classList.remove('ocean');
  click4.classList.remove('ocean');
  click5.classList.remove('ocean');
  wrapperItem1[0].classList.remove('ocean');
  wrapperItem2[0].classList.remove('ocean');
  wrapperItem3[0].classList.remove('ocean');
  wrapperItem4[0].classList.remove('ocean');
  wrapperInfo1.classList.remove('ocean');
  wrapperInfo2.classList.remove('ocean');
  wrapperInfo3.classList.remove('ocean');
  wrapperInfo4.classList.remove('ocean');
  projectBtn[0].classList.remove('ocean');
  projectBtn[1].classList.remove('ocean');
  projectBtn[2].classList.remove('ocean');
  projectBtn[3].classList.remove('ocean');
  codeBtn[0].classList.remove('ocean');
  codeBtn[1].classList.remove('ocean');
  codeBtn[2].classList.remove('ocean');
  codeBtn[3].classList.remove('ocean');
  footerCopy.classList.remove('ocean');
  footerFirstName.classList.remove('ocean');
  footerLastName.classList.remove('ocean');

  // Pages

  htmlTag.classList.remove('ocean');
  homeSection.classList.remove('ocean');
  aboutSection.classList.remove('ocean');
  projectSection.classList.remove('ocean');
}

// Sky Blue Color function by removing both ocean and black classes

var switchColorSkyBlue = function() {

  // Removing ocean classes

  // Icons

  colorSwitcher[0].classList.remove('ocean');
  colorIcon.classList.remove('ocean');
  homeIcon.classList.remove('ocean');
  aboutIcon.classList.remove('ocean');
  projectIcon.classList.remove('ocean');
  colorIcon.classList.remove('ocean');
  mobileMenuIcon.classList.remove('ocean');
  mainMenu.classList.remove('ocean');
  mobileMenu.classList.remove('ocean');
  socialMediaIcon.classList.remove('ocean');
  bioBox.classList.remove('ocean');
  centerHr.classList.remove('ocean');
  centerHr2.classList.remove('ocean');
  centerHr3.classList.remove('ocean');
  centerHr4.classList.remove('ocean');
  locationBox.classList.remove('ocean');
  locationIcon.classList.remove('ocean');
  country.classList.remove('ocean');
  html.classList.remove('ocean');
  css.classList.remove('ocean');
  click.classList.remove('ocean');
  click2.classList.remove('ocean');
  click3.classList.remove('ocean');
  click4.classList.remove('ocean');
  click5.classList.remove('ocean');
  wrapperItem1[0].classList.remove('ocean');
  wrapperItem2[0].classList.remove('ocean');
  wrapperItem3[0].classList.remove('ocean');
  wrapperItem4[0].classList.remove('ocean');
  wrapperInfo1.classList.remove('ocean');
  wrapperInfo2.classList.remove('ocean');
  wrapperInfo3.classList.remove('ocean');
  wrapperInfo4.classList.remove('ocean');
  projectBtn[0].classList.remove('ocean');
  projectBtn[1].classList.remove('ocean');
  projectBtn[2].classList.remove('ocean');
  projectBtn[3].classList.remove('ocean');
  codeBtn[0].classList.remove('ocean');
  codeBtn[1].classList.remove('ocean');
  codeBtn[2].classList.remove('ocean');
  codeBtn[3].classList.remove('ocean');
  footerCopy.classList.remove('ocean');
  footerFirstName.classList.remove('ocean');
  footerLastName.classList.remove('ocean');

  // Pages

  htmlTag.classList.remove('ocean');
  homeSection.classList.remove('ocean');
  aboutSection.classList.remove('ocean');
  projectSection.classList.remove('ocean');

  // Removing black classes

  // Icons

  colorSwitcher[0].classList.remove('black');
  colorIcon.classList.remove('black');
  homeIcon.classList.remove('black');
  aboutIcon.classList.remove('black');
  projectIcon.classList.remove('black');
  colorIcon.classList.remove('black');
  mobileMenuIcon.classList.remove('black');
  mainMenu.classList.remove('black');
  mobileMenu.classList.remove('black');
  socialMediaIcon.classList.remove('black');
  bioBox.classList.remove('black');
  centerHr.classList.remove('black');
  centerHr2.classList.remove('black');
  centerHr3.classList.remove('black');
  centerHr4.classList.remove('black');
  locationBox.classList.remove('black');
  locationIcon.classList.remove('black');
  country.classList.remove('black');
  html.classList.remove('black');
  css.classList.remove('black');
  click.classList.remove('black');
  click2.classList.remove('black');
  click3.classList.remove('black');
  click4.classList.remove('black');
  click5.classList.remove('black');
  wrapperItem1[0].classList.remove('black');
  wrapperItem2[0].classList.remove('black');
  wrapperItem3[0].classList.remove('black');
  wrapperItem4[0].classList.remove('black');
  wrapperInfo1.classList.remove('black');
  wrapperInfo2.classList.remove('black');
  wrapperInfo3.classList.remove('black');
  wrapperInfo4.classList.remove('black');
  projectBtn[0].classList.remove('black');
  projectBtn[1].classList.remove('black');
  projectBtn[2].classList.remove('black');
  projectBtn[3].classList.remove('black');
  codeBtn[0].classList.remove('black');
  codeBtn[1].classList.remove('black');
  codeBtn[2].classList.remove('black');
  codeBtn[3].classList.remove('black');
  footerCopy.classList.remove('black');
  footerFirstName.classList.remove('black');
  footerLastName.classList.remove('black');

  // Pages

  htmlTag.classList.remove('black');
  homeSection.classList.remove('black');
  aboutSection.classList.remove('black');
  projectSection.classList.remove('black');

}


// Function to make the color switcher visible

var colorSwitcherToggle = function() {
  colorSwitcher[0].classList.toggle('active');
}

// Make the color switcher visible and hidden

colorIcon.addEventListener('click', colorSwitcherToggle);


// Switch colors

switchocean.addEventListener('click', switchColorocean);
switchblack.addEventListener('click', switchColorblack);
switchSkyBlue.addEventListener('click', switchColorSkyBlue);