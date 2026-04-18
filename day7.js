// Arrays


// 🔹 Creating Arrays
const myArr = [1, 2, 4, 5, 6, 7];
// ➜ Creates an array with initial values

let newArr = [12, 13, 14, 16, 18, 20, 25];
// ➜ Another array used for operations like merge

// 🔹 Basic Array Methods

// Add / Remove (End)
myArr.push(8);     
// ➜ Adds element at the END of array
// ➜ Modifies original array
// ➜ Returns new length of array

myArr.pop();       
// ➜ Removes LAST element
// ➜ Modifies original array
// ➜ Returns removed element


// Add / Remove (Start)
myArr.unshift(0);  
// ➜ Adds element at the BEGINNING
// ➜ Shifts all elements to right
// ➜ Returns new length

myArr.shift();     
// ➜ Removes FIRST element
// ➜ Shifts remaining elements left
// ➜ Returns removed element


// Search
console.log(myArr.includes(1)); 
// ➜ Checks if value exists in array
// ➜ Returns true or false

console.log(myArr.indexOf(4));  
// ➜ Returns index of element
// ➜ If not found → returns -1

// 🔹 Convert Array to String

let str = myArr.join(); 
// ➜ Converts array into STRING
// ➜ Default separator is comma (,)
// ➜ Does NOT modify original array

console.log(str); // "1,2,4,5,6,7"

// Custom separator
console.log(myArr.join(" ")); 
// ➜ Joins using space → "1 2 4 5 6 7"

console.log(myArr.join("-")); 
// ➜ Joins using dash → "1-2-4-5-6-7"

// 🔹 Slice vs Splice

// slice() → Safe method
let sliced = myArr.slice(1, 3);
// ➜ Extracts elements from index 1 to 2
// ➜ End index NOT included
// ➜ Does NOT modify original array
// ➜ Returns new array

console.log("Slice:", sliced);
console.log("Original after slice:", myArr);


// splice() → Dangerous method
let spliced = myArr.splice(1, 3);
// ➜ Removes 3 elements starting from index 1
// ➜ Modifies ORIGINAL array permanently
// ➜ Returns removed elements

console.log("Splice:", spliced);
console.log("Original after splice:", myArr);

// 🔹 Merge Arrays

// Using concat()
let allArr = myArr.concat(newArr);
// ➜ Combines two arrays
// ➜ Does NOT modify original arrays
// ➜ Returns new array

console.log("Concat:", allArr);


// Using Spread Operator
let sumArr = [...myArr, ...newArr];
// ➜ Expands elements of arrays
// ➜ Cleaner and modern approach
// ➜ Works for multiple arrays

console.log("Spread:", sumArr);

// 🔹 Flatten Nested Arrays

const anotherArr = [1, 34, 56, [56, 70, 69, [112, 567, 789]], 67, 90, 89];

const realArr = anotherArr.flat(3);
// ➜ Flattens nested arrays into single array
// ➜ Depth = 3 means go 3 levels deep
// ➜ Does NOT modify original array

console.log("Flat:", realArr);

// 🔹 Array Utility Methods

// Check if value is array
console.log(Array.isArray("Rajan")); 
// ➜ Returns false (string is not array)


// Convert to array
console.log(Array.from("Rajan")); 
// ➜ Converts iterable (string) into array
// ➜ Output: ["R", "a", "j", "a", "n"]


// Important case
console.log(Array.from({ name: "Rajan" })); 
// ➜ Returns [] because object is NOT iterable
// ➜ Needs mapping function to work properly

// 🔹 Create Array from Values

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));
// ➜ Creates array from given values
// ➜ Unlike Array(), it avoids confusion

// Example difference:
// Array(3) → [empty × 3]
// Array.of(3) → [3]

// ⚡ Key Takeaways

// push/pop      → Add/remove from END (modifies array)
// shift/unshift → Add/remove from START (modifies array)
// includes      → Check existence (true/false)
// indexOf       → Find position (index)

// join          → Convert array → string
// slice         → Safe copy (no change)
// splice        → Modify original array

// concat        → Merge arrays (safe)
// spread (...)  → Modern merge Two or more Array

// flat          → Remove nesting if exist inside a array

// Array.from()  → Convert iterable → array
// Array.of()    → Create array from values