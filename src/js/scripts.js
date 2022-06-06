// If JS enabled, remove no-js class
document.documentElement.classList.remove('no-js');

// Navigation
if (screen.width <= 768) {
  const navBtn = document.getElementById('navButton');
  const navList = document.getElementById('navList');

  // Set aria-expanded to true or false after clicking
  // mobile menu button and show/hide menu
  navBtn.addEventListener('click', () => {
    let navBtnAE = navBtn.ariaExpanded;
    // console.log(navBtnAE);
    if (navBtnAE == 'false') {
      navBtn.setAttribute('aria-expanded', 'true');
    } else if (navBtnAE == 'true') {
      navBtn.setAttribute('aria-expanded', 'false');
    }
    // navBtnAE = false ? true : false;
    if (navBtnAE == 'false') {
      navList.style.transform = "translate(0)";
    } else if (navBtnAE == 'true') {
      navList.style.transform = "translate(-150%, 150%)";
    }
  });

  // Close mobile menu when link has choosen
  let menuLinks = document.querySelectorAll('.nav__link');

  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      navBtn.setAttribute('aria-expanded', 'false');
      navList.style.transform = "translate(-150%, 150%)";
    })
  });
}