const usersEmail = false 

if (userEmail) {
    console.log("I got the user email")
} else {
    console.log("Not got the user email")
}

// Falsy values

// false, 0,  -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// [], "0", 'false', " " ,{}, function(){},

const userEmail = "Rajan.com"

// if (userEmail) {
//     console.log("I got the user email")
// } else {
//     console.log("Not got the user email")
// }

// Falsy values

// false, 0,  -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// [], "0", 'false', " " ,{}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }


// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)

// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80")  : console.log("grater than 80")

