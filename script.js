 function checkPassword() {
  const input = document.getElementById('password').value.trim();
  if (input === "") {
    alert("🔑 Please enter the password first!");
    return;
  }
  if (input === "open123") {
    alert("✅ Door Unlocked!");
    document.getElementById("puzzle1").classList.remove("hidden");
  } else {
    alert("❌ Wrong password! Try again.");
  }
}

function solveRiddle1() {
  const answer = prompt("🧩 What's 3 × 7 + 1?");
  if (parseInt(answer) === 22) {
    alert("🎉 Correct! Puzzle 1 passed.");
    document.getElementById("puzzle2").classList.remove("hidden");
  } else {
    alert("❌ Incorrect! Try again.");
  }
}

function solveRiddle2() {
  const answer = prompt("🧩 What comes next: 2, 4, 6, ?");
  if (parseInt(answer) === 8) {
    alert("🎉 Correct! Puzzle 2 passed.");
    document.getElementById("puzzle3").classList.remove("hidden");
  } else {
    alert("❌ Wrong! Think of the pattern.");
  }
}

function solveRiddle3() {
  const answer = prompt('🧩 Guess the word: "It has keys but no locks"');
  if (answer.toLowerCase() === "keyboard") {
    alert("🎉 Correct! Puzzle 3 passed.");
    document.getElementById("puzzle4").classList.remove("hidden");
  } else {
    alert("❌ Nope! Think again.");
  }
}

function solveRiddle4() {
  const answer = prompt("🧩 What's 12 ÷ 3 + 4?");
  if (parseInt(answer) === 8) {
    alert("🎉 Correct! Puzzle 4 passed.");
    document.getElementById("puzzle5").classList.remove("hidden");
  } else {
    alert("❌ Hmm... Try again.");
  }
}

function solveRiddle5() {
  const answer = prompt("🧩 What's 5 × 5 - 10?");
  
  if (parseInt(answer) === 15) {
    alert("🎉  Correct! Puzzle 5 passed.");
    document.getElementById("puzzle6").classList.remove("hidden");
  } else {
    alert("❌ Try again.");
  }
}

function solveRiddle6() {
  const answer = prompt("🧩 I'm tall when I'm young and short when I'm old. What am I?");
  if (answer.trim().toLowerCase() === "candle") {
    alert("🏆 You completed all puzzles! You're a true escape master! 🏆");
  } else {
    alert("❌ Hmm... Try again.");
  }
}
