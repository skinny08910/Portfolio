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
var wrapperItem5 = document.getElementsByClassName('wrapper__items--5');
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
      wrapperItem5[0].classList.remove('active');
    }

    // Remove function for wrapper item 1

    var removeWrapperItem1 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }


    //  Function for wrapper item 2

    var clickedWrapperItem2 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.toggle('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');;
    }

    // Remove function for wrapper item 2

    var removeWrapperItem2 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }


    //  Function for wrapper item 3

    var clickedWrapperItem3 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.toggle('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }

    // Remove function for wrapper item 3

    var removeWrapperItem3 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }


    //  Function for wrapper item 4

    var clickedWrapperItem4 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.toggle('active');
      wrapperItem5[0].classList.remove('active');
    }

    // Remove function for wrapper item 4

    var removeWrapperItem4 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }

    // Function for wrapper item 5

    var clickedWrapperItem5 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.toggle('active');
    }

    // Remove function for wrapper item 5

    var removeWrapperItem5 = function() {
      wrapperItem1[0].classList.remove('active');
      wrapperItem2[0].classList.remove('active');
      wrapperItem3[0].classList.remove('active');
      wrapperItem4[0].classList.remove('active');
      wrapperItem5[0].classList.remove('active');
    }

    // Initializing the wrapper items functions to remove them once click outside of them

    removeWrapperItem1();
    removeWrapperItem2();
    removeWrapperItem3();
    removeWrapperItem4();
    removeWrapperItem5();

    // Adding Event Listener to the project items

    wrapperItem1[0].addEventListener('click', clickedWrapperItem1);
    wrapperItem2[0].addEventListener('click', clickedWrapperItem2);
    wrapperItem3[0].addEventListener('click', clickedWrapperItem3);
    wrapperItem4[0].addEventListener('click', clickedWrapperItem4);
    wrapperItem5[0].addEventListener('click', clickedWrapperItem5);

  };

});



/*******************************************************************/



// Functions for the color picker icon, once they click on it, the site will change color

// Getting the elements
// Color Switcher

var colorSwitcher = document.getElementsByClassName('color-switcher');
var switchGreen = document.getElementById('switcher-1');
var switchPurple = document.getElementById('switcher-2');
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
var wrapperInfo5 = document.getElementById('wrapper-info-5');
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

// Green color function

var switchColorGreen = function() {

  // Adding Green classes

  // Icons

  colorSwitcher[0].classList.add('green');
  colorIcon.classList.add('green');
  homeIcon.classList.add('green');
  aboutIcon.classList.add('green');
  projectIcon.classList.add('green');
  colorIcon.classList.add('green');
  mobileMenuIcon.classList.add('green');
  mainMenu.classList.add('green');
  mobileMenu.classList.add('green');
  socialMediaIcon.classList.add('green');
  bioBox.classList.add('green');
  centerHr.classList.add('green');
  centerHr2.classList.add('green');
  centerHr3.classList.add('green');
  centerHr4.classList.add('green');
  locationBox.classList.add('green');
  locationIcon.classList.add('green');
  country.classList.add('green');
  html.classList.add('green');
  css.classList.add('green');
  click.classList.add('green');
  click2.classList.add('green');
  click3.classList.add('green');
  click4.classList.add('green');
  click5.classList.add('green');
  wrapperItem1[0].classList.add('green');
  wrapperItem2[0].classList.add('green');
  wrapperItem3[0].classList.add('green');
  wrapperItem4[0].classList.add('green');
  wrapperItem5[0].classList.add('green');
  wrapperInfo1.classList.add('green');
  wrapperInfo2.classList.add('green');
  wrapperInfo3.classList.add('green');
  wrapperInfo4.classList.add('green');
  wrapperInfo5.classList.add('green');
  projectBtn[0].classList.add('green');
  projectBtn[1].classList.add('green');
  projectBtn[2].classList.add('green');
  projectBtn[3].classList.add('green');
  projectBtn[4].classList.add('green');
  codeBtn[0].classList.add('green');
  codeBtn[1].classList.add('green');
  codeBtn[2].classList.add('green');
  codeBtn[3].classList.add('green');
  codeBtn[4].classList.add('green');
  footerCopy.classList.add('green');
  footerFirstName.classList.add('green');
  footerLastName.classList.add('green');

  // Pages

  htmlTag.classList.add('green');
  homeSection.classList.add('green');
  aboutSection.classList.add('green');
  projectSection.classList.add('green');

  // Removing Purple classes

  // Icons

  colorSwitcher[0].classList.remove('purple');
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
  wrapperItem5[0].classList.remove('purple');
  wrapperInfo1.classList.remove('purple');
  wrapperInfo2.classList.remove('purple');
  wrapperInfo3.classList.remove('purple');
  wrapperInfo4.classList.remove('purple');
  wrapperInfo5.classList.remove('purple');
  projectBtn[0].classList.remove('purple');
  projectBtn[1].classList.remove('purple');
  projectBtn[2].classList.remove('purple');
  projectBtn[3].classList.remove('purple');
  projectBtn[4].classList.remove('purple');
  codeBtn[0].classList.remove('purple');
  codeBtn[1].classList.remove('purple');
  codeBtn[2].classList.remove('purple');
  codeBtn[3].classList.remove('purple');
  codeBtn[4].classList.remove('purple');
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

  colorSwitcher[0].classList.add('purple');
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
  wrapperItem5[0].classList.add('purple');
  wrapperInfo1.classList.add('purple');
  wrapperInfo2.classList.add('purple');
  wrapperInfo3.classList.add('purple');
  wrapperInfo4.classList.add('purple');
  wrapperInfo5.classList.add('purple');
  projectBtn[0].classList.add('purple');
  projectBtn[1].classList.add('purple');
  projectBtn[2].classList.add('purple');
  projectBtn[3].classList.add('purple');
  projectBtn[4].classList.add('purple');
  codeBtn[0].classList.add('purple');
  codeBtn[1].classList.add('purple');
  codeBtn[2].classList.add('purple');
  codeBtn[3].classList.add('purple');
  codeBtn[4].classList.add('purple');
  footerCopy.classList.add('purple');
  footerFirstName.classList.add('purple');
  footerLastName.classList.add('purple');

  // Pages

  htmlTag.classList.add('purple');
  homeSection.classList.add('purple');
  aboutSection.classList.add('purple');
  projectSection.classList.add('purple');

  // Removing Green classes

  // Icons

  colorSwitcher[0].classList.remove('green');
  colorIcon.classList.remove('green');
  homeIcon.classList.remove('green');
  aboutIcon.classList.remove('green');
  projectIcon.classList.remove('green');
  colorIcon.classList.remove('green');
  mobileMenuIcon.classList.remove('green');
  mainMenu.classList.remove('green');
  mobileMenu.classList.remove('green');
  socialMediaIcon.classList.remove('green');
  bioBox.classList.remove('green');
  centerHr.classList.remove('green');
  centerHr2.classList.remove('green');
  centerHr3.classList.remove('green');
  centerHr4.classList.remove('green');
  locationBox.classList.remove('green');
  locationIcon.classList.remove('green');
  country.classList.remove('green');
  html.classList.remove('green');
  css.classList.remove('green');
  click.classList.remove('green');
  click2.classList.remove('green');
  click3.classList.remove('green');
  click4.classList.remove('green');
  click5.classList.remove('green');
  wrapperItem1[0].classList.remove('green');
  wrapperItem2[0].classList.remove('green');
  wrapperItem3[0].classList.remove('green');
  wrapperItem4[0].classList.remove('green');
  wrapperItem5[0].classList.remove('green');
  wrapperInfo1.classList.remove('green');
  wrapperInfo2.classList.remove('green');
  wrapperInfo3.classList.remove('green');
  wrapperInfo4.classList.remove('green');
  wrapperInfo5.classList.remove('green');
  projectBtn[0].classList.remove('green');
  projectBtn[1].classList.remove('green');
  projectBtn[2].classList.remove('green');
  projectBtn[3].classList.remove('green');
  projectBtn[4].classList.remove('green');
  codeBtn[0].classList.remove('green');
  codeBtn[1].classList.remove('green');
  codeBtn[2].classList.remove('green');
  codeBtn[3].classList.remove('green');
  codeBtn[4].classList.remove('green');
  footerCopy.classList.remove('green');
  footerFirstName.classList.remove('green');
  footerLastName.classList.remove('green');

  // Pages

  htmlTag.classList.remove('green');
  homeSection.classList.remove('green');
  aboutSection.classList.remove('green');
  projectSection.classList.remove('green');
}

// Sky Blue Color function by removing both Green and Purple classes

var switchColorSkyBlue = function() {

  // Removing Green classes

  // Icons

  colorSwitcher[0].classList.remove('green');
  colorIcon.classList.remove('green');
  homeIcon.classList.remove('green');
  aboutIcon.classList.remove('green');
  projectIcon.classList.remove('green');
  colorIcon.classList.remove('green');
  mobileMenuIcon.classList.remove('green');
  mainMenu.classList.remove('green');
  mobileMenu.classList.remove('green');
  socialMediaIcon.classList.remove('green');
  bioBox.classList.remove('green');
  centerHr.classList.remove('green');
  centerHr2.classList.remove('green');
  centerHr3.classList.remove('green');
  centerHr4.classList.remove('green');
  locationBox.classList.remove('green');
  locationIcon.classList.remove('green');
  country.classList.remove('green');
  html.classList.remove('green');
  css.classList.remove('green');
  click.classList.remove('green');
  click2.classList.remove('green');
  click3.classList.remove('green');
  click4.classList.remove('green');
  click5.classList.remove('green');
  wrapperItem1[0].classList.remove('green');
  wrapperItem2[0].classList.remove('green');
  wrapperItem3[0].classList.remove('green');
  wrapperItem4[0].classList.remove('green');
  wrapperItem5[0].classList.remove('green');
  wrapperInfo1.classList.remove('green');
  wrapperInfo2.classList.remove('green');
  wrapperInfo3.classList.remove('green');
  wrapperInfo4.classList.remove('green');
  wrapperInfo5.classList.remove('green');
  projectBtn[0].classList.remove('green');
  projectBtn[1].classList.remove('green');
  projectBtn[2].classList.remove('green');
  projectBtn[3].classList.remove('green');
  projectBtn[4].classList.remove('green');
  codeBtn[0].classList.remove('green');
  codeBtn[1].classList.remove('green');
  codeBtn[2].classList.remove('green');
  codeBtn[3].classList.remove('green');
  codeBtn[4].classList.remove('green');
  footerCopy.classList.remove('green');
  footerFirstName.classList.remove('green');
  footerLastName.classList.remove('green');

  // Pages

  htmlTag.classList.remove('green');
  homeSection.classList.remove('green');
  aboutSection.classList.remove('green');
  projectSection.classList.remove('green');

  // Removing Purple classes

  // Icons

  colorSwitcher[0].classList.remove('purple');
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
  wrapperItem5[0].classList.remove('purple');
  wrapperInfo1.classList.remove('purple');
  wrapperInfo2.classList.remove('purple');
  wrapperInfo3.classList.remove('purple');
  wrapperInfo4.classList.remove('purple');
  wrapperInfo5.classList.remove('purple');
  projectBtn[0].classList.remove('purple');
  projectBtn[1].classList.remove('purple');
  projectBtn[2].classList.remove('purple');
  projectBtn[3].classList.remove('purple');
  projectBtn[4].classList.remove('purple');
  codeBtn[0].classList.remove('purple');
  codeBtn[1].classList.remove('purple');
  codeBtn[2].classList.remove('purple');
  codeBtn[3].classList.remove('purple');
  codeBtn[4].classList.remove('purple');
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
  colorSwitcher[0].classList.toggle('active');
}

// Make the color switcher visible and hidden

colorIcon.addEventListener('click', colorSwitcherToggle);


// Switch colors

switchGreen.addEventListener('click', switchColorGreen);
switchPurple.addEventListener('click', switchColorPurple);
switchSkyBlue.addEventListener('click', switchColorSkyBlue);