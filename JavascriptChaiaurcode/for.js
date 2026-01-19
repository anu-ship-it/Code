// I will practice for loop here..

//Sum of First N Numbers
//Write a function sumOfN(n) that takes a number n and returns the sum of the first n natural numbers using a for loop.


function sumOfN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//console.log(sumOfN(5)); 

//Multiplication Table
//Write a function printTable(num) that prints the multiplication table of num up to 10 using a for loop.

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} *${i} = ${num * i}`);
    }
}

//printTable(5);


//Count Even Numbers
//Write a function countEvens(n) that returns how many even numbers are there from 1 to n.

function countEvens(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}

//console.log(countEvens(10));


//Factorial of a Number
//Write a function factorial(n) that returns the factorial of a given number using a for loop

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

//console.log(factorial(5));


//Reverse a String
//Write a function reverseString(str) that takes a string and returns its reverse using a for loop

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


//console.log(reverseString("hello"));

//Sum of Digits
//Write a function sumOfDigits(num) that takes a number and returns the sum of its digits using a for loop.

function sumOfDigits(num) {
    let sum = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}

//console.log(sumOfDigits(1234));


//Prime Numbers in Range
//Write a function printPrimes(n) that prints all prime numbers between 1 and n using nested for loops.

function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isprime = true;

        for (let div = 2; div < i; div++) {
            if (i % div === 0) {
                isprime = false;
                break;


            }
        }
        if (isprime) {
            console.log(i);
        }
    }
}


//printPrimes(20);


//Fibonacci Series
//Write a function fibonacci(n) that prints the first n terms of the Fibonacci sequence using a for loop.

function fibonacci(n) {
    let a = 0, b = 1, c = 2;
    console.log(a);
    console.log(b);
    console.log(c);
    for (let i = 3; i < n; i++) {
        let next = a + b + c;
        console.log(next);
        a = b;
        b = c;
        c = next;
    }

}


//fibonacci(10);

//Pattern Printing (Stars Triangle)
//Write a function printPattern(n) that prints a right-angled triangle of stars using a for loop.

function printPattern(n) {
    for (i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

//printPattern(5);



function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

//printPattern(5);


//The questions is create a function that take an array of water amount( in litres) for each bottle and add them up. the function should return the total amount of water you've filled in all bottle.

function totalWater(waterAmounts) {
    let a = 0;
    for (let i = 0; i < waterAmounts.length; i++) {
        a += waterAmounts[i];
    }
    return a;
}
//console.log(totalWater([1, 2, 3, 4, 5])); 

//create a funtion that uses a loop to count the number of steps during a workout. the loop should continue until you reach the tragetcount of steps.

function countSteps(targetCount) {
    let steps = 0;
    for (let i = 0; i < targetCount; i++) {
        steps++;
    }
    return steps;
}
//countEvens(200);
//trs= console.log(countSteps(200));


//Create a function that takes an array of days(eg[mon,tur,wed]) and return the return the number of days you're working."Sat and sun" are not working days.

function workingDays(days) {
    let td = 0;
    for (i = 0; i < days.length; i++) {
        if (days[i] !== "sat" && days[i] !== "sun") {

            td++;
        }

    }
    return td;
}

//workingDays(["mon","tue","wed","thu","fri","sat","sun"]);
//console.log(workingDays(["mon","tue","wed","thu","fri","sat","sun"]));


//Create a fun that takes an array of arrays(repsenting the numbers  of stars in each level) and return the total number of stars.


function totalStars(starLevels) {
    let count = 0;
    for (i = 0; i < starLevels.length; i++) {
        count += starLevels[i].length
    }
    return count;
}


//console.log(totalStars([[1,1,1],[1,1],[1]])); // 6
//console.log(totalStars([[1,1],[1],[1,1,1,1]])); // 7


//create a function that takes an array of items prices and return the total price of all items in the cart.

function totalPrice(prices) {
    let count = 0;
    for (i = 0; i < prices.length; i++) {
       
            count += prices[i]
        
    }
    return count;
}
console.log(totalPrice([10,20,30])); // 60


//You need to write a function shinyDiamondRug(n) that prints a diamond shape made of stars (*).

//The input n = "half height" of the diamond.

//The middle row of the diamond will always have 2n - 1 stars.

//So:

//Top half → increases stars until middle.

//Bottom half → decreases stars symmetrically.

function shinyDiamondRug(n) {
    // Top half
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}
shinyDiamondRug(5);


//wap a function that prints an inverted mountain of stars. The function should take a single parameter n, which represents the number of rows in the inverted mountain. Each row should contain decreasing number of stars starting from n stars in the first row down to 1 star in the last row.

function invertedMountain(n) {
  let m = '';
  for (let i = n; i >= 1; i--) {   // loop from n to 1
    for (let j = 1; j <= i; j++) { // print i stars per row
      m += '*';
    }
    m += '\n';
  }
  return m;
}

//console.log(invertedMountain(5));