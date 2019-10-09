// Mobile menu

var menuIcon = document.getElementsByClassName('mobile-menu__menu');
var mainMenu = document.getElementsByClassName('main-menu');

var clickedBtn = function() {
  mainMenu.classList.toggle('active');
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
      mainMenu.classList.remove('active');
    }

    // About section function

    var clickedAboutMobile = function() {
      homeSection.style.filter = "blur(2px)";
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
      mainMenu.classList.remove('active');
    }

    // Project section function

    var clickedProjectMobile = function() {
      homeSection.style.filter = "blur(2px)";
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
      mainMenu.classList.remove('active');
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

}

screenResolution();



/*******************************************************************/


//  Function for the project items when on touch devices

// Getting the items from the HTML file

var wrapperItem1 = document.getElementsByClassName('wrapper__items--1');
var wrapperItem2 = document.getElementsByClassName('wrapper__items--2');
var wrapperItem3 = document.getElementsByClassName('wrapper__items--3');
var wrapperItem4 = document.getElementsByClassName('wrapper__items--4');



//  Function for wrapper item 1

var clickedWrapperItem1 = function() {
  wrapperItem1[0].classList.toggle('active');
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


//  Function for wrapper item 3

var clickedWrapperItem3 = function() {
  wrapperItem1[0].classList.remove('active');
  wrapperItem2[0].classList.remove('active');
  wrapperItem3[0].classList.toggle('active');
  wrapperItem4[0].classList.remove('active');
}


//  Function for wrapper item 4

var clickedWrapperItem4 = function() {
  wrapperItem1[0].classList.remove('active');
  wrapperItem2[0].classList.remove('active');
  wrapperItem3[0].classList.remove('active');
  wrapperItem4[0].classList.toggle('active');
}


// Adding Event Listener to the project items

wrapperItem1[0].addEventListener('click', clickedWrapperItem1);
wrapperItem2[0].addEventListener('click', clickedWrapperItem2);
wrapperItem3[0].addEventListener('click', clickedWrapperItem3);
wrapperItem4[0].addEventListener('click', clickedWrapperItem4);



/*******************************************************************/



// Function for the color picker icon, once they click on it, the site will change color

// Getting the elements
// Color Switcher

var colorSwitcher = document.getElementById('color-switcher');
var switchSkyBlue = document.getElementById('switcher-1');
var switchPurple = document.getElementById('switcher-2');
var switchGreen = document.getElementById('switcher-3');

// Icons

var htmlTag = document.getElementById('html-tag');
var colorIcon = document.getElementById('color-icon');
var homeIcon = document.getElementById('home-icon');
var aboutIcon = document.getElementById('about-icon');
var projectIcon = document.getElementById('project-icon');
var colorIcon = document.getElementById('color-icon');
var mainMenu = document.getElementById('main-menu');
var mobileMenu = document.getElementById('mobile-menu');
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

// Sky Blue color function

var switchColorSkyBlue = function() {

  // Adding Sky blue classes

  // Icons

  colorSwitcher.classList.add('sky-blue');
  colorIcon.classList.add('sky-blue');
  homeIcon.classList.add('sky-blue');
  aboutIcon.classList.add('sky-blue');
  projectIcon.classList.add('sky-blue');
  colorIcon.classList.add('sky-blue');
  mobileMenuIcon.classList.add('sky-blue');
  mainMenu.classList.add('sky-blue');
  mobileMenu.classList.add('sky-blue');
  socialMediaIcon.classList.add('sky-blue');
  bioBox.classList.add('sky-blue');
  centerHr.classList.add('sky-blue');
  centerHr2.classList.add('sky-blue');
  centerHr3.classList.add('sky-blue');
  centerHr4.classList.add('sky-blue');
  locationBox.classList.add('sky-blue');
  locationIcon.classList.add('sky-blue');
  country.classList.add('sky-blue');
  html.classList.add('sky-blue');
  css.classList.add('sky-blue');
  click.classList.add('sky-blue');
  click2.classList.add('sky-blue');
  click3.classList.add('sky-blue');
  click4.classList.add('sky-blue');
  click5.classList.add('sky-blue');
  wrapperItem1[0].classList.add('sky-blue');
  wrapperItem2[0].classList.add('sky-blue');
  wrapperItem3[0].classList.add('sky-blue');
  wrapperItem4[0].classList.add('sky-blue');
  wrapperInfo1.classList.add('sky-blue');
  wrapperInfo2.classList.add('sky-blue');
  wrapperInfo3.classList.add('sky-blue');
  wrapperInfo4.classList.add('sky-blue');
  projectBtn[0].classList.add('sky-blue');
  projectBtn[1].classList.add('sky-blue');
  projectBtn[2].classList.add('sky-blue');
  projectBtn[3].classList.add('sky-blue');
  codeBtn[0].classList.add('sky-blue');
  codeBtn[1].classList.add('sky-blue');
  codeBtn[2].classList.add('sky-blue');
  codeBtn[3].classList.add('sky-blue');
  footerCopy.classList.add('sky-blue');
  footerFirstName.classList.add('sky-blue');
  footerLastName.classList.add('sky-blue');

  // Pages

  htmlTag.classList.add('sky-blue');
  homeSection.classList.add('sky-blue');
  aboutSection.classList.add('sky-blue');
  projectSection.classList.add('sky-blue');

  // Removing Purple classes

  // Icons

  colorSwitcher.classList.remove('purple');
  colorIcon.classList.remove('purple');
  homeIcon.classList.remove('purple');
  aboutIcon.classList.remove('purple');
  projectIcon.classList.remove('purple');
  colorIcon.classList.remove('purple');
  mobileMenuIcon.classList.remove('purple');
  mainMenu.classList.remove('purple');
  mobileMenu.classList.remove('purple');
  socialMediaIcon.classList.remove('purple');
  bioBox.classList.remove('purple');
  centerHr.classList.remove('purple');
  centerHr2.classList.remove('purple');
  centerHr3.classList.remove('purple');
  centerHr4.classList.remove('purple');
  locationBox.classList.remove('purple');
  locationIcon.classList.remove('purple');
  country.classList.remove('purple');
  html.classList.remove('purple');
  css.classList.remove('purple');
  click.classList.remove('purple');
  click2.classList.remove('purple');
  click3.classList.remove('purple');
  click4.classList.remove('purple');
  click5.classList.remove('purple');
  wrapperItem1[0].classList.remove('purple');
  wrapperItem2[0].classList.remove('purple');
  wrapperItem3[0].classList.remove('purple');
  wrapperItem4[0].classList.remove('purple');
  wrapperInfo1.classList.remove('purple');
  wrapperInfo2.classList.remove('purple');
  wrapperInfo3.classList.remove('purple');
  wrapperInfo4.classList.remove('purple');
  projectBtn[0].classList.remove('purple');
  projectBtn[1].classList.remove('purple');
  projectBtn[2].classList.remove('purple');
  projectBtn[3].classList.remove('purple');
  codeBtn[0].classList.remove('purple');
  codeBtn[1].classList.remove('purple');
  codeBtn[2].classList.remove('purple');
  codeBtn[3].classList.remove('purple');
  footerCopy.classList.remove('purple');
  footerFirstName.classList.remove('purple');
  footerLastName.classList.remove('purple');

  // Pages

  htmlTag.classList.remove('purple');
  homeSection.classList.remove('purple');
  aboutSection.classList.remove('purple');
  projectSection.classList.remove('purple');
}

// Purple Color function

var switchColorPurple = function() {

  // Adding Purple classes

  // Icons

  colorSwitcher.classList.add('purple');
  colorIcon.classList.add('purple');
  homeIcon.classList.add('purple');
  aboutIcon.classList.add('purple');
  projectIcon.classList.add('purple');
  colorIcon.classList.add('purple');
  mobileMenuIcon.classList.add('purple');
  mainMenu.classList.add('purple');
  mobileMenu.classList.add('purple');
  socialMediaIcon.classList.add('purple');
  bioBox.classList.add('purple');
  centerHr.classList.add('purple');
  centerHr2.classList.add('purple');
  centerHr3.classList.add('purple');
  centerHr4.classList.add('purple');
  locationBox.classList.add('purple');
  locationIcon.classList.add('purple');
  country.classList.add('purple');
  html.classList.add('purple');
  css.classList.add('purple');
  click.classList.add('purple');
  click2.classList.add('purple');
  click3.classList.add('purple');
  click4.classList.add('purple');
  click5.classList.add('purple');
  wrapperItem1[0].classList.add('purple');
  wrapperItem2[0].classList.add('purple');
  wrapperItem3[0].classList.add('purple');
  wrapperItem4[0].classList.add('purple');
  wrapperInfo1.classList.add('purple');
  wrapperInfo2.classList.add('purple');
  wrapperInfo3.classList.add('purple');
  wrapperInfo4.classList.add('purple');
  projectBtn[0].classList.add('purple');
  projectBtn[1].classList.add('purple');
  projectBtn[2].classList.add('purple');
  projectBtn[3].classList.add('purple');
  codeBtn[0].classList.add('purple');
  codeBtn[1].classList.add('purple');
  codeBtn[2].classList.add('purple');
  codeBtn[3].classList.add('purple');
  footerCopy.classList.add('purple');
  footerFirstName.classList.add('purple');
  footerLastName.classList.add('purple');

  // Pages

  htmlTag.classList.add('purple');
  homeSection.classList.add('purple');
  aboutSection.classList.add('purple');
  projectSection.classList.add('purple');

  // Removing Sky Blue classes

  // Icons

  colorSwitcher.classList.remove('sky-blue');
  colorIcon.classList.remove('sky-blue');
  homeIcon.classList.remove('sky-blue');
  aboutIcon.classList.remove('sky-blue');
  projectIcon.classList.remove('sky-blue');
  colorIcon.classList.remove('sky-blue');
  mobileMenuIcon.classList.remove('sky-blue');
  mainMenu.classList.remove('sky-blue');
  mobileMenu.classList.remove('sky-blue');
  socialMediaIcon.classList.remove('sky-blue');
  bioBox.classList.remove('sky-blue');
  centerHr.classList.remove('sky-blue');
  centerHr2.classList.remove('sky-blue');
  centerHr3.classList.remove('sky-blue');
  centerHr4.classList.remove('sky-blue');
  locationBox.classList.remove('sky-blue');
  locationIcon.classList.remove('sky-blue');
  country.classList.remove('sky-blue');
  html.classList.remove('sky-blue');
  css.classList.remove('sky-blue');
  click.classList.remove('sky-blue');
  click2.classList.remove('sky-blue');
  click3.classList.remove('sky-blue');
  click4.classList.remove('sky-blue');
  click5.classList.remove('sky-blue');
  wrapperItem1[0].classList.remove('sky-blue');
  wrapperItem2[0].classList.remove('sky-blue');
  wrapperItem3[0].classList.remove('sky-blue');
  wrapperItem4[0].classList.remove('sky-blue');
  wrapperInfo1.classList.remove('sky-blue');
  wrapperInfo2.classList.remove('sky-blue');
  wrapperInfo3.classList.remove('sky-blue');
  wrapperInfo4.classList.remove('sky-blue');
  projectBtn[0].classList.remove('sky-blue');
  projectBtn[1].classList.remove('sky-blue');
  projectBtn[2].classList.remove('sky-blue');
  projectBtn[3].classList.remove('sky-blue');
  codeBtn[0].classList.remove('sky-blue');
  codeBtn[1].classList.remove('sky-blue');
  codeBtn[2].classList.remove('sky-blue');
  codeBtn[3].classList.remove('sky-blue');
  footerCopy.classList.remove('sky-blue');
  footerFirstName.classList.remove('sky-blue');
  footerLastName.classList.remove('sky-blue');

  // Pages

  htmlTag.classList.remove('sky-blue');
  homeSection.classList.remove('sky-blue');
  aboutSection.classList.remove('sky-blue');
  projectSection.classList.remove('sky-blue');
}

// Green Color function by removing both Sky Blue and Purple classes

var switchColorGreen = function() {

  // Removing Sky Blue classes

  // Icons

  colorSwitcher.classList.remove('sky-blue');
  colorIcon.classList.remove('sky-blue');
  homeIcon.classList.remove('sky-blue');
  aboutIcon.classList.remove('sky-blue');
  projectIcon.classList.remove('sky-blue');
  colorIcon.classList.remove('sky-blue');
  mobileMenuIcon.classList.remove('sky-blue');
  mainMenu.classList.remove('sky-blue');
  mobileMenu.classList.remove('sky-blue');
  socialMediaIcon.classList.remove('sky-blue');
  bioBox.classList.remove('sky-blue');
  centerHr.classList.remove('sky-blue');
  centerHr2.classList.remove('sky-blue');
  centerHr3.classList.remove('sky-blue');
  centerHr4.classList.remove('sky-blue');
  locationBox.classList.remove('sky-blue');
  locationIcon.classList.remove('sky-blue');
  country.classList.remove('sky-blue');
  html.classList.remove('sky-blue');
  css.classList.remove('sky-blue');
  click.classList.remove('sky-blue');
  click2.classList.remove('sky-blue');
  click3.classList.remove('sky-blue');
  click4.classList.remove('sky-blue');
  click5.classList.remove('sky-blue');
  wrapperItem1[0].classList.remove('sky-blue');
  wrapperItem2[0].classList.remove('sky-blue');
  wrapperItem3[0].classList.remove('sky-blue');
  wrapperItem4[0].classList.remove('sky-blue');
  wrapperInfo1.classList.remove('sky-blue');
  wrapperInfo2.classList.remove('sky-blue');
  wrapperInfo3.classList.remove('sky-blue');
  wrapperInfo4.classList.remove('sky-blue');
  projectBtn[0].classList.remove('sky-blue');
  projectBtn[1].classList.remove('sky-blue');
  projectBtn[2].classList.remove('sky-blue');
  projectBtn[3].classList.remove('sky-blue');
  codeBtn[0].classList.remove('sky-blue');
  codeBtn[1].classList.remove('sky-blue');
  codeBtn[2].classList.remove('sky-blue');
  codeBtn[3].classList.remove('sky-blue');
  footerCopy.classList.remove('sky-blue');
  footerFirstName.classList.remove('sky-blue');
  footerLastName.classList.remove('sky-blue');

  // Pages

  htmlTag.classList.remove('sky-blue');
  homeSection.classList.remove('sky-blue');
  aboutSection.classList.remove('sky-blue');
  projectSection.classList.remove('sky-blue');

  // Removing Purple classes

  // Icons

  colorSwitcher.classList.remove('purple');
  colorIcon.classList.remove('purple');
  homeIcon.classList.remove('purple');
  aboutIcon.classList.remove('purple');
  projectIcon.classList.remove('purple');
  colorIcon.classList.remove('purple');
  mobileMenuIcon.classList.remove('purple');
  mainMenu.classList.remove('purple');
  mobileMenu.classList.remove('purple');
  socialMediaIcon.classList.remove('purple');
  bioBox.classList.remove('purple');
  centerHr.classList.remove('purple');
  centerHr2.classList.remove('purple');
  centerHr3.classList.remove('purple');
  centerHr4.classList.remove('purple');
  locationBox.classList.remove('purple');
  locationIcon.classList.remove('purple');
  country.classList.remove('purple');
  html.classList.remove('purple');
  css.classList.remove('purple');
  click.classList.remove('purple');
  click2.classList.remove('purple');
  click3.classList.remove('purple');
  click4.classList.remove('purple');
  click5.classList.remove('purple');
  wrapperItem1[0].classList.remove('purple');
  wrapperItem2[0].classList.remove('purple');
  wrapperItem3[0].classList.remove('purple');
  wrapperItem4[0].classList.remove('purple');
  wrapperInfo1.classList.remove('purple');
  wrapperInfo2.classList.remove('purple');
  wrapperInfo3.classList.remove('purple');
  wrapperInfo4.classList.remove('purple');
  projectBtn[0].classList.remove('purple');
  projectBtn[1].classList.remove('purple');
  projectBtn[2].classList.remove('purple');
  projectBtn[3].classList.remove('purple');
  codeBtn[0].classList.remove('purple');
  codeBtn[1].classList.remove('purple');
  codeBtn[2].classList.remove('purple');
  codeBtn[3].classList.remove('purple');
  footerCopy.classList.remove('purple');
  footerFirstName.classList.remove('purple');
  footerLastName.classList.remove('purple');

  // Pages

  htmlTag.classList.remove('purple');
  homeSection.classList.remove('purple');
  aboutSection.classList.remove('purple');
  projectSection.classList.remove('purple');
}

// Function to make the color switcher visible

var colorSwitcherToggle = function() {
  colorSwitcher.classList.toggle('active');
}

var colorSwitcherRemove = function() {
  colorSwitcher.classList.remove('active');
}


// Init the functions

// Make the color switcher visible and hidden
colorIcon.addEventListener('click', colorSwitcherToggle);
mobileMenu.addEventListener('click', colorSwitcherRemove);
mobileMenuIcon.addEventListener('click', colorSwitcherRemove);

// Switch colors

switchSkyBlue.addEventListener('click', switchColorSkyBlue);
switchPurple.addEventListener('click', switchColorPurple);
switchGreen.addEventListener('click', switchColorGreen);