// Prompt user to enter end time
let userEndTime = prompt("Enter end date and time (e.g., 2025-12-31 23:59):");

// Convert to timestamp
const endDate = new Date(userEndTime).getTime();
const startDate = new Date().getTime();

// Check for valid input
if (isNaN(endDate) || endDate <= startDate) {
    alert("Invalid date/time. Please reload and enter a future time.");
} else {
    let x = setInterval(function updateTimer() {
        const now = new Date().getTime();
        const distanceCovered = now - startDate;
        const distancePending = endDate - now;

        if (distancePending < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "⏰ EXPIRED";
            document.getElementById("Progress-bar").style.width = "100%";
            return;
        }

        const days = Math.floor(distancePending / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distancePending % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distancePending % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distancePending % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        const totalDuration = endDate - startDate;
        const percentage = (distanceCovered / totalDuration) * 100;
        document.getElementById("Progress-bar").style.width = percentage + "%";

    }, 1000);
}
