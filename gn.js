var computerGuess;

// vart alla "hur många gånger man gissat"
var userGuessLog = [];
//vi har den här för när spelet startar
var attempts = 0;
// lättmode
var maxGuesses = 10;
// när spelet är slut ska svår o lätt knapp försvinna
function gameEnded() {
  document.getElementById('newGameBtn').style.display = 'inline';
  document.getElementById('easyBtn').style.display = 'none';
  document.getElementById('hardBtn').style.display = 'none';
  // med readonly gör så att varje gång spelet är slut the inputBox
  // är set to readonly så den kan inte ta emot mer input
  document.getElementById('inputBox').setAttribute('readonly', 'readonly');

}

function easyMode() {
  maxGuesses = 10;
  // när personen klickat på knappen ska man kunna se att den är active
  document.getElementById('easyBtn').className = 'activeButton';
  document.getElementById('hardBtn').className = '';
}

function hardMode() {
  maxGuesses = 5;
  document.getElementById('hardBtn').className = 'activeButton';
  document.getElementById('easyBtn').className = '';

}

// function kopplad till nytt spel knappen
// vi vill att function ska reloada sidan o starta spelet igen
// och ge ett nytt nummer
function newGame(){
  window.location.reload();
}

function init() {

  // genom att använda math.floor blir vi av med decimalerna
  computerGuess = Math.floor(Math.random() * 100 + 1);

  document.getElementById('newGameBtn').style.display = 'none';

  // tittar om radnom number fungerar
// console.log(computerGuess);
}

function compareGuess() {

  // vi skriver in personens gissningar in value o få in det i en var
  // " " + för att få ett mellanrum mellan de svarade nummrena i gissningarna
  var userGuess = " " + document.getElementById('inputBox').value;

  // console.log(userGuess);
// vi ska pusha alla gissningar i en array
  userGuessLog.push(userGuess);

  // tittar så alla svar sparas i en array
  // console.log(userGuessLog);

document.getElementById('guessLog').innerHTML = userGuessLog;
// detta kommer göra att varje gång personen har en gissning blir det 1 gissning
attempts++;
document.getElementById('attempts').innerHTML = attempts;

if (userGuessLog.length < maxGuesses) {  if(userGuess > computerGuess) {
    document.getElementById('textOutput').innerHTML = 'För högt nummer';
    document.getElementById('inputBox').value = "";
  } else if (userGuess < computerGuess) {
    document.getElementById('textOutput').innerHTML = 'För lågt nummer';
      document.getElementById('inputBox').value = "";
  } else {
    document.getElementById('textOutput').innerHTML = 'RÄTT!! du hade rätt efter ' +attempts+ ' försök';
    document.getElementById('container').style.backgroundColor = 'green';
    gameEnded();
  }
} else {
  if (userGuess > compareGuess) {
    document.getElementById('textOutput').innerHTML = 'FÖRLORARE!!' + '<br> Det rätta nummret var ' + computerGuess;
      document.getElementById('container').style.backgroundColor = '#e82c4e';
    gameEnded();
  } else if (userGuess < computerGuess) {
    document.getElementById('textOutput').innerHTML = 'FÖRLORARE!!' + '<br> Det rätta nummret var '+ computerGuess;
          document.getElementById('container').style.backgroundColor = '#e82c4e';
    gameEnded();
  } else {
    document.getElementById('textOutput').innerHTML = 'RÄTT!! du hade rätt efter' +attempts+ 'försök';
      document.getElementById('container').style.backgroundColor = 'green';
    gameEnded();
  }
}

}
