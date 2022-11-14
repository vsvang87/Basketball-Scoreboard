let guestScore = 0;
let homeScore = 0;
let isAlive = true;
let homeCount = document.getElementById("home");
let guestCount = document.getElementById("guest");
//home scoreboard
function homeAdd1() {
  if (isAlive) {
    homeScore += 1;
    homeCount.innerHTML = homeScore;
  }
}
function homeAdd2() {
  if (isAlive) {
    homeScore += 2;
    homeCount.innerHTML = homeScore;
  }
}
function homeAdd3() {
  if (isAlive) {
    homeScore += 3;
    homeCount.innerHTML = homeScore;
  }
}

//guest scoreboard
function guestAdd1() {
  if (isAlive) {
    guestScore += 1;
    guestCount.innerHTML = guestScore;
  }
}
function guestAdd2() {
  if (isAlive) {
    guestScore += 2;
    guestCount.innerHTML = guestScore;
  }
}
function guestAdd3() {
  if (isAlive) {
    guestScore += 3;
    guestCount.innerHTML = guestScore;
  }
}
