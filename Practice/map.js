let coding = ['JS', 'C++', 'CPP', 'PHP', 'TS', 'PY']

let myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'rubby',
    py: 'python',
}

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

for (const key in coding) {
    console.log(coding[key]);
}

let map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('TH', 'Thailand')
map.set('Fr', 'France')

for (const key in map) {
    // console.log(key); Not print output because it is not itretable!
}

coding.forEach((item) => {
    console.log(`Programing Langauages : ${item}`);
})

map.forEach((items) => {
    console.log(`Map item : ${items}`);
})

function printMe(item) {
    console.log(item);

}

coding.forEach(printMe)


let Mycoding = [
    {
        langaugeName: 'JavaScript',
        langaugeFileName: 'Js'
    },
    {
        langaugeName: 'C++',
        langaugeFileName: 'Cpp'
    },
    {
        langaugeName: 'Python',
        langaugeFileName: 'Py'
    },
]

Mycoding.forEach((item) => {
    console.log(item.langaugeName);
})


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mynum = numbers.filter((num) => {
    return num > 4
})
console.log(mynum);

let newnums = []
mynum.forEach((num) => {
    if (num > 4) {
        newnums.push(num)
    }
})

console.log(newnums);

const books = [
    {
        name: "The Alchemist", genre: "Fiction", publish: 1988, edition: "First Edition"
    },
    {
        name: "Atomic Habits", genre: "Self-help", publish: 2018, edition: "First Edition"
    },
    {
        name: "Rich Dad Poor Dad", genre: "Personal Finance", publish: 1997, edition: "First Edition"
    },
    {
        name: "The Great Gatsby", genre: "Classic Fiction", publish: 1925, edition: "First Edition"
    },
    {
        name: "Wings of Fire", genre: "Autobiography", publish: 1999, edition: "Second Edition"
    }
];

// console.log(books);


let userbook = books.filter((book) => book.genre === 'Fiction')
// console.log(userbook);

let pubYear = books.filter((bk) => bk.publish >= '2018')
// console.log(pubYear);

let edition = books.filter((book) => book.edition === 'First Edition')
console.log(edition);


let nums = [1, 2, 4, 6, 8, 10]

let newNums = nums.map((num) => num + 10)
console.log(newNums);

let MyNums = [10, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]

let nNums = MyNums.map((num) => num - 2)
console.log(nNums);


let givenNums = nums
    .map((num) => num * 10)
    .map((num) => num + 10)
    .filter((num) => num >= 50)

console.log(givenNums);

let arr = [1, 2, 3, 10]
const initialVal = 0;
let sumNum = arr.reduce((acc, currVal) => {
    console.log(`acc ${acc} and CurrVal: ${currVal}`);
    return acc + currVal
}, 0)

console.log(sumNum);

const myTotal = MyNums.reduce((acc, curr) => { 
    console.log(`accumulator ${acc} and currentVal ${curr}`);
    return acc + curr 
}, 0)
console.log(myTotal);


let course = [
    {
        itemName: 'Data Science Course',
        price: 1999
    }, 
    {
        itemName: 'Web Dev',
        price: 999
    },
    {
        itemName: 'App Dev',
        price: 2999
    }
]

let priceToPay = course.reduce((acc, item) => acc + item.price, 0);
console.log(`Price to pay: ${priceToPay}`);
