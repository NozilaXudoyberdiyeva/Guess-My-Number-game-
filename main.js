let number = Math.trunc(Math.random() * 10 + 1);
let score = 5;
console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "↗️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹️ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "↙️ Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹️ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  number = Math.trunc(Math.random() * 10 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#fff";
});
