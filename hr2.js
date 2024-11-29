// script.js

let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

const timeDisplay = document.getElementById("timeDisplay");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

// Update the stopwatch display
function updateTimeDisplay() {
  const hoursDisplay = hours < 10 ? "0" + hours : hours;
  const minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
  const secondsDisplay = seconds < 10 ? "0" + seconds : seconds;
  timeDisplay.textContent = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

// Start or stop the stopwatch
function toggleStartStop() {
  if (running) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateTimeDisplay();
    }, 1000);
    startStopBtn.textContent = "Stop";
  }
  running = !running;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimeDisplay();
  startStopBtn.textContent = "Start";
}

// Record a lap time
function recordLap() {
  if (running) {
    const lapTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}

// Event listeners
startStopBtn.addEventListener("click", toggleStartStop);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);
