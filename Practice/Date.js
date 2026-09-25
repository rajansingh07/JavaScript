let date = new Date();

console.log(`Year : ${date.getFullYear()}`);
console.log(`Month : ${date.getMonth()}`);
console.log(`Date : ${date.getDate()}`);
console.log(`Day : ${date.getDay()}`);

let Month = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

console.log(`${date.getDate()} ${Month[date.getMonth()]} ${date.getFullYear()}`);

let day = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

console.log(`Today is ${day[date.getDay()]}`);

let custDate = new Date(1947, 7, 15);
console.log(`${custDate.getDate()} ${Month[custDate.getMonth()]} ${custDate.getFullYear()}`);

const pastDate = new Date(2026, 8, 1);
let presentDate = new Date();

console.log(pastDate.toLocaleString());
console.log(presentDate.toLocaleString());

let diffrence = presentDate - pastDate;
let Day = Math.floor(diffrence / (1000 * 60 * 60 * 24));
console.log(`Total days are ${Day}`);

let newDate = new Date(2026, 11, 31);
let today = new Date();
let Diff = newDate - today;
let Upcoming = Math.floor(Diff / (1000 * 60 * 60 * 24));
console.log(`Total days remaining in 31 Dec 2026 : ${Upcoming} days`);

let comingDate = new Date();
comingDate.setDate(comingDate.getDate() + 30);
console.log(`After 30 days ${comingDate.toDateString()}`);

let p10 = new Date();
p10.setDate(p10.getDate() - 10);
console.log(`Date before 10 days from today ${p10.toDateString()}`);

function isWeekend(checkDate) {
  let d = checkDate.getDay();
  if (d === 0 || d === 6) {
    return "weekend";
  } else {
    return "weekday";
  }
}

let Tommorow = new Date(2026, 9, 28);
console.log(isWeekend(Tommorow));