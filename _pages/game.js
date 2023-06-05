let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let score = 0;

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

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`;
  cardA.setAttribute('data-color', color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
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
    //target.className += 'done';

    console.log(target.getAttribute('data-color'));
    
    if (!clickedCard) {
      clickedCard = target; 
    } else if (clickedCard) {
        

    if(
        clickedCard.getAttribute('data-color') ===
        target.getAttribute('data-color')
    ) {
            console.log('cards ARE equal');
            //clickedCard.className += 'done ';
            //target.className += 'done ';
            //match at the bot
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




