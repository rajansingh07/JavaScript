// // ++++++++++++++++++++++++++++++++++ Age Calculator ++++++++++++++++++++++++++++++

// const dob = new Date (2004, 3, 30);
// let current = new Date();
// let age = current.getFullYear() - dob.getFullYear();
// let currentDate = current.getDate();
// let currentMonth = current.getMonth();
// const dobDate = dob.getDate();
// const dobMonth = dob.getMonth();

// if(currentMonth < dobMonth || (currentMonth === dobMonth && currentDate < dobDate)) {
//     age--;

// }

// console.log(`You are ${age} years old!`)

// +++++++++++++++++++++++++++++++++ Countdown Timer ++++++++++++++++++++++++++++++++++++++++++++++
// const timer = setInterval(function() {
//     const date = new Date();
//     let Seconds = date.getSeconds();
//     console.log(Seconds)
// }, 1000)

// setTimeout(function() {
//     clearInterval(timer);
//     console.log(`TimeUp`);
// }, 10000);

// +++++++++++++++++++++++++++++++++++++++++ Alarm +++++++++++++++++++++++++++++++++++++++++
const alarmHour = 17;
const alarmMinutes = 51;
const alarmSeconds = 25;

const timer = setInterval(function() {
const dates = new Date();
const hour = dates.getHours();
const min = dates.getMinutes();
const sec = dates.getSeconds();

console.log(`${hour}:${min}:${sec}`);

if(
    alarmHour === hour &&
    alarmMinutes === min &&
    alarmSeconds ===  sec
) {
    console.log(`Alarm time reach!`)
    clearInterval(timer);
}
}, 1000)