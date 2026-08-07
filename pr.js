// +++++++++++++++++++++++++ Numbers & Maths Practice ++++++++++++++++++++++++++
max = 100;
min = 50;
const num = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Random is ${num}`);

// +++++++++++++++++++++++++ Four Digit Otp Generator ++++++++++++++++++++++++

maximum = 9999;
minimum = 1000;
const otp = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
console.log(`Your four digit otp is ${otp}`);

// +++++++++++++++++++++++++++++++++ Dice Roller +++++++++++++++++++

const dice = Math.floor(Math.random() * 6 + 1);
console.log(`Generated number is ${dice}`)

// +++++++++++++++++++++++++++++++++++ Password generator ++++++++++++++++
const char =   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const passLength = 8;
let passoword = "";
for(let i = 0; i < passLength; i++){
    const randomIndex = Math.floor(Math.random() * char.length);
    passoword += char[randomIndex];
}
console.log(`Generated Password is ${passoword}`)

// ++++++++++++++++++++++++++++++++++++++++ Date & Time +++++++++++++++++++++
// Digital clock
// setInterval ( function (){
// let Clock = new Date()
// let hours = Clock.getHours();
// let minutes = Clock.getMinutes();
// let seconds = Clock.getSeconds();
// console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// Current Date Display

let current = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[current.getDay()];
let date = current.getDate();
let month = months[current.getMonth()];
let year = current.getFullYear();
console.log(`${day}`);
console.log(`${date} ${month} ${year}`);

// Age Calulator

const Dob = new Date (2004, 3, 30);
const today = new Date();
let age = today.getFullYear() - Dob.getFullYear();
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const birthDate = Dob.getDate();
const birthMonth = Dob.getMonth();
if (
  currentMonth < birthMonth ||
  (currentMonth === birthMonth && currentDate < birthDate)
) {
  age--;
}

console.log(`Age ${age} Years`);

// Birthday Counter

const dob = new Date (2004, 3, 30);
let nextBithday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate()
)

if(nextBithday < today) {
    nextBithday.setFullYear(today.getFullYear() + 1);
}

const difference = nextBithday - today;

const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
console.log(`${daysLeft} days left until your birthday!`);
