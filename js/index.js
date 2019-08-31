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
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
      // mainMenu.classList.remove('active');
    }

    // About section function

    var clickedAboutMobile = function() {
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
      // mainMenu.classList.remove('active');
    }

    // Project section function

    var clickedProjectMobile = function() {
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
    }

    // Addind Event Listener to the menu icons for mobile

    homeIconMobile.addEventListener('click', clickedTopMobile);
    aboutIconMobile.addEventListener('click', clickedAboutMobile);
    projectIconMobile.addEventListener('click', clickedProjectMobile);


  } else {

    // Desktop


    // Top section function

    var clickedHomeIcon = function() {
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
    }

    // About section function

    var clickedAboutIcon = function() {
      aboutSection.classList.add('active');
      // aboutSection.style.transition = "transform 1s ease-in-out";
      projectSection.classList.remove('active');

    }

    // Project section function

    var clickedProjectIcon = function() {
      projectSection.classList.add('active');
      // projectSection.style.transition = "transform 1s ease-in-out";
      aboutSection.classList.remove('active');
    }

    // Addind Event Listener to the menu icons

    homeIcon.addEventListener('click', clickedHomeIcon);
    aboutIcon.addEventListener('click', clickedAboutIcon);
    projectIcon.addEventListener('click', clickedProjectIcon);


  }

}


screenResolution();