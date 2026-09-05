// const coding = ["js", "rb", "py", "java", "c++"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values)


const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = Nums.filter( (num) => num > 4)

// console.log(newNums)


const newNums = Nums.filter( (num) => {
    return num > 4
})

// console.log(newNums)

const newNum = []

Nums.forEach( (numbers) => {
    if(numbers > 4) {
        newNum.push(numbers)
    }
})

// console.log(newNum)

const books = [
    {title: 'Book One', genre: 'History', publish: 1986,
        edition: 2004},
    {title: 'Book Two', genre: 'History', publish: 1949,
        edition: 2004},
    {title: 'Book Three', genre: 'Frition', publish: 1989,
        edition: 2004},
    {title: 'Book Four', genre: 'Non-Friction', publish: 2008,
        edition: 2017},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === 'Non-Friction')


console.log(userBooks)