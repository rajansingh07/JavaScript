// Create a student object and update its details
let student = {
    name: "Rajan",
    age: 22,
    course: "B.Tech",
    isGraduated: false
}

student.age = 23
student.course = "JavaScript"
student.city = "Bihar"

// console.log(`Student name is ${student.name}`);
// console.log(`Student age: ${student.age}`);
// console.log(`Enrolled in course: ${student.course}`);
// console.log(`Student from ${student.city}`);


// Create a mobile object and delete a property
const mobile = {
    brand: "Samsung",
    model: "S25 Ultra",
    price: 81000,
    color: "black"
}

delete mobile.color
// console.log(mobile);


// Calculate the total amount in a cart
let cart = {
    education: 500,
    grocery: 1200,
    mobile: 349
}

let sum = 0
let cartValues = Object.values(cart)

for (let i = 0; i < cartValues.length; i++) {
    sum = sum + cartValues[i]
}

// console.log(sum);


// Calculate employee net salary after bonus and deduction
let employee = {
    name: "Aman",
    salary: 25000,
    bonus: 5000,
    deduction: 2000
}

employee.department = "Development";
// delete employee.bonus;

let netSalary = employee.bonus + employee.salary - employee.deduction
// console.log(`Net salary after deduction: ${netSalary}`);


// Display product names and prices using object methods
let catalog = {
    laptop: 45000,
    mouse: 500,
    keyboard: 1200
}

// console.log(`Name of products: ${Object.keys(catalog)}`);
// console.log(`Price of products: ${Object.values(catalog)}`);
// console.log(Object.entries(catalog));

let catalogPrices = Object.values(catalog)
let catalogNames = Object.keys(catalog)

for (let i = 0; i < catalogPrices.length; i++) {
    // console.log(`${catalogNames[i]}: ${catalogPrices[i]}`);
}


// Count the total properties in an object
let users = {
    name: "Rajan",
    age: 22,
    city: "Bihar",
    role: "Developer",
    active: true
};

let userProperties = Object.keys(users)
let propertyCount = 0

for (let i = 0; i < userProperties.length; i++) {
    propertyCount++;
}

// console.log(`Property count: ${propertyCount}`);
// console.log("role" in users);
// console.log("salary" in users);
// console.log(Object.hasOwn(users, "Salary"));
// console.log(Object.hasOwn(users, "age"));
// console.log(Object.hasOwn(users, "role"));


// Display products whose price is above a given amount
let products = {
    laptop: 45000,
    mouse: 500,
    keyboard: 1200,
    monitor: 12000,
    headphones: 2500
};

let productNames = Object.keys(products);
let productPrices = Object.values(products);

for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] > 2000) {
        // console.log(`${productNames[i]}: ${productPrices[i]}`);
    }
}


// Find the student with the highest score
let scores = {
    Rajan: 85,
    Aman: 92,
    Priya: 78,
    Rahul: 96,
    Neha: 89
};

let studentNames = Object.keys(scores);
let studentScores = Object.values(scores);

let topStudent = "";
let highestScore = 0;

for (let i = 0; i < studentNames.length; i++) {
    if (studentScores[i] > highestScore) {
        highestScore = studentScores[i];
        topStudent = studentNames[i];
    }
}

console.log(`${topStudent}: ${highestScore}`);


// Calculate the average score of all students
let numberOfStudents = studentScores.length
let totalScore = 0

for (let i = 0; i < studentScores.length; i++) {
    totalScore = studentScores[i] + totalScore;
}

let averageScore = totalScore / numberOfStudents;

console.log(`Average score: ${averageScore}`);


// Access and update values in a nested object
let user = {
    name: "Rajan",
    age: 22,
    address: {
        city: "Patna",
        state: "Bihar",
        pin: 800001
    }
}

console.log(`Last city: ${user.address.city}`);
user.address.city = "Jaipur";
console.log(`Current city: ${user.address.city}`);
user.address.country = "India";
console.log(user.address.country);
console.log(user.address);


// Store and update skills in an array inside an object
let student = {
    name: "Rajan",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript"]
}

student.skills.push("React")
console.log(student.skills[2]);
student.age = 23
console.log(student.age);

let skills = student.skills

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}


//Create and Manage a shopping cart with an array of objects
let shoppingCart = {
    customer: "Rajan",
    items: [
        { name: "Keyboard", price: 1200 },
        { name: "Mouse", price: 500 },
        { name: "Headphones", price: 2500 }
    ]
};

console.log(`Customer name: ${shoppingCart.customer}`);
console.log(`First item name: ${shoppingCart.items[0].name}`);


// Calculate the total price of shopping cart items
let cartItems = shoppingCart.items;
let totalPrice = 0;

for (let i = 0; i < cartItems.length; i++) {
    totalPrice = totalPrice + cartItems[i].price;
}

console.log(`Total price: ${totalPrice}`);


// Find the most expensive item and filter products by price
let highestItemPrice = 0;
let mostExpensiveItem = "";
let filterPrice = 1000;

for (let i = 0; i < shoppingCart.items.length; i++) {
    if (shoppingCart.items[i].price > highestItemPrice) {
        highestItemPrice = shoppingCart.items[i].price;
        mostExpensiveItem = shoppingCart.items[i].name;
    };

    if (shoppingCart.items[i].price > filterPrice) {
        console.log(`Products above ${filterPrice}: ${shoppingCart.items[i].name} - ${shoppingCart.items[i].price}`)
    }
}

console.log(`Most expensive item: ${mostExpensiveItem} - ${highestItemPrice}`);


// Calculate cart total, discount, and final price
let bucket = {
    mobileCharger: 1000,
    recharge: 3000,
    grocery: 1000
}

bucket.grocery = 1500
let bucketItems = Object.values(bucket)
let amount = 0

for (let i = 0; i < bucketItems.length; i++) {
    amount = amount + bucketItems[i]
}

console.log(`Total without discount: ${amount}`);

let discount = 0;

if (amount < 3000) {
    discount = 0;
} else if (amount < 5000) {
    discount = amount * 10 / 100;
} else {
    discount = amount * 15 / 100;
}

let finalPrice = amount - discount;

console.log(`Discount amount: ${discount}`);
console.log(`Final amount: ${finalPrice}`);


// Check inventory stock status for each product
let inventory = {
    Laptop: 5,
    Mouse: 12,
    Keyboard: 0,
    Monitor: 3
};

let stock = Object.values(inventory);
let inventoryNames = Object.keys(inventory);

for (let i = 0; i < stock.length; i++) {
    if (stock[i] === 0) {
        console.log(`${inventoryNames[i]}: Out of stock`);
    } else if (stock[i] <= 5) {
        console.log(`${inventoryNames[i]}: Low stock`);
    } else {
        console.log(`${inventoryNames[i]}: In stock`);
    }
}
