//noteworthy methods..
//document.querySelector(#someid).innerHTML = "la";
//document.onkeyup = function(event) {
//var userInput = event.key.toLowerCase();

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

function startGame() {
  let newWord = words[Math.floor(Math.random() * words.length)];
  let newWordHidden = "";
  for (let i = 0; i < newWord.length; i++) {
    newWordHidden += "_ ";
  }
  document.querySelector("#currentWord").innerHTML=newWordHidden;
}

startGame();
