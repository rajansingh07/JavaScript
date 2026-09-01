// Loops

let n = 10;

for(let i = 0;  i <= n; i++) {
    // console.log(i)
}

let i = 2;

for(let j = 1; j <= 10; j++){
//    console.log(i + ' * ' + j + ' = ' + i * j )
}

let MyArray = [1, 2, 4, 5, 10, 2, 18, 20];

for (let i = 0; i < MyArray.length; i++) {
  const element = MyArray[i];
//   console.log(element);
}

// Nested loop

for (let i = 0; i < n; i++) {
  for (let i = 0; i < n; i++) {
    // console.log("*")
  }
//   console.log
}

// Break and continue
for(let i = 0; i <= 20; i++){
    if ( i == 5){
        console.log("Detected 5")
        // break;
        continue
    }
    console.log(`Value of i is ${i}`)
}