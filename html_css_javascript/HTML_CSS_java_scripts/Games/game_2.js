//BLACK JACK GAME

let blackjackGame={
    'you':{'scoreSpan':'#your_result', 'div':'#your_box', 'score':0},
    'dealer':{'scoreSpan':'#bot_result', 'div':'#bot_box', 'score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap':{'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10, 'A':[1,11]},
    'Wins':0,
    'Loses':0,
    'Draws':0,
    'IsStand':false,
    'TurnsOver':false,
};

const YOU=blackjackGame['you'];
const DEALER=blackjackGame['dealer'];
const hitSound=new Audio('static/sounds/swish.m4a');
const winSound=new Audio('static/sounds/cash.mp3');
const loseSound=new Audio('static/sounds/aww.m4a');

document.querySelector('#btn-1-bj').addEventListener('click',blackjackHit);
document.querySelector('#btn-2-bj').addEventListener('click',blackjackDealer);
document.querySelector('#btn-3-bj').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if(blackjackGame['IsStand']===false){
        let cards = randomCard();
        ShowCard(cards,YOU);
        UpdateScore(cards,YOU);
        ShowScore(YOU);
        hitSound.play();
    }
}   
 

function ShowCard(cards,activePlayer){
    let cardImage;
    cardImage=document.createElement('img');
    cardImage.src=`static/images/${cards}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
}

function blackjackDealer(){
    if(YOU['score']<15){
        blackjackGame['IsStand']=false;
    }
    else{
        blackjackGame['IsStand']=true;
    }

    while(blackjackGame['IsStand'] === true && DEALER['score']<16){
        let cards=randomCard();
    ShowCard(cards,DEALER);
    UpdateScore(cards,DEALER);
    ShowScore(DEALER);
    hitSound.play();
    }

    if(DEALER['score']>15){
        showResult(computeWinner());
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function UpdateScore(cards,activePlayer){
    if(cards==='A'){
        if(activePlayer['score']+blackjackGame['cardsMap'][cards][1]<=21){
            activePlayer['score']+=blackjackGame['cardsMap'][cards][1];
        }
        else{
            activePlayer['score']+=blackjackGame['cardsMap'][cards][0];
        }
    }
    else{
        activePlayer['score']+=blackjackGame['cardsMap'][cards];
    }
}

function ShowScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color="red";
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    }
}

function blackjackDeal(){
    blackjackGame['TurnsOver']=true;
    if(blackjackGame['TurnsOver']===true){
        blackjackGame['IsStand']=false;
        let yourImage = document.querySelector(YOU['div']).querySelectorAll('img');
    let botImage = document.querySelector(DEALER['div']).querySelectorAll('img');

    for(let i=0; i<yourImage.length; i++){
        yourImage[i].remove();
    }

    for(let i=0; i<botImage.length; i++){
        botImage[i].remove();
    }
    
    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector(YOU['scoreSpan']).textContent=0;
    document.querySelector(YOU['scoreSpan']).style.color='white';

    document.querySelector(DEALER['scoreSpan']).textContent=0;
    document.querySelector(DEALER['scoreSpan']).style.color='white';

    document.querySelector('#result').textContent="Let's Play";
    document.querySelector('#result').style.color='white';

    blackjackGame['TurnsOver']=true;
    }
}    

function computeWinner(){
    let Winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            blackjackGame['Wins']++;
            Winner=YOU;
        }
        else if(YOU['score']<DEALER['score']){
            blackjackGame['Loses']++;
            Winner=DEALER;
        }
        else if(YOU['score']===DEALER['score']){
            blackjackGame['Draws']++;
        }
    }
    else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['Loses']++;
        Winner=DEALER;
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['Draws']++;
    }
    return Winner;
}

function showResult(Winner){
    let message;
    let messageColor;

    if(Winner === YOU){
        document.querySelector('#wins_data').textContent=blackjackGame['Wins'];
        message='YOU WON!';
        messageColor='green';
        winSound.play();
    }
    else if(Winner === DEALER){
        document.querySelector('#loses_data').textContent=blackjackGame['Loses'];
        message='YOU LOSE!';
        messageColor='black';
        loseSound.play();
    }
    else{
        document.querySelector('#draws_data').textContent=blackjackGame['Draws'];
        message='YOU DREW!';
        messageColor='yellow';
    }

    document.querySelector('#result').textContent=message;
    document.querySelector('#result').style.color=messageColor;
}