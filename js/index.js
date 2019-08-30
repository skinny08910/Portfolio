// Mobile menu

var menuIcon = document.getElementsByClassName('mobile-menu__menu');
var mainMenu = document.getElementsByClassName('main-menu');

var clickedBtn = function() {
  mainMenu[0].classList.toggle('active');
}

menuIcon[0].addEventListener("click", clickedBtn);


/*******************************************************************/






/*******************************************************************/


var screenResolution = function(mobileScreen) {
  if (mobileScreen.matches) {
    // Mobile

    //  Making the desktop menu disappear on mobile

    // Top section function

    var clickedTopMobile = function() {
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
      mainMenu.classList.remove('active');
    }

    // About section function

    var clickedAboutMobile = function() {
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
      mainMenu.classList.remove('active');
    }

    // Project section function

    var clickedProjectMobile = function() {
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
      mainMenu.classList.remove('active');
    }

    // Menu Icon

    // Addind Event Listener to the menu icons for mobile

    // homeIconMobile.addEventListener('click', clickedTopMobile);
    // aboutIconMobile.addEventListener('click', clickedAboutMobile);
    // projectIconMobile.addEventListener('click', clickedProjectMobile);
  } else {
    // Desktop menu


    // Icon menu
    var homeIcon = document.getElementById('home-icon');
    var aboutIcon = document.getElementById('about-icon');
    var projectIcon = document.getElementById('project-icon');
    var homeIconMobile = document.getElementById('home-icon');
    var aboutIconMobile = document.getElementById('about-icon');
    var projectIconMobile = document.getElementById('project-icon');

    // Top section function

    var clickedHomeIcon = function() {
      aboutSection.classList.remove('active');
      projectSection.classList.remove('active');
    }

    // About section function

    var clickedAboutIcon = function() {
      aboutSection.classList.add('active');
      projectSection.classList.remove('active');
    }

    // Project section function

    var clickedProjectIcon = function() {
      projectSection.classList.add('active');
      aboutSection.classList.remove('active');
    }

    // Addind Event Listener to the menu icons

    homeIcon.addEventListener('click', clickedHomeIcon);
    aboutIcon.addEventListener('click', clickedAboutIcon);
    projectIcon.addEventListener('click', clickedProjectIcon);

    // Pages

    var homeSection = document.getElementById('home');
    var aboutSection = document.getElementById('about');
    var projectSection = document.getElementById('project');
  }
}


var mobileScreen = window.matchMedia("(max-width: 900px)");

screenResolution(mobileScreen);

mobileScreen.addEventListener('click', screenResolution);