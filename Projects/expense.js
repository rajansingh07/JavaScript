let expense = [
    { education: 0, grocery: 1000, mobile: 0, personal: 100 }
]

function total(expense) {
    let sum = 0;
    for (let i = 0; i < expense.length; i++) {
        let values = Object.values(expense[i]);

        for (let j = 0; j < values.length; j++) {
            sum = sum + values[j];
        }
    }
    return sum;
}

function addExpense(iteam, amount) {
    expense[0][iteam] = expense[0][iteam] + amount;
}

function reduceEpense(iteam, amount) {
    expense[0][iteam] = expense[0][iteam] - amount;
}

function addIteam(iteam, amount) {
    expense[0][iteam] = amount;
}

addIteam("Pencil", 1000);
reduceEpense("grocery", 500);
addExpense('grocery', 50);
console.log(`Total expense is: ${total(expense)}`);
console.log(expense);
