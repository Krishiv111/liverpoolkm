//Variables set
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let score = 0;
// A set of the colors in order to go through and randomize the colors.
const colors= [
    'pink',
    'yellow',
    'cyan',
    'blue',
    'green',
    'teal',
    'red',
    'orange',
];
// THis is a way to randomize the code, firstly the cards is set within a loop to go through the above code, then each card is set into a number through pardse int for the cards array 
const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1); // Splice to remove so that there doesent get more than this color again
  cardA.className += ` ${color}`; // Puts the cards within an array. 
  cardA.setAttribute('data-color', color);// Sets the card color to the card works like an assignee

  const cardBIndex = parseInt(Math.random() * cards.length); //provides teh same input for the other part of the other sets of carsd
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1); // since its mathcing game you need two sets allowing for this to be here
  cardB.className += ` ${color}`;
  cardB.setAttribute('data-color', color);
}
function onCardClicked(e) {
    const target = e.currentTarget;
    
    if (
        preventClick ||
        target === clickedCard ||  
        target.className.includes('done')){
        return;
    }
    target.className = target.className.
        replace('color-hidden', '')
        .trim();
    

    console.log(target.getAttribute('data-color'));
    
    if (!clickedCard) {
      clickedCard = target; 
    } else if (clickedCard) {
        

    if(
        clickedCard.getAttribute('data-color') ===
        target.getAttribute('data-color')
    ) {
            console.log('cards ARE equal');
            combosFound++;
            score++; 
            updateScore();
            clickedCard = null;
            if(combosFound === 8) {
                alert('NICE YOU WIN!');
            }
            
            

            
        } else {
        console.log('cards.not equal');
        preventClick = true;
        setTimeout(() => {
            clickedCard.className =
            clickedCard.className.replace('done','').trim() + 
            'color-hidden';
            target.className = 
            target.className.replace('done','').trim() + 'color-hidden';
            clickedCard = null;
            preventClick = false;
            
            },500);
        }
     }
}
//Simeple scoring function where it takes the score and adds it when you get a combination for the reason we use combos. 
function updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = 'Score: ' + score;
    }
  }
 
  cards.forEach(card => {
    card.addEventListener('click', onCardClicked);
  });
  
  updateScore();




