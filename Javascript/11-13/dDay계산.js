const completionDate = new Date("2025/03/24/18:00:00");
const currentDate = new Date();

const now = currentDate.getTime();
const dDay = completionDate.getTime();

const remainingDays = Math.round((dDay - now) / (1000 * 60 * 60 * 24));
console.log(remainingDays);

document.querySelector("#calc").innerText = remainingDays;
