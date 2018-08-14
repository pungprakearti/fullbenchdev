window.onload = function() {
  var deckArr = [
    'images/bb01.jpg',
    'images/bb01.jpg',
    'images/bb02.jpg',
    'images/bb02.jpg',
    'images/bb03.jpg',
    'images/bb03.jpg',
    'images/bb04.jpg',
    'images/bb04.jpg',
    'images/bb05.jpg',
    'images/bb05.jpg',
    'images/bb06.jpg',
    'images/bb06.jpg',
    'images/bb07.jpg',
    'images/bb07.jpg',
    'images/bb08.jpg',
    'images/bb08.jpg',
    'images/bb09.jpg',
    'images/bb09.jpg',
    'images/bb10.jpg',
    'images/bb10.jpg',
    'images/bb11.jpg',
    'images/bb11.jpg',
    'images/bb12.jpg',
    'images/bb12.jpg',
    'images/bb13.jpg',
    'images/bb13.jpg',
    'images/bb14.jpg',
    'images/bb14.jpg',
    'images/bb15.jpg',
    'images/bb15.jpg'
  ];

  //shuffle array
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  shuffle(deckArr);

  //create cards
  for (let image of deckArr) {
    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    var divCardBack = document.createElement('div');
    divCardBack.setAttribute('class', 'cardBack');
    divCardBack.textContent = '88';

    var img = document.createElement('img');
    img.setAttribute('src', image);

    //append
    var cardsContainer = document.querySelector('.cardsContainer');
    cardsContainer.appendChild(divCard);
    divCard.appendChild(divCardBack);
    divCard.appendChild(img);
  }

  var selected1, selected2;

  //select first image
  var cardsContainer = document.querySelector('.cardsContainer');
  cardsContainer.addEventListener('click', function(event) {
    if (event.target !== undefined) {
      //select first image
      if (selected1 === undefined) {
        selected1 = event.target.parentElement.lastChild;
        console.log(selected1);
        showImage(event);
      }

      //select second image
      if (selected1 !== undefined && selected2 === undefined) {
        if (selected1 !== event.target.parentElement.lastChild) {
          selected2 = event.target.parentElement.lastChild;
          console.log(selected2);
          showImage(event);
        }
      }
    }

    //delay
  });

  function showImage(event) {
    //cardBack to 0 opacity
    event.target.parentElement.firstChild.style.opacity = 0;

    //img to 1 opacity, visible transform scale(1.5) and z-index 5
    event.target.parentElement.lastChild.style.opacity = 1;
    event.target.parentElement.lastChild.style.visibility = 'visible';
    event.target.parentElement.lastChild.style.transform = 'scale(1.5)';
    event.target.parentElement.lastChild.style.zIndex = 5;
    console.log('showed image');
  }

  function hideImagesShowCardBack(event) {
    let imgArr = document.querySelectorAll('img');
    for (let item of imgArr) {
      if (item.style.zIndex == 5) {
        // hide image
        event.target.parentElement.lastChild.style.opacity = 0;
        event.target.parentElement.lastChild.style.visibility = 'hidden';
        event.target.parentElement.lastChild.style.transform = 'scale(1)';
        event.target.parentElement.lastChild.style.zIndex = 1;

        // show card back
        event.target.parentElement.firstChild.style.opacity = 1;
        console.log('hide images');
      }
    }
  }

  function hideAll(event) {
    let imgArr = document.querySelectorAll('img');
    for (let item of imgArr) {
      if (item.style.zIndex == 5) {
        // hide image
        event.target.parentElement.lastChild.style.visibility = 'hidden';

        // hide card back
        event.target.parentElement.firstChild.style.visibility = 'hidden';
        console.log('hide images and hide card back');
      }
    }
  }
};

// if selected1 = -1
// if querySelector = cardback
// selected1 = querySelector
//scale image hide cardback

//if selected2 = -1
// if querySelector = cardback
//selected2 = querySelector
//scale image hide cardback

//delay

//MATCH
//if selected1 = selected2
//match++
//if match >= 15 game over
//else hide images

//MISS
//selected1 and selected2 = -1;
// shrink and hide images, unhind cardback
