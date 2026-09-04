// Higher Order Loop

// for of loop

const arr = [1, 2, 3, 4, 5, 6]

// for(const iterator of object) { 
// }

for(const num of arr) {
    // console.log(num)
}

const greetings = "Hello Rajan"

for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps

// Maps is a object that hold key-value pairs. It is uniques values

const map = new Map()

map.set("IN", "INDIA")
map.set("TH", "THAILAND")
map.set("NP", "NEPAL")

// console.log(map)

for (const [key, value] of map){
    // console.log(key, ':-', value)
}

const myGame = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myGame){
//     console.log(key, ':-', value)
// }                         
            // It is not work for objects


//  For-in loop

for (const key in myGame){
    // console.log(`${key} is ${myGame[key]}`)
}    

const programing = ["js", "rb", "py", "java", "cpp"]

for(const key in programing){
    // console.log(`${key} for ${programing[key]}`);
}

// For-of loop is not work on map becuase it is not iteratable


// ForEach Loop

const coding = ["js", "rb", "py", "java", "c++"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item)
} )

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )