const rollButton = document.querySelector(".dice__trigger");
const diceImage = document.querySelector(".dice__image");

function rollDice() {
  let num = Math.random() * 6;

  if(num>=0 && num < 1) {
      diceImage.src = "images/dice1.png";
  }
  else if(num>=1 && num < 2) {
    diceImage.src = "images/dice2.png";
  }
  else if(num>=2 && num < 3) {
    diceImage.src = "images/dice3.png";
  }
  else if(num>=3 && num < 4) {
    diceImage.src = "images/dice4.png";
  }
  else if(num>=4 && num < 5) {
    diceImage.src = "images/dice5.png";
  }
  else {
    diceImage.src = "images/dice6.png";
  }
}

rollButton.addEventListener("click", function() {
  rollDice();
});