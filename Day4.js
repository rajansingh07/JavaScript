// ***************************************************************** String ***************************************************************\\

let name = "Rajan"
let repoCount = 50

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Rajan')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.endsWith('a'));
console.log(gameName.startsWith('R'));
console.log(gameName.indexOf("R"));
console.log(gameName.replace(`R`,`Bh`));
console.log(gameName.substring(0,4));

let newName = "     Rajan kumar     "
console.log(newName.trim());
console.log(newName.includes("Rajan"));
console.log(gameName.split('a'));
console.log(newName.lastIndexOf("m"));
console.log(newName.substr(4,10));


