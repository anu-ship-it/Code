// Here we a doing all methods of array

// Push and length
const fruits = [];
fruits.push('Mango', 'Blueberry', 'Apple', 'Peach', 'Pineapple');
console.log(fruits);
console.log(fruits.length);


// Can Update anything anywhere

fruits[6] = 'Grapes';
console.log(fruits[6]);
console.log(Object.keys(fruits));

// Increase the length of array without adding any element

fruits.length[10];
console.log(fruits);
console.log(fruits[8]);


// reverse
fruits.reverse();

// forEach (there are various things we can do with this method by this method we can access the both key and value)

fruits.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

// Concat it is used to add two array
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
console.log(array1.concat(array2));


// copyWithin basically this method works on index number does not seems important

const v = [1, 2, 3, 4, 5];
console.log(v.copyWithin(1, 2, 3)); // output [ 1, 3, 3, 4,5 ]

// fillter it created a shallow copy of that particular array according to given conditions by user 

const words = ['spary', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); // [ 'exuberant', 'destruction', 'present' ]

// flat it create a new array like a array if the previous array have vaious sub array in that array

const aar1 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(aar1.flat()); //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]

console.log(aar1.flat(Infinity));//[
//   1, 2, 3, 4,
//   5, 6, 7
// ]

// flatmap() it is bascially used with callbackfunction

// What is callbackfunction = it basically goes to each element of array and then return to u, then its your wish what you have to do with that value
// so basically we can use forEach in two way
//forEach(callbackFn)
//forEach(callbackFn, thisArg)
// We have to always go to net to know about this

// indexof is basically tells the index of that particular element and its also checks weather that element is present in that array

const beast = ['ants', 'bison', 'camel', 'duck', 'bison'];
console.log(beast.indexOf('camel')); // 2

// map it created a new array after implemting the callbackfunction by user


// There is more in the map it is very usefull

const a1 = [1, 4, 9, 11, 15];
const mapped = a1.map((x) => x * 2);
console.log(mapped); // [ 2, 8, 18, 22, 30 ]

// Reduce 
// It also works on callbackfn but in this there are very conditons like acc, cuv, and index so it bascially start from the index 0 or what ever user gives an then store that value in acc, then purformes the funtion and stores in cuv and it goings on till the loop ends.
// Yaa it is bit complilcated we have to mdn always to understand this

const array = [1, 2, 3, 4];

const sum = array.reduce((acc, curr) => acc + curr);

console.log(sum); // 10

const doubled = array.reduce((accumlator, currentValue) => {
    accumlator.push(currentValue * 2);
    return accumlator;
}, []); // this is the initialValue

console.log(doubled); // [ 2, 4, 6, 8 ]


// Exp of another reduce count even and odd numbers

const number = [1,2,3,4,5,6,7,8];

const res = number.reduce((acc, cur) => {
    if ( cur % 2 === 0 ) {
        acc.even.push(cur);
    } else {
        acc.odd.push(cur);
    }
    return acc;
}, { even: [], odd: [] }); // this is the initialValue

console.log(res); // { even: [ 2, 4, 6, 8 ], odd: [ 1, 3, 5, 7 ] }

// reduceRight it works similar just a little change it starts woking from right to left, all other concepts are same


// reverse it simple just change the order like flip the array the last element becomes the first and soo one


//array = [1,2,3,4];
const reversed = array.reverse();
console.log(`Reversed array: ${reversed}`); //Reversed array: 4,3,2,1


// slice it cut array and create shallow copy in which user wants. like start point and end point.


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(3));//[ 'duck', 'elephant' ]

// some it works on boolean method it just want to return true if it finds the element in array and its just need one true element to run

const a = [1,2,3,4,5];
let even = (element) => element % 2 === 0;
console.log(a.some(even)); // true


// sort it just done the ascending of the array
let b = [2,7,1,3,4];
b.sort();
console.log(b); // [ 1, 2, 3, 4, 7 ]


// slice it add or remove the element in array without givining us new array

const mon = ['jan', 'feb', ' apr'];
mon.splice(2,0,'mar');
console.log(mon); //[ 'jan', 'feb', 'mar', ' apr' ]


//---------- Here we have used all properties of array....\\


//----------CallBack Function-------------\\


// It is function which works according to the caller execution. it is responsible for doing a particular task and it returns that particular task to the caller .
// Its likes will give a task to it and it will do all the work and return the result to us.

let nu = [1,2,3];
 nu.forEach(function(num) {
    console.log(num*2);
 });
 //2
 //4
 //6

 // Simple words 
 // CallBackFn = A function passed into another function.
 // It runs later, when the outer function decides.

 // There are two types of callBackfn 
 //Synchronous Callback
 // it runs immediately, at the moment of function

 function processArray(arr, callback) {
    for(let i = 0; i< arr.length; i++) {
        callback(arr[i]); //  executed immediately for each element
    }
 }

 processArray([1,2,3], function(num) {
    console.log(num * 2);
 });

 //2
 //4
 //6

 // Asynchronous Callback
 // Its usually runs after some time/event is finished.
 // mostely used in timer, API calls or user actions

console.log('Start');

setTimeout(function() {
    console.log('This is async (runs later)');
}, 2000);  // callback runs after 2 secounds

console.log('End');
// Output
//Start
// End
// This is async (runs later)