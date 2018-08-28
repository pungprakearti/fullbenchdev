window.onload = function() {
  //sticky nav bar
  window.onscroll = function() {
    myFunction();
  };

  var navbar = document.querySelector('.navBar');
  var sticky = navbar.offsetTop;
  console.log(navbar);

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
};
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
