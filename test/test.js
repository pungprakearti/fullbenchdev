//sticky nav bar
var navBar = document.querySelector('.navBar');
var sticky = navBar.offsetTop;

window.onscroll = stickyNavBar();
console.log(navBar.offsetTop);
console.log(window.pageYOffset);

function stickyNavBar() {
  console.log('working here');
  if (window.pageYOffset >= sticky) {
    // navBar.classList.add('sticky');
    navBar.style.position = 'fixed';
    navBar.style.top = 0;
    console.log('setting attributes');
  } else {
    navBar.style.position = 'relative';
    navBar.style.top = '240px';
  }
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
