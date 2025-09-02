// Roll dice function
function rollDice() {
  // Player 1
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImageSource1);

  // Player 2
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  // Result
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// Exit button
function exitGame() {
  if (confirm("Are you sure you want to exit?")) {
    window.close();
  }
}

// Dynamic Date & Time
function updateDateTime() {
  let now = new Date();
  let options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  let dateTimeString = now.toLocaleDateString("en-US", options);
  document.getElementById("datetime").innerHTML = dateTimeString;
}

// Copyright Year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Event listeners
document.getElementById("rollBtn").addEventListener("click", rollDice);
document.getElementById("exitBtn").addEventListener("click", exitGame);
