// const newElement = document.createElement("h2")
// newElement.textContent = "Hello, User";
// newElement.style.color ='green'


// console.log(newElement);
// let element = document.getElementById('first');
// element.after(newElement)

// const login = document.createElement('p')
// login.textContent = "User loggedin succesfully"
// login.id = "third"
// login.className = "logInfo"
// // login.className += " User" // dont use this to provide two classname
// login.classList.add('user')
// login.classList.remove('user')
// console.log(login);
// login.style.fontSize = '30px'
// newElement.after(login)

// // list

// let list = document.createElement('li');
// list.textContent = "Milk";
// const list2 = document.createElement('li');
// list2.textContent = "Cake";
// const list3 = document.createElement('li');
// list3.textContent = "Halwa";
// const list4 = document.createElement('li');
// list4.textContent = "Paneer";

// const UnList = document.getElementById('listing')
// UnList.append(list, list2);
// UnList.prepend(list3);
// list.after(list4);


const arr = ["Milk", "Halwa", "Tea", "Cake"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();


for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unorderElement.append(fragment);


const head = document.getElementById("first")
head.remove()

const month = document.getElementById("ten")
console.log(month.childNodes);

