// Dates & Time

// Create current date and time
let myDate = new Date();

console.log(myDate.toString());      // Full readable date string
console.log(myDate.toDateString());  // Only date part (no time)
console.log(typeof myDate);          // object → Date is an object

console.log(myDate.toISOString());   // Standard ISO format (used in APIs)
console.log(myDate.toJSON());        // Same as ISO (used in JSON data)

// Creating specific date

// Syntax: new Date(year, monthIndex, day, hour, minute)
// Month starts from 0 (0 = Jan, 11 = Dec)
let newDate = new Date(2026, 0, 13, 23, 3);

console.log(newDate.toLocaleString());
// Output depends on system locale (human readable format)

// Date from string format

let mydates = new Date("2026-01-02");

console.log(mydates.toLocaleString());

// Timestamps (very important in backend systems)

// Current timestamp in milliseconds since 1970 (Unix epoch)
let myTimeStamps = Date.now();

console.log(myTimeStamps); // milliseconds

// Convert to seconds (used in APIs, tokens, JWT, etc.)
console.log(Math.floor(Date.now() / 1000));

// Convert a specific date into timestamp
console.log(mydates.getTime());

// Date methods (useful parts)

console.log(mydates.getDay()); 
// 0 = Sunday, 1 = Monday ... 6 = Saturday