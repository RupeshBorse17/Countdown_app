
const endDate = new Date("14 feb,2025 01:12:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){

    const now = new Date().getTime();

    const distancecovered = now - startDate;
    const distancePending = endDate - now;

    // calculate time

    const days = Math.floor(distancePending / (24*60*60*1000));
    const hours = Math.floor((distancePending % (24*60*60*1000) / (60*60*1000)));
    const minutes = Math.floor((distancePending % (60*60*1000) /(60*1000) ));
    const secs = Math.floor((distancePending % (60*1000) / (1000)));


    // populate in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = secs;

    const totaldistance = endDate - startDate;

    const percentagedistance = (distancecovered / totaldistance)*100;

    document.getElementById("Progress-bar").style.width = percentagedistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("Progress-bar").style.width = "100%";
    }

}, 1000);

