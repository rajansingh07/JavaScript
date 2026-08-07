// +++++++++++++++++++++++++++++++++++++ Arrays +++++++++++++++++++++++++++++++++++++++++++++++++

const arr = [0, 1, 2, 3, 4];
console.log(arr); // Prints the original array

// arr.push(8); // Adds 8 to the end of the array
// arr.pop(); // Removes the last element from the array

console.log(arr); // Prints the array after push/pop

// console.log(arr.slice(1, 3));
// Returns a new copy of array that containing elements from index 1 to index 2.
// The ending index (3) is not included.
// The original array remains unchanged.

// console.log(arr.splice(1, 3));
// Removes 3 elements starting from index 1.
// Returns the removed elements.
// The original array is modified.

console.log(arr); // Prints the array after splice

// const myarr = [9, 10, 11, 12, 54];

// const new_arr = arr.concat(myarr);
// concat() combines two arrays and returns a new array.
// It does not modify the original arrays.

// console.log(new_arr);

// const another_arr = [...arr, ...myarr, ...new_arr];
// The spread operator (...) combines multiple arrays into one new array.

// console.log(another_arr);

const multi_array = [
  10,
  30,
  40,
  50,
  [90, 80, 60, 36],
  120,
  [590, 420, 320, 220, 120],
];

console.log(multi_array);

// flat() removes one level of nested arrays by default.
const single_array = multi_array.flat();
// console.log(single_array);

const Name = ["Rajan", "Singh"];
console.log(Name);

// Array.of() creates a new array from the given arguments.
// console.log(Array.of(Name));

// Array.from() creates a new array from an iterable or array-like object.
// console.log(Array.from("Rajan"));
