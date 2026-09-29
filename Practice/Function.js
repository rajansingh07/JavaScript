function rajan(name){
    console.log(name);
}

// rajan("Rajan Singh");

function square(number){
    let sqrt = number * number;
    console.log(sqrt);
}

square(5);

function OddEven(num){
    if(num % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

OddEven(5);

function Bigger(a, b){
    if(a > b){
        console.log("A is bigger");
    } else if (a < b){
        console.log("B is bigger");
    } else if (a === b){
        console.log("Both are equal");
    } else {
        console.log("Invalid input");
    }
}

Bigger(8,7);

function Sum(params) {
    let sumArray = [10, 20, 30, 40];
    let sum = 0;
    for(let i = 0; i < sumArray.length; i++){
        sum = sum + sumArray[i]
    }
    console.log(sum);
}

Sum();

function CountEV(params) {
    
}