(function name() {
    console.log("Hello");
})();

// Age check!
const adlt = (function adult(age) {
    return age >= 18 ? "Adult" : "Minor"
})(20);

console.log(adlt);

// Odd Even Check!
const Num = (function check(num) {
    return num % 2 === 0 ? "Even" : "Odd"
})(10);

console.log(Num);

// Simple Intrest!
const sum = (function All(avg) {
    let num = [10, 20, 40];
    let sum = 0;
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
        count++;
    }
    return avg = sum / count;
})()

console.log(sum);

// Largest element

const largest = (function ele(arr){
    let large = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    return large;
})([10, 20, 30, 40, 50, 60, 70])

console.log(largest);
