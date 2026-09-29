const add = (a, b) => {
    let sum = a + b;
    return sum;
}

console.log(add(3, 5));


const eligiblity = (age, username) => {
    if (age >= 18) {
        return `${username}, you are eligible to vote!`;
    } else {
        return `${username}, you are not eligible to vote!`;
    }
}


console.log(eligiblity(13, "Rajan Kumar"));


// Student Result Chacker!

const students = [
    { name: "Rajan Kumar", roll: 2, marks: 300, grade: "A+" },
    { name: "Rajiv Ranjan", roll: 3, marks: 250, grade: "B" },
    { name: "Suman", roll: 5, marks: 298, grade: "B+" },
    { name: "Sagar Kumar", roll: 6, marks: 300, grade: "A+" },
]

const result = (roll) => {
    const student = students.find(student => student.roll === roll);

    if (student) {
        if (student.marks >= 175) {
            return `${student.name} is passed with ${student.marks} marks.`
        } else if (student.marks < 175) {
            return `${student.name} is fail with ${student.marks} marks.`
        } else {
            return `Data not found! Please contact with exam control`
        }
    }
}

console.log(result(6));


// Bank account!

let account = [
    { name: "Rajan", balance: 1000, type: "Saving" },
    { name: "Rajiv", balance: 5000, type: "Saving" },
    { name: "Sandeep", balance: 10000, type: "Saving" },
]

const rate = 5;

const  deposit = (name, amount) => {
    const user = account.find(account => account.name === name)
    if (user) {
        user.balance += amount;
        return `${user.name} deposited ${amount}. New balance: ${user.balance}`;
    } else {
        return `Account not found!`;
    }
}

const withdraw = (name, amount) => {
    const user = account.find(account => account.name === name);
    if (user) {
        user.balance -= amount;
        return `${user.name} withdraw ${amount}. New balance: ${user.balance}`;
    } else {
        return `Account not found`
    }
}

const checkBalance = (name, balance) => {
    const user = account.find(account => account.name === name);
    if (user) {
        return `${user.name} account balance is: ${user.balance}`;
    } else {
        return `Account not found`
    }
}

const intrest = (name, balance) => {
    const user = account.find(account => account.name === name);
    if (user) {
        let intrest = user.balance * rate / 100;
        user.balance += intrest
        return `${user.name} recevied ${intrest} intrest. New balance ${user.balance}`
    } else {
        return `Account not found`
    }


}

console.log(deposit("Rajan", 1000));
console.log(withdraw("Rajan", 50));
console.log(checkBalance("Rajan"));
console.log(intrest("Rajan"));
