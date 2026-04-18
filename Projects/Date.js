// Problem Based on Date and Time!

// # Digital Clock

// setInterval(function() {
// let now = new Date();
// let h = now.getHours();
// let m = now.getMinutes();
// let s = now.getSeconds();

// if(h < 10) h = "0" + h;
// if(m < 10) m = "0" + m;
// if(s < 10) s = "0" + s;

// console.log(`${h}:${m}:${s}`);
// }, 1000)

// # Age Calculator
// const prompt = require("prompt-sync")();
// let Day = prompt(`Enter your Day : `);
// let Month = prompt(`Enter your Month : `);
// let Year = prompt(`Enter your year: `)
// let BirthDate= new Date(Year, Month -1, Day);
// let Today = new Date();
// let age = Today.getFullYear() - BirthDate.getFullYear();
// let m = Today.getMonth() - BirthDate.getMonth();
// if(m < 0 || (m === 0 && Today.getDate() - BirthDate.getDate())) {
//     age --;
// }
// console.log(`Your age is : ` + age);

//# Timer
let time = 10;
let timer = setInterval(() => {
  console.log(time);
  time--;
  if (time === 0) {
    clearInterval(timer);
    console.log(`Times Up!`);
  }
}, 1000);
