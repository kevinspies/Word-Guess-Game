const words = [
  "aviation",
  "bluebird",
  "cloud",
  "dancer",
  "eagle",
  "fantasy",
  "goldcrest",
  "happy",
  "inquire"
];

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let wins = 0;
let losses = 0;
let gameIsOver = false;

let progressArr = [];
for (let i = 0; i < word.length; i++) {
  progressArr.push("_");
}
function update(letter) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) {
      progressArr[i] = letter;
    }
  }
  document.querySelector("#currentWord").innerHTML = showProgress(progressArr);
}
function showProgress(someArr) {
  let progressString = "";
  for (let i = 0; i < someArr.length; i++) {
    progressString+=someArr[i]+" ";
  }
  return progressString;
}

let guessesRemaining = 9;
let lettersGuessed = [];
let guess = "";

console.log(progressArr);
document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    if(!lettersGuessed.includes(guess)){
        lettersGuessed.push(guess);
        console.log("guesses: "+lettersGuessed);
    }
    if(word.includes(guess)){
        update(guess);
        console.log(progressArr);
    }


};

// useful things..
// let newWord = words[Math.floor(Math.random() * words.length)];
// document.querySelector("#currentWord").innerHTML = newWordHidden;
// document.onkeyup = function(event) {
// var guess = event.key.toLowerCase();

// <p>Wins: <span id="numWins">0</span></p>
// <p>Losses: <span id="numLosses">0</span></p>
// <p>Current Word: <span id="currentWord"></span></p>
// <p>Number of guesses remaining: <span id="numGuessesRemaining"></span></p>
// <p>Letters already guessed: <span id="lettersAlreadyGuessed"></span></p> 

// ideas i could implement -
// webscraping new libraries (user option to mix things up)
// cool css animations (like green fade effect on corrent letter, red on incorrect for example)
// sounds
// animations
