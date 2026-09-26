// Non-singleton Object
let user = {
    name: "Rajan Kumar",
    age: 22,
    email: "rajan@gmail.com",
    contact: "9*********7",
    address: "Bhopal Madhya Pradesh, India"
}
console.log(user["name"]);
console.log(user.email);

// Singleton Object
let cart = new Object()
cart.name = "Fruit"
cart.price = 220
console.log(cart["price"]);

const mykey = "key1";

let student = {
    name: "Rajan",
    course: "B.Tech",
    age: 20,
    branch: "EX",
    year: "4th",
    roll_No: "0111EX231026",
    [mykey]: "Key1"
}

student.city = "Jaipur"
student.age = 22
student.city = "Bhopal"
console.log(student["age"]);
console.log(student["city"]);

let product = {
    name: "Mac M2",
    price: 70000,
    color: "Silver",
    stock: "10"
}

product.stock = product.stock - 3;
product.price = 75000
product.price -= 8000
console.log(`Stock Left : ${product["stock"]}`);
console.log(`Laptop Price : ${product.price}`);

let car = {
    name: "Thar",
    brand: "Mahindra",
    model: 2026,
    color: "Black",
    basePrice: 800000,
    rto: 200000,
    gst: 100000,
    quantity: 10
}

car.quantity = car.quantity - 2
console.log(`Available Car Quantity : ${car.quantity}`);

car.quantity--;
if (car.quantity < 5) {
    car.basePrice += 10000
    console.log(`Price increases when stock runs low!`);
} else if (car.quantity < 0) {
    console.log(`Due to high demand, the waiting period is long.`);

}

if (car.quantity < 0) {
    console.log(`Due to high demand, the waiting period is long.`);
} else if (car.quantity >= 0){
    car.basePrice += 500000
    let onRoad = car.basePrice + car.rto + car.gst
    console.log(`We have ${car.quantity} available, and each cost around ${onRoad}.`);
}












