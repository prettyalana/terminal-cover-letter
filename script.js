function displayDateTime() {
  const currentDateTime = new Date();
  const shortDayName = currentDateTime.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const formattedDate = currentDateTime.toLocaleString([], {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("date-time").innerHTML =
    shortDayName + " " + formattedDate;
}

displayDateTime();

// Update the clock every 1 second (1000ms)
setInterval(displayDateTime, 1000);

// Attach input event listener to input

const input = document.getElementById("terminal-input");
const displayText = document.getElementById("input-text");
const terminalContent = document.getElementById("terminal-content");
const outputArea = document.getElementById("output-area");
input.addEventListener("input", function (event) {
  displayText.textContent = input.value;
});
terminalContent.addEventListener("click", function (event) {
  input.focus({ preventScroll: true });
});
window.onload = function () {
  input.focus({ preventScroll: true });
};

// Attach submit listener to input-field form
const form = document.getElementById("input-field");

form.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    
});