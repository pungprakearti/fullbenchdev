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
  var match = 0;
  var score = 0;

  //set high score
  var highScore = localStorage.getItem('highScore');
  var updateHS = document.querySelector('.highScore');
  if (highScore === null) {
    highScore = +Infinity;
    updateHS.innerText = '0';
  } else {
    updateHS.innerText = highScore;
  }

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

  function showImage(s, num) {
    //cardBack to 0 opacity
    if (s !== undefined) {
      s.parentElement.firstChild.style.opacity = 0;

      //img to 1 opacity, visible transform scale(1.5) and z-index 5
      s.parentElement.lastChild.style.opacity = 1;
      s.parentElement.lastChild.style.visibility = 'visible';
      s.parentElement.lastChild.style.transform = 'scale(1.5)';
      s.parentElement.lastChild.style.zIndex = num;

      //add to score
      score++;
      sb = document.querySelector('.currentScore');
      sb.innerText = score;
    }
  }

  function showCardBack() {
    let imgArr = document.querySelectorAll('img');
    for (let item of imgArr) {
      if (item.style.zIndex >= 5) {
        // hide image
        item.style.opacity = 0;
        item.style.visibility = 'hidden';
        item.style.transform = 'scale(1)';
        item.style.zIndex = 1;

        // show card back
        item.parentElement.firstChild.style.opacity = 1;

        clearSelected();
      }
    }
  }

  function showComplete() {
    var complete = document.querySelector('.complete');
    complete.style.visibility = 'visible';
    complete.style.opacity = 1;
    complete.style.fontSize = '100px';

    var reload = document.querySelector('.reload');
    reload.style.visibility = 'visible';
    reload.style.opacity = 1;
    reload.style.fontSize = '40px';

    reload.onclick = function() {
      location.reload();
    };
  }

  function changeHS() {
    if (highScore > score) {
      localStorage.setItem('highScore', score);
      updateHS.innerText = score;
    }
  }

  function hideAll() {
    let imgArr = document.querySelectorAll('img');
    for (let item of imgArr) {
      if (item.style.zIndex >= 5) {
        // hide image
        item.style.visibility = 'hidden';
        // hide card back
        item.parentElement.firstChild.style.visibility = 'hidden';
      }
    }
    //increment matches
    match++;

    clearSelected();

    //win
    if (match >= 15) {
      showComplete();

      //change high score
      changeHS();
    }
  }

  function clearSelected() {
    setTimeout(function() {
      selected1 = undefined;
      selected2 = undefined;
    }, 100);
  }

  function createCards() {
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
  }

  shuffle(deckArr);
  createCards();
  var selected1, selected2;

  click = document.querySelector('.cardsContainer');
  click.onclick = function() {
    //select 1
    if (selected1 === undefined) {
      selected1 = event.target.parentElement.lastChild;
      try {
        showImage(selected1, 5);
      } catch {}
    }

    //select 2
    if (
      selected1 !== undefined &&
      selected2 === undefined &&
      event.target.parentElement.lastChild !== selected1
    ) {
      selected2 = event.target.parentElement.lastChild;
      showImage(selected2, 6);
    }

    //match
    if (selected1 !== undefined && selected2 !== undefined) {
      if (selected1.src === selected2.src) {
        setTimeout(hideAll, 500);
      } else {
        //no match
        setTimeout(showCardBack, 500);
      }
    }
  };
};
