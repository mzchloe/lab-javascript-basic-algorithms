console.log("I'm ready1");
// Iteration 1: Names and Input

//1.1
let hacker1 = "Ben"
 
//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
let hacker2 = "Jerry"

//1.4
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } 
  
  if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } 
  
  if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
// Iteration 3: Loops

//3.1

let driverName = '';

for (let characters of hacker1) {
  
  driverName += `${characters.toUpperCase()} `
}

console.log(driverName)

//3.2
let reversed = '';

for (let character of hacker2){
  
  reversed = character + reversed;
}

console.log(reversed)

//3.3
if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`);
  } else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.');
  } else console.log('What?! You both have the same name?');
  




