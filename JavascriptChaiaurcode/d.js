// Question for where prompt is used 
const prompt = require('prompt-sync')();
let age = prompt("Enter the value of age")
if (age > 10 && age < 20){
    console.log("Your age lies between 10 and 20")
} 
else{
    console.log("Your age doesn't lies between 10 and 20")
}
