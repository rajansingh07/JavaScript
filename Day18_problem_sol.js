// // Print all numbers
// // const numbers = [10, 20, 30, 40, 50]
// for(const num in numbers){
//     // console.log(numbers[num]);
// }

// // Calculate the Sum

// // const number = [5, 10, 15, 20]
// let sum = 0;

// for(const num of number){
//     sum = sum + num;
// }

// // console.log(`Sum of all number is ${sum}`)


// // Find the largest number 

// // const num = [12, 45, 7, 89, 34, 23]

// let arr = num[0]

// for(const n of num){
//     if(n > arr){
//         arr = n;
//     }
// }

// console.log(arr)

// Count even number 

const evNum = [1, 2, 4, 7, 8, 11, 14, 19]

for (const even of evNum){
    if(even % 2 == 0){
        // console.log(even)
    }
}

// number larger than 4 char 
const languages = ["JS", "Python", "Java", "C", "TypeScript", "Go"]

for(const language of languages){
    if(language.length > 4){
        // console.log(language)
    }
}

// Count vowel

const word = "javascript";
let count = 0;
for(const vowel of word){
    if("aeiou".includes(vowel)){
        count++;
    }
}

// console.log(count);

const words = "programming"
const target = "m"
let counter = 0;
for(const char of words){
    if(char === target){
        counter++;
    }
}

// console.log(counter)