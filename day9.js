// OBJECTS 


// 1. Object Creation

// Object Literal (Most Used)
let user = {
    name: "Rajan",
    age: 21
};

// Constructor Method
const tinderuser = new Object();
tinderuser.id = "123";
tinderuser.name = "Rahul";


// 2. Symbol as Key

const mySym = Symbol("key1");

let userWithSymbol = {
    name: "Rajan",
    [mySym]: "secretValue"
};

// Access Symbol
console.log(userWithSymbol[mySym]);


// 3. Object Mutation & Freeze

user.email = "abc@gmail.com"; // mutate

Object.freeze(user); // lock object
user.email = "new@gmail.com"; // ❌ ignored


// 4. Accessing Values

console.log(user.name);        // Dot notation
console.log(user["email"]);    // Bracket notation


// 5. Functions in Object

user.greeting = function () {
    console.log(`Hello ${this.name}`);
};

user.greeting(); // this refers to object


// 6. Nested Objects

let regularuser = {
    email: "some@gmail.com",
    fullName: {
        username: {
            firstname: "rajan",
            lastname: "singh"
        }
    }
};

// Access
console.log(regularuser.fullName.username.firstname);

// Safe access
console.log(regularuser?.fullName?.username?.firstname);


// 7. Object Merging

let obj1 = {1: "a", 2: "b", 3: "c"};
let obj2 = {3: "d", 4: "e"};
let obj3 = {5: "f"};

// Mutates obj1
let obj4 = Object.assign(obj1, obj2);

// Safe way
let obj5 = Object.assign({}, obj1, obj2, obj3);

// Modern (Best)
let obj6 = {...obj1, ...obj2, ...obj3};

// 8. Array of Objects

let users = [
    { id: 1, email: "r@gmail.com" }
];

// Access
console.log(users[0].email);


// 9. Object Methods

console.log(Object.keys(tinderuser));   // ["id", "name"]
console.log(Object.values(tinderuser)); // ["123", "Rahul"]
console.log(Object.entries(tinderuser));// [["id","123"],["name","Rahul"]]

console.log(tinderuser.hasOwnProperty("name")); // true


// 10. Destructuring

const course = {
    coursename: "React",
    price: "199",
    intstructer: "Rahul"
};
// Extract
const { intstructer } = course;
console.log(intstructer);

// Extract + Rename
const { intstructer: trainer } = course;

console.log(trainer);


// 11. Function Parameter Destructuring

const navbar = ({ company }) => {
    console.log(company);
};

// Correct call
navbar({ company: "Techno" });

// Default value
const navbar2 = ({ company = "Default Company" }) => {
    console.log(company);
};

navbar2({});


// 12. Empty Objects Array

let arr = [
    {},
    {}
];

// 🔥 IMPORTANT CONCEPTS

// Objects are Reference Types

let a = { name: "Rajan" };
let b = a;

b.name = "Rahul";

console.log(a.name); // Rahul (same reference)


// Object Comparison

console.log({} === {}); // false (different memory)


// Shallow Copy

let original = {
    name: "Rajan",
    address: {
        city: "Bhopal"
    }
};

let copy = { ...original };

copy.address.city = "Indore";

console.log(original.address.city); // Indore (shared reference)