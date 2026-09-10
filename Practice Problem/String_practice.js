// 1. Create a string and print it.

const name = "Rajan";

// console.log(name)

// 2. Print the first character.

// console.log(name[0])

// 4. Find the length of the string.

// console.log(name.length)

// 5. Print every character using a for loop.

for (let i = 0; i < name.length; i++) {
  // console.log(name[i])
}

// 6. Count how many characters are in the string without using .length directly in the loop condition.

let count = 0;

for (let i = 0; i < name.length; i++) {
  count++;
}

// console.log(count)

// 7. Convert the string to uppercase.

// console.log(name.toUpperCase())

// 8. Convert the string to lowercase.

// console.log(name.toLowerCase())

// 9. Check whether the string contains "Script".

let newName = "JavaScript";

// console.log(newName.includes("Script"))

// 10. Find the index of "S".

for (let i = 0; i < newName.length; i++) {
  if (newName[i] === "S") {
    // console.log(`Index of S is ${[i]}`)
  }
}

// 11. Find the index of "a".

for (let i = 0; i < newName.length; i++) {
  if (newName[i] === "a") {
    // console.log(`Index of a is ${[i]}`)
  }
}

// 12. Print the first 4 characters.

// console.log(newName.slice(0, 4))

// 13. Print the last 3 characters.

// console.log(newName.slice(7, 10))

// 14. Check whether the string starts with "Java".

// console.log(newName.startsWith("Java"))

// 15. Check whether the string ends with "pt".

// console.log(newName.endsWith("pt"))

// 16. Count how many vowels are in the string.
let counter = 0;
for (let i = 0; i < newName.length; i++) {
  if ("a,e,i,o,u".includes(newName[i])) {
    counter++;
  }
}

console.log(counter);
