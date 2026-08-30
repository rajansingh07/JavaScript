// Immediate invoke Function Expression
// A function that is immediately executed after it is created is called an IIFE.

(function chai(){
    console.log("DB CONNECTED");
})(); // Named IIFE

// Global Scope pollution ko remove krne ke liye iife ka use krte hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Rajan') // Unnammed IIFE