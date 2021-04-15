//chalenge 1:your age in days
function ageInDays()
{
var birthYear=prompt('What year were you born')
var ageInDayss = (2077-birthYear)*365;
var h2= document.createElement('h2');
var textAnswer = document.createTextNode('You are ' + ageInDayss + 'days old.');
h2.setAttribute('id', 'ageInDays');
h2.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h2);
}

function reset() 
{
    document.getElementById('ageInDays').remove();
} 

//challenge 2:cat generator
function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//challenge 3:Rock, Paper, Scissor
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice =bot(r());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);  //(0,1) human lost and bot won
    console.log(results);

   message = finalMessage(results); // (Message: 'You Won!', color:'green')
   console.log(message);

   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function r(){
    return Math.floor(Math.random()*3);
}

function bot(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return{'message':'You Lost!', 'color':'red'};
    }else if(yourScore === 0.5){
        return{'message':'You Tied!', 'color':'yellow'};
    }else{
        return{'message':'You Won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    //let's remove all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px blue'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +"' height=150 widht=150 style='box-shadow:0px 10px 50px red'>"

    document.getElementById('Challenge-3').appendChild(humanDiv);
    document.getElementById('Challenge-3').appendChild(messageDiv);
    document.getElementById('Challenge-3').appendChild(botDiv);
}

//challenge-4 change the color of all buttons
var button_all = document.getElementsByTagName("button");

let copyAllButtons =[];
for(let i=0; i<button_all.length; i++){
    copyAllButtons.push(button_all[i]);
}
function buttonColorChange(buttonChange){
    if(buttonChange.value === 'red'){
        buttonRed();
    }
    else if(buttonChange.value === 'green'){
        buttongreen();
    }
    else if(buttonChange.value === 'yellow'){
        buttonyellow();
    }
    else if(buttonChange.value === 'blue'){
        buttonblue();
    }
    else if(buttonChange.value === 'tomato'){
        buttontomato();
    }
    else if(buttonChange.value === 'orange'){
        buttonorange();
    }
    else if(buttonChange.value === 'gray'){
        buttongray();
    }
    else if(buttonChange.value === 'reset'){
        buttonreset();
    }
    else if(buttonChange.value === 'random'){
        buttonRandom();
    }

}
function buttonRed(){
    for(let i=0; i<button_all.length; i++){
       button_all[i].classList.remove(button_all[i].classList); 
       button_all[i].classList.add('btn-secondary');
    }

}
function buttonblue(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-primary');
    }
}
function buttongreen(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-4');
    }
}
function buttonyellow(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-3');
    }
}
function buttonorange(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-1');
    }
}
function buttontomato(){
    for(let i=0; i<button_all.length;i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-2');
    }
}
function buttongray(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-third');
    }
}
function buttonreset(){
    for(let i=0; i<button_all.length;i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('copyAllButtons[i]')
    }
}
function buttonRandom(){
   var choices = ['btn-primary', 'btn-secondary', 'btn-third', 'btn-1', 'btn-2', 'btn-3', 'btn-4']
   for(let i=0; i<button_all.length;i++){
    let randomNumber = Math.floor(Math.random()*7);
    button_all[i].classList.remove(button_all[i].classList);
    button_all[i].classList.add(choices[randomNumber]);
   }  
}

//challenge-5 Blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your_result', 'div': '#your-box', 'score':0},
    'dealer': {'scoreSpan': '#bot_result', 'div': '#bot-box', 'score':0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'K':10, 'Q':10, 'A':[1,11]},
    'Wins' : 0,
    'Loses' : 0,
    'Draws' : 0,
    'isStand':false,
    'turnsOver':false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('static/sounds/swish.m4a');
const WinSound = new Audio('static/sounds/cash.mp3');
const LossSound = new Audio('static/sounds/aww.m4a');

document.querySelector('#btn-5-bj').addEventListener('click',blackjackHit);
document.querySelector('#btn-6-bj').addEventListener('click',dealerLogic);
document.querySelector('#btn-7-bj').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
    showCard(card, YOU);
    UpdateScore(card, YOU);
    showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
    
}

function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
    cardImage.src= `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal(){
    if(blackjackGame['turnsOver'] === true){
    
        blackjackGame['isStand'] = false;    
        let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
        let botImages = document.querySelector(DEALER['div']).querySelectorAll('img');
        
        for(let i=0; i<yourImages.length; i++){
            yourImages[i].remove();
        }
        
        for(let i=0; i<botImages.length; i++){
            botImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;


        document.querySelector(YOU['scoreSpan']).style.color = '#ffffff';
        document.querySelector(DEALER['scoreSpan']).style.color = '#ffffff';

        document.querySelector('#result').textContent = "Let's Play";
        document.querySelector('#result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
}

function UpdateScore(card, activePlayer){
    // if adding 11 keeps me below 21, add 11. otherwise, add 1
    if(card === 'A') {
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else{
    activePlayer['score'] += blackjackGame['cardsMap'][card];   
    } 
}  

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

//function sleep(ms){
  //  return new Promise(resolve => setTimeout(resolve,ms));
//}

function dealerLogic(){
    blackjackGame['isStand'] = true;

    while (DEALER['score'] <16 && blackjackGame['isStand'] === true){
        let card = randomCard();
    showCard(card, DEALER)
    UpdateScore(card, DEALER);
    showScore(DEALER);
   // await sleep(1000);
    }
    

    if(DEALER['score'] > 15){
        blackjackGame['turnsOver'] = true;
        let Winner = computeWinner();
        showResult(Winner);
    }
}

// compute Winner and return who just won
//update the wins, draws, and losses
function computeWinner(){
    let Winner;
    if(YOU['score'] <= 21){
        //condition: higher score than dealer or when dealer busts but your're 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score']> 21)){
            blackjackGame['Wins']++;
            Winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            blackjackGame['Loses']++;
            Winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score']){
            blackjackGame['Draws']++;
        }
    }
    //condition: whern user busts but dealer doesn't
    else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame['Loses']++;
        Winner = DEALER;
    }
    //condition: when you AND th dealer busts
    else if(YOU['score'] >21 && DEALER['score'] >21){
        blackjackGame['Draws']++;
    }
    return Winner;
}

function showResult(Winner){
    let message, messageColor;

    if(blackjackGame['turnsOver'] === true){
        
        if(Winner === YOU){
            document.querySelector('#Wins').textContent = blackjackGame['Wins'];
            message = 'YOU WON!';
            messageColor = 'green';
            WinSound.play();
        }
        else if(Winner === DEALER){
            document.querySelector('#Loses').textContent = blackjackGame['Loses'];
            message = 'YOU LOSS!';
            messageColor = 'red';
            LossSound.play();
        }
        else{
            document.querySelector('#Draws').textContent = blackjackGame['Draws'];
            message = 'YOU DREW';
            messageColor = 'black';
        }

        document.querySelector('#result').textContent = message;
        document.querySelector('#result').style.color = messageColor;
    }
}