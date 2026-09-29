// Feature to build
// add student
// mark in 5 subject

// calculate 
// total marks  - Done
// percentage 
// grade

// Search by roll
// show "Roll number is not fund" if there is no match
// find high scoring student
// show pass or fail status  - Done
// calculate class avg

let student = [
    { name: "Rajan Kumar", roll: 1, english: 65, hindi: 70, math: 60, science: 78, socialscience: 67 },
    { name: "Sagar Kumar", roll: 2, english: 60, hindi: 75, math: 65, science: 80, socialscience: 70 },
    { name: "Rishab Kumar", roll: 3, english: 50, hindi: 80, math: 40, science: 78, socialscience: 70 },
    { name: "Rajiv Kumar", roll: 4, english: 85, hindi: 90, math: 50, science: 98, socialscience: 79 },
    { name: "Ranjay Kumar", roll: 5, english: 95, hindi: 70, math: 60, science: 68, socialscience: 86 },
    { name: "Raj Kumar", roll: 6, english: 40, hindi: 30, math: 20, science: 38, socialscience: 37 }
];

let isPass = 35;
let maximumNum = 500;

function result(roll) {
    let user = student.find(student => student.roll === roll);

    if (!user) {
        return "Roll number is not found";
    }

    if (
        user.english >= isPass &&
        user.math >= isPass &&
        user.hindi >= isPass &&
        user.science >= isPass &&
        user.socialscience >= isPass
    ) {
        return `Pass`;
    } else {
        return ` Fail`;
    }
}

function totalMarks(roll) {
    let user = student.find(student => student.roll === roll);

    if (!user) {
        return 0;
    }

    let total =
        user.english +
        user.hindi +
        user.math +
        user.science +
        user.socialscience;

    return total;
}

function percentage(roll) {
    let total = totalMarks(roll);

    if (total === 0) {
        return 0;
    }

    return (total / maximumNum) * 100;
}

function grade(roll) {
    let percent = percentage(roll);

    if (percent >= 90) {
        return "A+";
    } else if (percent >= 80) {
        return "A";
    } else if (percent >= 70) {
        return "B+";
    } else if (percent >= 60) {
        return "B";
    } else if (percent >= 50) {
        return "C";
    } else if (percent >= 35) {
        return "D";
    } else {
        return "F";
    }
}

function showResult(roll) {
    let user = student.find(student => student.roll === roll);

    if (!user) {
        console.log("Roll number is not found!");
        return;
    }

    let total = totalMarks(roll);
    let percent = percentage(roll);
    let studentGrade = grade(roll);
    let status = result(roll);

    console.log(`Student Name   : ${user.name}`);
    console.log(`Student Roll   : ${user.roll}`);
    console.log(`Total Marks    : ${total}/${maximumNum}`);
    console.log(`Percentage     : ${percent}%`);
    console.log(`Student Grade  : ${studentGrade}`);
    console.log(`Student Status : ${status}`);
}

showResult(2);