// 1. Create an object with name, age, and city, then print the object.

let user = {
    name: "Rajan",
    age: 18,
    city: "Bhopal",
    email: "rajan@google.com"
}

// console.log(user)

// console.log(user.name)

// console.log(user.age)

// console.log(user.city)

// console.log(user["name"])

user.age = 22

// console.log(user["age"])

user.city = "SV"

// console.log(user["city"])

user.IsDeveloper = true;

// console.log(user["IsDeveloper"])

delete user.email

// console.log(user["email"])

// console.log(user.hasOwnProperty("email"))

// console.log("name" in user)


// ########## 2. Use a for...in loop to print all keys. 


for(keys in user){
    // console.log(keys)
}

//  3. Print all keys & values 
for(keys in user){
    // console.log(keys + " : " + user[keys])
}

// 4. Count how many properties the object has using a loop. 

let count = 0;

for(keys in user){
    count++;
}

// console.log(`It contains property is ${count}`)

// 5. Find whether any property has the value "Developer". 

let Owned = user.hasOwnProperty("Developer")
// console.log(Owned)

// 6. Print only the string values from the object.

for(keys in  user){
   if(typeof user[keys] === "string"){
    //  console.log(user[keys])
   }
}

// 7. Print only the number values from the object.

for(keys in user){
    if(typeof user[keys] === "number") {
        // console.log(user[keys])
    }
}