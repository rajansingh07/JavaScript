// Problem based on array

// Find maximum value in a array

// let arr = [10, 50, 20, 80, 30];

// let max = arr[0];

// for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
// }
// console.log(max);

// Find minimum value in array

// let num = [5, 2, 9, 1];
// let min = num[0];
// for(let i = 1; i < Array.length; i++){
//     if(num[i] > min){
//         min = num[i];
//     }
// }
// console.log(min);

// Reverse an Array

// let Num2 = [1, 2, 3, 4];
// console.log(Num2.reverse());

// Count Even numbers

// let MixNum = [1, 2, 3, 4, 6];
// let Count = 0;
// for(let i = 1; i < MixNum.length; i++) {
//     if(MixNum[i] % 2 === 0) {
//         Count++;
//     }
// }

// console.log(Count);

// Sum of Array

// let AnotherVal = [1, 2, 3, 4];
// let sum = 0;
// for(let i = 0; i < AnotherVal.length; i++) {
//     sum = sum + AnotherVal[i];
// }

// console.log(sum);

// Remove Duplicates
let dupli = [1, 2, 2, 3, 4, 4];
let unique = [];
for(let i = 0; i < dupli.length; i++) {
    if(!unique.includes(dupli[i])) {
        unique.push(dupli[i]);
    }
}
console.log(unique);
