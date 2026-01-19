const prompt = require('prompt-sync')();
let n=Math.floor(Math.random()*100)
let m=prompt("enter the nuber")
let c=0
while(m!=n){
  if(m>n){
    m=prompt("enter lesser number")
    c++
  }
  if(m<n){
    m=prompt("enter greater number")
    c++
  }
}
console.log("your score is "+(100-c))