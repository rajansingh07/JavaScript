let lang = ['Javascript', 'c++', 'python']

lang.forEach((item) => {
    console.log(item.toUpperCase());
})

let book = [
    {
        name: 'JavaScript Beginner', Publish: 2021, Edition: 2023
    },
    {
        name: 'JavaScript Advance', Publish: 2015, Edition: 2026
    }
]

book.forEach((item) => {
    console.log(`Book: ${item.name} and Publish: ${item.Publish}`);
})

let myArr = [10, 30, 40, 50, 60, 70, 90]

let Multiply = myArr.map((item) => item * 5)
console.log(Multiply);


let bkName = book.map((item) => item.name)
console.log(bkName);

myArr.filter((item) => {
    if(item % 2 == 0){
        console.log(item);
    }
})


let Twenty = book.filter((item) => {
    return item.Publish >= 2000
})

console.log(Twenty);

let num = [5, 10, 15, 20]

let sum = num.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(sum);


let nums = [10, 25, 45, 50, 65, 80]

let chain = nums.filter((item) => item >= 40).map((item) => item * 2)
console.log(chain);

let books = [
  { name: "JavaScript", publish: 2021 },
  { name: "Python", publish: 2005 },
  { name: "React", publish: 2018 },
  { name: "C++", publish: 2000 }
];

console.log(books.filter((bk) => bk.publish >= 2010));


let products = [
  { name: "Mouse", price: 300 },
  { name: "Keyboard", price: 700 },
  { name: "Monitor", price: 500 },
  { name: "USB Cable", price: 150 }
];

let cartTotal = products.filter((bk) => bk.price >= 500).reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(cartTotal);
