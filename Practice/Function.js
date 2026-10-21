function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Rajan");

function calculateTotal(a, b) {
    return a + b;
}

console.log(`Total : ${calculateTotal(100, 200)}`);

function voting(age) {
    if (age < 18) {
        return "Not eligible to vote ";
    } else {
        return "Eligible to vote";
    }
}

console.log(voting(18));


function grades(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    } else if (marks < 35) {
        return "Grade F";
    } else if (marks < 50) {
        return "Grade C";
    } else if (marks <= 65) {
        return "Grade B";
    } else if (marks <= 80) {
        return "Grade B+";
    } else if (marks <= 90) {
        return "Grade A";
    } else {
        return "Grade A+";
    }
}

console.log(grades(51));


function calculateDiscount(price) {
    if (price < 0) {
        return "Invalid Price!"
    } else if (price <= 1000) {
        return price;
    } else if (price <= 5000) {
        return price - (price * 10 / 100);
    } else if (price <= 9999) {
        return price - (price * 12 / 100);
    } else if (price === 10000 || price > 10000) {
        return price - (price * 15 / 100)
    } else {
        return "Invalid Price!"
    }
}

console.log(calculateDiscount(10400));


function calDiscount() {
    let product = {
        name: "Mouse",
        price: 1000,
        color: "Black",
        discount: 5
    }

    let finalPrice = product.price - (product.price * product.discount / 100)
    console.log(finalPrice);
}

calDiscount()

function productDiscount(products) {
    let finalPrice = products.price - (products.price * products.discount / 100)
    return finalPrice;
}

let mouse = {
    name: "Mouse",
    price: 1500,
    discount: 2
};

let keyboard = {
    name: "Keyboard",
    price: 2000,
    discount: 10
};

console.log(productDiscount(mouse));

function productBill(products) {
    let discountAmount = products.price * products.discount / 100;
    let finalPrice = products.price - discountAmount;

    console.log(`Product: ${products.name}`);
    console.log(`Orginal Price: ${products.price}`);
    console.log(`Discount: ${products.discount}%`);
    console.log(`Discount Amount: ${discountAmount}`);
    console.log(`Final Price: ${finalPrice}`);
}

let laptop = {
    name: "Laptop",
    price: 50000,
    color: "Black",
    discount: 2
}

let printer = {
    name: "Printer",
    price: 5000,
    color: "Black",
    discount: 5
}


productBill(laptop)


// Shopping Cart Total

let cart = [
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 },
    { name: "USB Cable", price: 500, quantity: 3 }
];

function calTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        let productTotal = products[i].price * products[i].quantity;
        total = total + productTotal;
    }
    return total
}

console.log(`Total sum of cart: ${calTotal(cart)}`);

function cartInvoice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        let perIteam = products[i].price * products[i].quantity
        console.log(`${products[i].name}: ${perIteam}`);
        total = total + perIteam
    }
    console.log(`-------------------------`);
    return `Grand Total ${total}`
}

console.log(cartInvoice(cart));

let carts = [
    { name: "Mouse", price: 1000, quantity: 2, discount: 5 },
    { name: "Keyboard", price: 2000, quantity: 1, discount: 10 },
    { name: "USB Cable", price: 500, quantity: 3, discount: 0 }
];

function discountCart(products) {
    let fPrice = 0
    let discountPrice = 0
    for (let i = 0; i < products.length; i++) {
        let subtotal = products[i].price * products[i].quantity;
        let discountAmount = subtotal * products[i].discount / 100;
        let fiPrice = subtotal - discountAmount;
        fPrice = fPrice + fiPrice
        discountPrice = discountPrice + discountAmount

    }
    console.log(`Amount of discount ${discountPrice}`)
    return fPrice
}

console.log(discountCart(carts));


function completeCart(products) {
    let total = 0;
    let discountedAmount = 0;
    for (let i = 0; i < products.length; i++) {
        let AllTotal = products[i].price * products[i].quantity;
        let discountAmount = AllTotal * products[i].discount / 100;
        let finalPrice = AllTotal - discountAmount;
        discountedAmount = discountedAmount + discountAmount
        total = total + finalPrice;
        console.log("Products --- Subtotal --- Discount --- Final Price");
        console.log(`${products[i].name}: ----- ${AllTotal} ------- ${discountAmount} ------- ${total}`);
    }
    console.log('---------------------------');
    console.log(discountedAmount);
    console.log(`Grand Total ${total}`);
    return total
}

completeCart(carts)