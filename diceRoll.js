const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

function generateNumber() {
  let num = Math.ceil(Math.random()*6);
  return num;
}

function rollDice() {
  diceTriggerEl.addEventListener("click", function() {
    const audio = new Audio('src/audio_file.wav'); audio.play();
    let randomNumber = generateNumber();
    diceImageEl.src = `src/dice${randomNumber}.png`;
    diceImageEl.classList.toggle("animate");
  });
}
rollDice();