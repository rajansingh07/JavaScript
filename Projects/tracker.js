let budget = 1000;
let expense = [];

function addExpense(name, amount, category){
    let newExpense = {
        name: name,
        amount: amount,
        category: category
    }

    expense.push(newExpense);
}

function removeExpense(name, amount, category){
    let index = expense.findIndex(item => item.name === "Breakfast");

    if(index !== -1){
        expense.splice(index, 1);
        console.log("Expense is Removed");
    } else {
        console.log("Expense not found!");
    }
}

function calculateTotal(){
    let total = 0;
    
    for(let iteam of expense){
        total += iteam.amount
    }
}

function showExpense() {
    console.log(`All Expense: ${expense}`);
    console.log(`Total Spend: ${cal}`);
    
    
}

removeExpense("Breakfast", 300, "Food")
addExpense("Lunch", 100, "Food")
addExpense("Breakfast", 300, "Food")
console.log(expense);
