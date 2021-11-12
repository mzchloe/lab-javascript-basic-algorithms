// Iteration 1: Names and Input

let hacker1 = "Ben"


console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jerry"

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



let driverName = '';

for (let letter of hacker1) {
  
  driverName += `${letter.toUpperCase()} `
}

console.log(driverName)


console.log("I'm ready1");




