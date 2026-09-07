const nums = [2, 5, 8, 1, 9, 4, 10, 3]

const myNums = nums.filter( (num) => num > 5)

// console.log(myNums)

const filNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const flNums = filNums.filter( (num) => {
    return num % 2 == 0
})

// console.log(flNums)

const addNum = [10, 20, 30, 40]

const addingNum = addNum.map( (num) => num + 5)

// console.log(addingNum)

const mlNums = [2, 4, 6, 8]

const MultiNum = mlNums.map( (num) => num * 3)

// console.log(MultiNum)

const ForNums = [1, 2, 3, 4, 5]

const TwoNum = ForNums.forEach( (num) => {
    // console.log(num * 2)
})


const books = [
    { title: "Book One", genre: "History", publish: 1986 },
    { title: "Book Two", genre: "Science", publish: 2001 },
    { title: "Book Three", genre: "History", publish: 2010 },
    { title: "Book Four", genre: "Fiction", publish: 2020 }
]

const newBook = books.filter( (bk) => bk.genre == 'History')

// console.log(newBook)


const chainNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Nums = chainNums.map( (nums) => nums * 5)
                    .map( (nums) => nums + 2)
                    .filter( (nums) => nums > 20)

// console.log(Nums)


const users = [
    { name: "Rajan", age: 21, active: true },
    { name: "Aman", age: 17, active: true },
    { name: "Rahul", age: 25, active: false },
    { name: "Vikas", age: 22, active: true },
    { name: "Neeraj", age: 16, active: false }
]


const userName = users.filter( (user) => user.age > 18 && user.active === true)

console.log(userName)