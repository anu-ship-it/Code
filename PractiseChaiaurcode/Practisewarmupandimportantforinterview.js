// yai ek important concept hai

//1
Function.prototype.describe = function(){
    console.log(`Function name is${this.name}`);
};
// isme humlogo nai function ke prototype mai ek aur property add ki h.
//Note: yai hum nai Function pr ki h yai function kuch bhi hota sakta h jo bhi isko call kar gaya 
// kyu yaha kisi particular function pr nhi laga tha 
// pr isme yai jo this.name h yai bata deta h ki yai ki function ka hai


function greet(name){
    return `Hello ${name}`;  // yai confuse karne ke liye likha gya tha
}

greet.describe(); // Output => Function name is greet


//2
// yaha bas tech jargan mai batna h yaikya h

function add(a, b){
    return a+b
}
// function decleration


const substract = function(a, b){
    return a-b
}
// Function Expression


const multiply = (a, b) => a*b // Arrow Function


//3
// yaha function ka behaviour batna h

function applyOperation(a, b, operation){
    return operation(a, b)
}
// First class function = isme hum kuch bhi pass aur return kara sakte h use matter nhi h ki yo ek num, string ya function ka signature

// upper ek normal sa fucntion decelartion ha jo 3 parameter accept kar raha h aur wo ek function return kar rha h

const result = applyOperation(5, 4, (x, y) => x/y)

//aur operations mai function mai work karke ja 
// jese humne result mai 5,4 ko pass kiya h aur jo bhi result aaya ja wo usko result store karke humko return kar dai ja



//3
// behaivor batna h


// yaha work karye ja kyuki niche wala function ki properties aa to upper wala function sai hi rhi h na 
function createCounter(){
    let count = 0;
    return function (){
        count++;
        return count
    }
}
//console.log(count); error wahi value aaye ji pr refer nhi

const counter = createCounter()
console.log(counter());
 


function onef(){
    let myName = "Jack"
}
// yai hua kyuki myName ka koi scope nhi h kyu humne usko function ke andar decleration kiya h function jayab uska reference khtm it does not matter ki return h ya nhi
// humko value mil gye ji pr refer nhi aaya ja
console.log(myName); // Error : myName is not defined


//4
// yai hai kya aur kese work karta h
// yai h self calling function kyuki yaha to humnai isko kuch name nhi diya h 
//Emp = yai usually hmm isko tab karte jese hamra software start ho rha h aur start hote h database connect ho gye.
//kyuki humko database ko bas ek hi bar bulna hota h 
(function(){
    console.log('hitesh')
})()

//second way of for calling this function is ()()
