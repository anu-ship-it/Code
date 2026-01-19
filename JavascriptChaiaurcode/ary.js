// Create an array of 5 fruits and print each fruit using a for loop.
let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant fruits'];
for(let i = 0; i < fruits.length;  i++){
   // console.log(fruits[i]);
}


// Add "grapes" at the end of an array using push()
fruits.push('grapes');
//console.log(fruits);

// Remove the last element of an array using pop().
fruits.pop();
//console.log(fruits);


// Add "orange" at the beginning of an array using unshift()
fruits.unshift('orange');
//console.log(fruits);

// Remove the first element of an array using shift()
fruits.shift();
//console.log(fruits);


// Find the index of "banana" in ["apple", "banana", "mango"].
let morefruits = ['apple', 'banana', 'mango'];
let index = morefruits.indexOf('banana');
//console.log(index);


// Check if "apple" exists in the array using includes()
let hasapple = morefruits.includes('apple');
//console.log(hasapple);


// Join ["I", "love", "JS"] into one string: "I love JS".
let words = ['I', 'Love', 'JS'];
let sentence = words.join(' ');
//console.log(sentence);


// Split "red,green,blue" into an array.

let colors = 'red,green,blue';
let colorsArray = colors.split(',');
//console.log(colorsArray);

// Copy only "cat" and "lion" from ["dog", "cat", "lion", "tiger"] using slice()

let animals = ['dog', 'cat', 'Lion', 'tiger'];
let bigcats = animals.slice(1,3);
//console.log(bigcats);


// Replace "lion" with "elephant" in ["dog", "cat", "lion", "tiger"] using splice()

animals.splice(2,1,'elephant');
//console.log(animals);

// Combine [1,2] and [3,4] into one array.
let arr1 = [1,2,3];
let arr2 = [3,4];
let Combine = arr1.concat(arr2);
//console.log(Combine);

// Print all numbers in [1,2,3,4,5] multiplied by 2 using forEach().
let numbers = [1,2,3,4,5];
numbers.forEach(num=>{
   //console.log(num * 2);
})


// Create a new array of squares from [1,2,3,4] using map().
let nums = [1,2,3,4];
let squares = nums.map(n => n * n);
//console.log(squares);

// Filter only even numbers from [1,2,3,4,5,6] using filter().
let mixednums = [1,2,3,4,5,6];
let evens = mixednums.filter(n => n % 2 === 0);
//console.log(evens);


// Find the sum of [5,10,15,20] using reduce()
let sumarr = [5,10,15,20];
let sum = sumarr.reduce((acc, curr) => acc + curr, 0);
//console.log(sum);


// Find the maximum number in [12, 45, 7, 99, 34] using reduce().
let numarr = [12,54,38,78,99,105];
let max = numarr.reduce((acc, curr) => (curr > acc ? curr : acc), numarr[0]);
//console.log(max);

//Count how many times each fruit appears in ["apple","mango","apple","banana","mango","apple"].
//👉 Expected: {apple:3, mango:2, banana:1}

let fruitscount = ['apple', 'mango', 'apple', 'banana', 'mango', 'apple'];
let fruitFrequency = fruitscount.reduce((acc, fruit) => { {
    acc[fruit] = (acc[fruit] || 0) + 1;
}
return acc;
}, {});
//console.log(fruitFrequency);

// Reverse an array [1,2,3,4] without using reverse() (hint: use a loop or reduce()).4
let arr = [1, 2, 3, 4];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

//console.log(reversed); 


//Given an array of cart items:

// let cart = [
//   { item: "Book", price: 200 },
//   { item: "Pen", price: 50 },
//   { item: "Bag", price: 500 }
// ];


//✅ Find the total price using reduce()
let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 500 }
];
let totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
//console.log(totalPrice);



// create a function that remove the unhealthy food (Burger) and return the updated array
function filterHealthy(foodList){
 // return foodList.filter(food => food !== 'Burger');
}


// create a function that finds the index of "phone" in the list of items and return the index

function findPhone(items){
  //return items.indexOf('phone');
}


// Create and function that  inserts the partners's name at the start  of the message and return the updated message
function insertPartnerName(message, Name){
   let words = message.split(' ');
   words.unshift(Name);
   return words.join(' ');

}
//console.log(insertPartnerName("is my best friend", "Alice")); 