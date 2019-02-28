const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");


function generateNumber() {
  let num = Math.ceil(Math.random()*6);
  return num;
}

function rollDice() {
  diceTriggerEl.addEventListener("click", function() {
    let randomNumber = generateNumber();
    diceImageEl.src = `images/dice${randomNumber}.png`;
  });
}
rollDice();