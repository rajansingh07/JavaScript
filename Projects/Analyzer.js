// Original: Hello Rajan, I am learning JavaScript!
// Characters: 38
// Characters without spaces: 32
// Words: 6
// Vowels: 11
// Consonants: 19
// Spaces: 7

// Uppercase: HELLO RAJAN, I AM LEARNING JAVASCRIPT!
// Lowercase: hello rajan, i am learning javascript!

// First character: H
// Last character: !

// Clean sentence:
// Hello Rajan, I am learning JavaScript!

let sentance = "Hello Rajan, I am learning JavaScript!";
let count = 0;
let vowelCount = 0;
let vowel = "aeiou";
let consonantsCount = 0;
let consonants = "bcdfghjlmnpqrstvwxyz"
let spacesCount = 0;

for(let i = 0; i < sentance.length; i++){
    if(sentance[i] !== " "){
        count++
    }

    let char = sentance[i].toLocaleLowerCase();
    if(vowel.includes(char)){
        vowelCount++;
    }

    if(consonants.includes(char)){
        consonantsCount++;
    }

    if(sentance[i] === " "){
        spacesCount++;
    }
}

let wordCount = sentance.trim() === "" ? 0 : sentance.trim().split(/\s+/).length;
console.log(`Given sentances is : ${sentance}`);

console.log(`Characters count is : ${sentance.length}`);
console.log(`Characters count without spaces is : ${count}`);
console.log(`Word count is : ${wordCount}`);
console.log(`Vowel count is : ${vowelCount}`);
console.log(`Consonents count is : ${consonantsCount}`);
console.log(`Spaces count is : ${spacesCount}`);
console.log(`First word is : ${sentance[0]}`);
console.log(`Last word is : ${sentance[sentance.length - 1]}`);
console.log(`Capital form : ${sentance.toLocaleUpperCase()}`);
console.log(`Smaller form : ${sentance.toLocaleLowerCase()}`);




