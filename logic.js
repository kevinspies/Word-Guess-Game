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

//let's do this with a string, grabbing the word, and an array, to keep track of their progress
let progressArr = [];
for (let i = 0; i < word.length; i++) {
  progressArr.push("_");
  //start by filling their progressArray with underscores
}
//function to update a correct guess into progressArr
function update(letter) {
  //letter represents user guess
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) {
      progressArr[i] = letter;
    }
  }
}
//this function builds a new string to show the user every time they make a corret guess, adding a space
//after each of the elements in their current progress array
function showProgress(progressArr) {
  let progressString = "";
  for (let i = 0; i < progressArr.length; i++) {
    progressString.concat(progressArr[i], " ");
  }
  return progressString;
}

let guessesRemaining = 9;
let lettersGuessed = [];
let guess = "";

console.log(progressArr);
//game logic here?
document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    if(word.includes(guess)){
        update(guess);
        console.log(progressArr);
    }


};

//useful things..
// let newWord = words[Math.floor(Math.random() * words.length)];
// document.querySelector("#currentWord").innerHTML = newWordHidden;
// document.onkeyup = function(event) {
// var guess = event.key.toLowerCase();

{
  /* 
<p>Wins: <span id="numWins">0</span></p>
<p>Losses: <span id="numLosses">0</span></p>
<p>Current Word: <span id="currentWord"></span></p>
<p>Number of guesses remaining: <span id="numGuessesRemaining"></span></p>
<p>Letters already guessed: <span id="lettersAlreadyGuessed"></span></p> 
*/
}

//ideas i could implement -
//webscraping new libraries (user option to mix things up)
//cool css animations (like green fade effect on corrent letter, red on incorrect for example)
//sounds
//animations
