// ==============================
// Object Literals
// ==============================

const mySym = "Key1";

const details = {
    name: "Rajan",
    "full name": "Rajan Kumar",
    [mySym]: "MyKey1",
    id: 1,
    age: 22,
    email: "rajan@scratchly.app",
    location: "Bhopal",
};

// ==============================
// Accessing Object Properties
// ==============================

// Dot notation
console.log(details.name);

// Bracket notation
console.log(details["age"]);

// Property with spaces
console.log(details["full name"]);

// Computed property
console.log(details[mySym]);

// ==============================
// Freeze Object
// ==============================

// Object.freeze(details);

// ==============================
// Adding Methods
// ==============================

details.greetings = function () {
    console.log("Hello JS User");
};

details.greetingsTwo = function () {
    console.log(`Hello JS User, ${this["full name"]}`);
};

details.greetings();
details.greetingsTwo();

// ==============================
// Singleton vs Non-Singleton Objects
// ==============================

// Non-singleton object
const user = {
    name: "Rajan Kumar Singh",
    id: "1",
    email: "rajan@gmail.com",
    location: "Bhopal",
    isLoggedIn: false,
};

console.log(user.name);

// Singleton object
const myKey = "Key";

const userDetails = new Object();

userDetails.name = "Rajan Singh";
userDetails[myKey] = "Key1";

console.log(userDetails.name);
console.log(userDetails[myKey]);

// ==============================
// Merging Objects
// ==============================

const data = {
    1: "a",
    2: "b",
    3: "a",
    4: "b",
};

const data1 = {
    1: "A",
    2: "B",
    5: "C",
};

// Using Object.assign()
const merged1 = Object.assign({}, data, data1);
console.log(merged1);

// Using Spread Operator
const merged2 = { ...data, ...data1 };
console.log(merged2);

// ==============================
// Object Destructuring
// ==============================

const course = {
    courseName: "JS Hindi",
    price: 999,
    courseInstructor: "Rj",
};

// 1. Destructure a single property
const { courseInstructor } = course;
console.log(courseInstructor);

// 2. Rename a property while destructuring
const { courseInstructor: instructor } = course;
console.log(instructor);

// 3. Destructure multiple properties
const { courseName, price } = course;
console.log(courseName);
console.log(price);

// 4. Default value (property doesn't exist)
const { website = "YouTube" } = course;
console.log(website);

// 5. Rename with default value
const { website: youtube = "YouTube" } = course;
console.log(youtube);