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

// Appending lines
function appendNewPromptLine(text) {
  const promptLabel = document.createElement("code");
  promptLabel.textContent = document.querySelector(".input-title").textContent + " " + text;
  outputArea.append(promptLabel);
}

// Attach submit listener to input-field form
const form = document.querySelector(".input-field");

form.addEventListener("submit", function (event) {
  // Prevent page reload
  event.preventDefault();
  const inputValue = input.value.trim();
  const echo = document.getElementById("terminal-output");
  const path = "documents/Alana_Edwards_LeanTaaS_Cover_Letter.pdf";

  appendNewPromptLine(inputValue);
  input.value = "";
  displayText.textContent = "";

  if (inputValue.length === 0) {
    return
  } else if (inputValue === "cover-letter") {
    const coverLetter = document.createElement("a");
    coverLetter.href = path;
    coverLetter.id = "cover-letter-display";
    window.open(coverLetter, "_blank");
  } else if (inputValue === "clear") {
    input.value = "";
    displayText.textContent = "";
    outputArea.textContent = "";
  } else {
    const errorLine = document.createElement("code");
    errorLine.textContent = "command not found: " + inputValue;
    outputArea.append(errorLine);
  }
});
