// Problem Solving

// console.log("Hello");

// Swap the values
let a = 5, b = 10;
[a, b] = [b, a];
// console.log(a, b);

// Check even or Odd

let num = 2;
// if(num % 2 === 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

let x = 3, y = 12, z = 9;
// console.log(Math.max(x,y,z))


let n = 2;

let isPrime = true;

if (n <= 1) {
    isPrime = false;
}

for (let i = 2; i < n; i++) {

    if (n % i === 0) {
        isPrime = false;
        break;
    }

}

console.log(isPrime ? "Prime" : "Not Prime");