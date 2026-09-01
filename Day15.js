// Control flow 

// if 
const isUserloggedIn = true
    const username = "Rajan"

// if (isUserloggedIn){
//     console.log(`Welcome ${username}, Back`)
// } else {
//     console.log(`Not loggeedin, plaese loggedin`)
// }

const balance = 600
// if (balance > 500) console.log(`Test`);  // Implecit scope

// if (balance < 300) {
//     console.log("less than 300")
// } else if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else {
//     console.log("Grater than 1000")
// }


const userLoggedIn = true
const debitCard = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allowed to buy phone")
// } else {
//     console.log("Not allowed to buy")
// }

const loggedInFromGoogle = true
const loggedInFromEmail = true

// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log("Allowed to buy course")
// }


// Switch Case

// switch (true) {
//     case value:

//     break;

//     default:
//         break;
// }

const month = 1

switch (month) {
    case 1:
        console.log("January")
    break;
    case 2:
        console.log("Feb")
    break;
    case 3:
        console.log("March")
    break;
    case 4:
        console.log("April")
    break;
    case 5:
        console.log("May")
    break;
    case 6:
        console.log("June")
    break;
    case 6:
        console.log("June")
    break;
    case 7:
        console.log("July")
    break;
    case 8:
        console.log("Aug")
    break;
    case 9:
        console.log("Sept")
    break;
    case 10:
        console.log("Oct")
    break;
    case 11:
        console.log("Nov")
    break;
    case 12:
        console.log("Dec")
    break;

    default:
        console.log("Invalid month")
        break;
}
