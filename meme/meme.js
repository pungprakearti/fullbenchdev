window.onload = function() {
  //form source
  var form = document.getElementById('newMemeForm');
  var formTopText = document.getElementById('topText');
  var formBottomText = document.getElementById('bottomText');

  //meme targets
  var memeImage = document.querySelector('.meme');
  var memeTopText = document.querySelector('h1');
  var memeBottomText = document.querySelector('h2');

  //selectable image target
  var url = document.getElementById('imageURL');

  //meme container
  var divMemeContainer = document.querySelector('.completedMemeContainer');
  var imageContainer = document.querySelector('.image');

  //selectable image selection
  var memeChoice = document.querySelector('.selectableImages');
  memeChoice.addEventListener('click', function(event) {
    url.value = event.target.src;
  });

  //submit
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (url.value === '') {
      window.alert('Please enter a URL in the "IMAGE LINK" box');
    } else {
      //create meme
      var createDivWrapper = document.createElement('div');
      createDivWrapper.setAttribute('class', 'memeWrapper');
      console.log(createDivWrapper);

      var createDiv = document.createElement('div');
      createDiv.setAttribute('class', 'image');

      var createImg = document.createElement('img');
      createImg.setAttribute('src', url.value);
      createImg.setAttribute('class', 'meme');

      var createH1 = document.createElement('h1');
      createH1.textContent = formTopText.value;

      var createH2 = document.createElement('h2');
      createH2.textContent = formBottomText.value;

      // var createP = document.createElement('p');
      // createP.setAttribute('class', 'hidden');
      // createP.textContent = 'X';

      // append meme
      divMemeContainer.appendChild(createDivWrapper);
      createDivWrapper.appendChild(createDiv);
      createDiv.appendChild(createImg);
      createDiv.appendChild(createH1);
      createDiv.appendChild(createH2);
      // createDivWrapper.appendChild(createP);
    }

    //clear form
    form.reset();
  });

  //deletion
  divMemeContainer.addEventListener('click', function(event) {
    imageContainer.removeChild(event.target);
    console.log(event.target);
  });
};
