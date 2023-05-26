---
layout: page
title: JavaScript Final
permalink: /JS/
---
<head>

<style>

    .body{
        background-color: rgb(147, 227, 245);
    }
</style>
</head>
<body>
<!DOCTYPE html>
<html>
<head>
  <title>Memory Game</title>
  <style>
    .card {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin: 5px;
      display: inline-block;
      text-align: center;
      font-size: 24px;
      line-height: 100px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Memory Game</h1>
  <div id="game-grid"></div>

  <script>
    // Create an array of objects
    var objects = ['apple', 'banana', 'cherry', 'grape', 'orange', 'watermelon'];

    // Duplicate the objects to create pairs
    var cards = objects.concat(objects);

    // Shuffle the cards
    shuffle(cards);

    // Create a grid for the cards
    var grid = document.getElementById('game-grid');
    for (var i = 0; i < cards.length; i++) {
      var card = document.createElement('div');
      card.className = 'card';
      card.dataset.item = cards[i];
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }

    // Function to shuffle the cards using Fisher-Yates algorithm
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // Variables to keep track of flipped cards
    var flippedCards = [];
    var matchedCards = [];

    // Function to flip a card
    function flipCard() {
      if (flippedCards.length < 2 && !this.classList.contains('flipped') && !matchedCards.includes(this)) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
          setTimeout(checkMatch, 500);
        }
      }
    }

    // Function to check if the flipped cards match
    function checkMatch() {
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];

      if (card1.dataset.item === card2.dataset.item) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        matchedCards.push(card1, card2);
      } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }

      flippedCards = [];

      if (matchedCards.length === cards.length) {
        setTimeout(function() {
          alert('Congratulations! You have won the game!');
        }, 500);
      }
    }
  </script>
</body>
</html>










</body >