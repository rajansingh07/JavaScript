const myNums = [1, 2, 3]

// Using normal function 

const myTotal = myNums.reduce( function (accumulator, currentValues) {
    // console.log(`accumulator ${accumulator} and currentVal ${currentValues}`)
    return accumulator + currentValues
}, 0)

// console.log(myTotal)

// Using aero function 

const initialvalue = 0;
const Total = myNums.reduce( (accumulator, currentValues) => accumulator + currentValues, initialvalue)
// console.log(Total)

const shopingcart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'Mobile course',
        price: 1999
    },
    {
        itemName: 'data course',
        price: 2999
    }
]

const cartPrice = shopingcart.reduce( (accumulator, item) => accumulator + item.price, 0)
// console.log(cartPrice)


const nums = [5, 10, 15, 20, 25]

const sumAll = nums.reduce( (accumulator, num) => accumulator + num, 0)
// console.log(sumAll)

const mixNums = [2, 3, 4, 5]

const multiNums = mixNums.reduce( (accumulator, num) => accumulator * num, 0)
// console.log(multiNums)

const prices = [100, 250, 50, 300]

const totalPrice = prices.reduce( (accumulator, prices) => accumulator + prices, 0)
// console.log(totalPrice)

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const evenNum = arr.reduce( (accumulator, num) => {
    if(num % 2 === 0){
       accumulator = accumulator + num
    }
    return accumulator
}, 0)

// console.log(evenNum)

const cart = [
    { item: "Mouse", price: 500 },
    { item: "Keyboard", price: 1000 },
    { item: "USB", price: 300 },
    { item: "Monitor", price: 5000 }
]

const cartTotal = cart.reduce( (accumulator, item) => accumulator + item.price, 0)
// console.log(cartTotal)

const smallCart = [
    { item: "Mouse", quantity: 2 },
    { item: "Keyboard", quantity: 1 },
    { item: "USB", quantity: 3 },
    { item: "Monitor", quantity: 1 }
]

const quantity = smallCart.reduce( (accumulator, item) => accumulator + item.quantity, 0)
// console.log(quantity)

const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 1200 },
    { name: "USB", price: 200 }
]

const expensive = products
                .filter( (item) => item.price > 500) 
                .reduce( (accumulator, item) => accumulator + item.price, 0 )
// console.log(`Total price is ${expensive}`)

const employees = [
    { name: "Rajan", salary: 25000, active: true },
    { name: "Aman", salary: 30000, active: false },
    { name: "Rahul", salary: 40000, active: true },
    { name: "Vikas", salary: 35000, active: false }
]

const activeEmployees = employees
                        .filter( (employee) => employee.active == true)
                        .reduce( (accumulator, employee) => accumulator + employee.salary, 0)
// console.log(`Employees total salaries is ${activeEmployees}`)

const largeNums = [12, 45, 7, 89, 23, 56]

// For Largest Number

const largestNumber = largeNums.reduce( (accumulator, number) => {
    if(number > accumulator){
        accumulator = number
    }
    return accumulator
}, 0)

// console.log(largestNumber)


// For samllest number
const smallestNumber = largeNums.reduce( (accumulator, number) => {
    if(number < accumulator){
        accumulator = number
    }
    return accumulator
})

// console.log(smallestNumber)

