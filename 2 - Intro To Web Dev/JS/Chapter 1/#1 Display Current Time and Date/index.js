const d = new Date();
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = document.getElementById("date");
date.innerHTML = `${d.toLocaleString("default",{month:"long"})} ${d.getDate()}`;
const day = document.getElementById("day");
day.innerHTML = dayArray[d.getDay()];
const time = document.getElementById("time");
time.innerHTML = d.toLocaleTimeString();

// document.getElementById("date").innerHTML = d.toLocaleString("default",{month:"long"}) + " " + d.getDate();
// document.getElementById("day").innerHTML = dayArray[d.getDay()];
// document.getElementById("time").innerHTML = d.toLocaleTimeString();

/*
    HEY!
*/