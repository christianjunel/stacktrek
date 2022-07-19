const d = new Date();
const dXmas = new Date("2022-12-25");
const msInOneDay = 1000 * 3600 * 24; //86,401,000 ms/day
const msDayDiff = Math.round((dXmas.getTime() - d.getTime()) / msInOneDay);
const daysLeft = document.getElementById("daysleft");
daysLeft.innerHTML = `Christmas\nIn ${msDayDiff} days`;