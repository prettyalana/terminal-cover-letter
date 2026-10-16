function displayTime() {
  const currentDateTime = new Date().toLocaleString([], {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
  document.getElementById("date-time").innerHTML = currentDateTime;
}

displayTime();

// Update the clock every 1 second (1000ms)
setInterval(displayTime, 1000);