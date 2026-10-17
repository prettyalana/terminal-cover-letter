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
