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

  for (let image of deckArr) {
    //create cards
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

  //select first image
  cardsContainer = document.querySelector('.cardsContainer');
  cardsContainer.addEventListener('click', function(event) {
    console.log(event.target);
    //cardBack to 0 opacity
    event.target.parentElement.firstChild.setAttribute('opacity', '0');
    //img to 1 opacity, visible transform scale(1.5) and z-index 5
    event.target.parentElement.lastChild.setAttribute('opacity', '1');
    event.target.parentElement.lastChild.setAttribute('visibility', 'visible');
    event.target.parentElement.lastChild.setAttribute('scale', '1.5');
    event.target.parentElement.lastChild.setAttribute('z-index', '5');
  });
};
