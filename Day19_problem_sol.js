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

// console.log(userName)


const fullNums = [4, 12, 7, 20, 3, 15, 9, 25]

const gratestNum = fullNums.filter( (num) => num > 10)

// console.log(gratestNum);

const wholeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const oddNumber = wholeNums.filter( (num) => {
    return num % 2 != 0
})

// console.log(oddNumber)

const allUsers = [
  { name: "Rajan", age: 21 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
  { name: "Vikas", age: 16 }
]

const selectedUsers = allUsers.filter( (user) => user.age > 18)

// console.log(selectedUsers)

const fourNums = [5, 10, 15, 20]

const tenNums = fourNums.map( (num) => num + 10)

// console.log(tenNums)

const prices = [100, 200, 300, 400]

const productPrice = prices.map( (num) => num + 50)
// console.log(productPrice)


// Get only user name

const websiteUsers = [
  { name: "Rajan", age: 21 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 }
]

const userNames = websiteUsers.map( (user) => user.name)

// console.log(userNames)

const products = [
  { name: "Mouse", price: 300 },
  { name: "Keyboard", price: 800 },
  { name: "Monitor", price: 1200 },
  { name: "USB", price: 200 }
]

const productPricing = products.filter( (products) => products.price > 500)

// console.log(productPricing)

// Get username

const actUsers = [
  { name: "Rajan", active: true },
  { name: "Aman", active: false },
  { name: "Rahul", active: true },
  { name: "Vikas", active: false }
]

const activeUser = actUsers.filter( (user) => user.active)

// console.log(activeUser)

const chainingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const magNums = chainingNums.map( (num) => num * 2)
                    .map( (num) => num + 2)
                    .filter( (num) => num > 15)

// console.log(magNums)

const Wlusers = [
  { name: "Rajan", age: 21, active: true },
  { name: "Aman", age: 17, active: true },
  { name: "Rahul", age: 25, active: false },
  { name: "Vikas", age: 22, active: true }
]

const filterUser = Wlusers.filter( (user) => user.active && user.age > 18)

console.log(filterUser)