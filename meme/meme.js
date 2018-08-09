window.onload = function() {
  //selectable images
  var memeChoice = document.querySelector('.selectableImages');
  memeChoice.addEventListener('click', function(event) {
    var url = document.getElementById('imageURL');
    url.value = event.target.src;
  });
};
