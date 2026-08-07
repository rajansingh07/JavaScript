// +++++++++++++++++++++++++ Date & Time +++++++++++++++++++++++++

// Create a custom date
let date = new Date(2025, 3, 23, 12, 5, 10);
// Syntax: new Date(year, month, day, hour, minute, second)
// Note: Month starts from 0 (0 = January, 3 = April)

console.log(date);                  // Complete Date object
console.log(date.toString());       // Local date & time
console.log(date.toISOString());    // UTC date & time (ISO format)
console.log(date.toDateString());   // Date only
console.log(date.toTimeString());   // Time only

// +++++++++++++++++++++++++ Timestamp +++++++++++++++++++++++++

let myStamp = Date.now();

console.log(myStamp);                     // Current timestamp in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Convert milliseconds into seconds

// +++++++++++++++++++++++++ Locale Methods +++++++++++++++++++++++++

console.log(
  date.toLocaleString("default", {
    weekday: "long",
  })
);
// Prints weekday name (e.g., Wednesday)

// Other useful options:
//
// day: "numeric"
// month: "long"
// month: "short"
// year: "numeric"
// hour: "2-digit"
// minute: "2-digit"
// second: "2-digit"
//
// Example:
//
// date.toLocaleString("default", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric"
// });
//
// Output:
// Wednesday, 23 April 2025

// +++++++++++++++++++++++++ Most Used Methods +++++++++++++++++++++++++

// date.getDate();          // Day of month (1-31)
// date.getDay();           // Day of week (0-6)
// date.getMonth();         // Month (0-11)
// date.getFullYear();      // Year
//
// date.getHours();         // Hours
// date.getMinutes();       // Minutes
// date.getSeconds();       // Seconds
// date.getMilliseconds();  // Milliseconds

// +++++++++++++++++++++++++ Important Notes +++++++++++++++++++++++++

// getMonth() starts from 0
// 0 = January
// 1 = February
// ...
// 11 = December

// getDay()
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday

// 1000 milliseconds = 1 second
// 60 seconds = 1 minute
// 60 minutes = 1 hour
// 24 hours = 1 day
// 1 day = 86,400,000 milliseconds