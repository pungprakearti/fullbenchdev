//sticky nav bar doesn't work when hiding scroll bar
var navBar = document.querySelector('.navBar');

function stickyNavigation() {
  if (navBar.offsetTop <= window.scrollY) {
    navBar.style.top = window.scrollY + 'px';
  } else {
    navBar.style.top = '240px';
  }
}

window.addEventListener('scroll', stickyNavigation);
