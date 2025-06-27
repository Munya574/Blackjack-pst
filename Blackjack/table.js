// Bankroll variable (global)
let bankroll = 2022;

// Get bankroll
function getBankroll() {
  return bankroll;
}

// Set bankroll
function setBankroll(newBalance) {
  bankroll = parseInt(newBalance); // Ensure it’s an integer
  document.getElementById("bankrollDisplay").textContent = `$${bankroll}`;
}

// Show betting, hide actions
function timeToBet() {
  document.getElementById("playerActions").style.display = "none";
  document.getElementById("betting").style.display = "block";
}

// Hide betting, show actions
function timeToPlay() {
  document.getElementById("betting").style.display = "none";
  document.getElementById("playerActions").style.display = "block";
}

// Handle wager
function makeWager() {
  const wager = parseInt(document.getElementById("users-wager").value);
  console.log(`User wagered: $${wager}`);
  // (Optional: Deduct wager from bankroll)
  timeToPlay();
}
