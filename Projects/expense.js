let expense = [
    {
        education: {},
        grocery: {},
        mobile: {},
    }
]

function total(expense) {
    let sum = 0;

    for (let i = 0; i < expense.length; i++) {
        let category = Object.values(expense[i]);
        for (let j = 0; j < category.length; j++) {
            let product = Object.values(category[j]);
            for (let k = 0; k < product.length; k++) {
                sum = sum + product[k];
            }
        }
    }
    return sum;
}

function addExpense(name, amount, category) {
    if (expense[0][category] === undefined) {
        console.log("Category not found!");
        return;
    }

    expense[0][category][name] = amount;
}

function reduceEpense(name, amount, category) {
    if (expense[0][category] === undefined) {
        console.log("Category not found!");
        return;
    }

    if (expense[0][category][name] === undefined) {
        console.log("Product not found!");
        return;
    }

    expense[0][category][name] = expense[0][category][name] - amount;
}

function addIteam(name, amount, category) {
    if (expense[0][category] === undefined) {
        expense[0][category] = {};
    }

    expense[0][category][name] = amount;
}



addExpense("Pencil", 1000, "education");
addExpense("Notebook", 200, "education");
addExpense("Rice", 500, "grocery");
addIteam("Personal Loan", 10000, "loan");

reduceEpense("Rice", 100, "grocery");

console.log(`Total expense is: ${total(expense)}`);
console.log(expense);