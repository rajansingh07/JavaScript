// ***************************************************************** Stack & Heap Memory ***************************************************************\\

// # Stack Memory : // Stack memory store (primitive data type) gives a copy of the value.

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

// # Heap Memory : // Heap memory stores reference (non-primitive) data types and passes a reference to the original object, not copy.

let user = {
    id: 1,
    name: "user",
    age: 20,
    email: 'user@user.com'
}

let userTwo = user
userTwo.email = "rajan@gmail.com"; // user and userTwo reference the same object in heap memory, so the change is reflected in both.
console.log(user.email);
console.log(userTwo.email);
