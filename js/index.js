// Mobile menu

var menuIcon = document.getElementsByClassName('mobile-menu__menu');
var mainMenu = document.getElementsByClassName('main-menu');

var clickedBtn = function() {
  mainMenu[0].classList.toggle('active');
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
      mainMenu[0].classList.remove('active');
    }

    // About section function

    var clickedAboutMobile = function() {
      homeSection.style.filter = "blur(2px)";
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
      mainMenu[0].classList.remove('active');
    }

    // Project section function

    var clickedProjectMobile = function() {
      homeSection.style.filter = "blur(2px)";
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
      mainMenu[0].classList.remove('active');
    }

    // Addind Event Listener to the menu icons for mobile

    homeIconMobile.addEventListener('click', clickedTopMobile);
    aboutIconMobile.addEventListener('click', clickedAboutMobile);
    projectIconMobile.addEventListener('click', clickedProjectMobile);


  } else {

    // Desktop


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