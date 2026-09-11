// 1. Create an array of 5 numbers and print the array.

const arr1 = [10, 20, 30, 40, 50]

for(let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i])
}

// 2. Print the first element of the array.

// console.log(arr1[0])

// 3. Print the last element of the array.

// console.log(arr1[4])

// 4. Print the length of the array.

// console.log(arr1.length)

// 5. Change the second element to 100.

arr1[1] = 100


for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i])
}

// 6. Add a new element at the end of the array.

arr1.push(7)

for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i])
}

// 7. Remove the last element.

arr1.pop()

for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i])
}

// 8. Add a new element at the beginning.

// arr1.unshift(100)

for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i])
}


// 9. Remove the first element.

// arr1.shift()

for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i])
}


// 10. Check whether the array contains the number 50.

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === 50){
        // console.log(`It contains the number ${arr1[i]}`)
    }
}

// 11. Find the index of the number 50.

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === 50){
        // console.log(`Index of the number ${arr1[i]} is ${arr1.indexOf(50)}`)
    }
}

// 12. Find the sum of all numbers in the array.

let sum = 0;

for(let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i]
}

// console.log(sum);


// 13. Find the largest number in the array.

let large = arr1[0]

for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] > large) {
        large = arr1[i]
    }
}

// console.log(large)

// 14. Find the smallest number in the array.

 let small = arr1[0];

 for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] < small){
        small = arr1[i]
    }
 }

//  console.log(small)


 // 15. Count how many even numbers are present

 let count = 0;

for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] % 2 === 0){
         count++;
    }
 }

 console.log(count)