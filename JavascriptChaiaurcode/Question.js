const prompt = require('prompt-sync')();
let ch = 44
let i 
while (i != ch){
    console.log("Try again")
    i = prompt("Enter the number")
    
}
console.log("You have entered the correct value")

//problem 4
const mean = (a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(4,5,6,7,8,11,12,13,14,15));

//problem 5
const average = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];          
    }
    return sum/arr.length;
}
console.log(average(4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));

// problem 6
const isEven = (num)=>{
    if (num % 2 == 0){
        return true;
    }
    return false;
}
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(7));
console.log(isEven(8));
console.log(isEven(9));
console.log(isEven(10));

// problem 7
const factorial = (num)=>{
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact *= 1;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));

// problem 8
const toCelsius = (fahrenheit)=>{
    return (5/9) * (fahrenheit - 32);
}
console.log(toCelsius(32));
console.log(toCelsius(68));
console.log(toCelsius(100));
console.log(toCelsius(212));

// problem 9
const toFahrenheit = (celsius)=>{
    return (celsius * 9/5) + 32;
}
console.log(toFahrenheit(0));
console.log(toFahrenheit(20));
console.log(toFahrenheit(37));
console.log(toFahrenheit(100));

// problem 10
const calculateHypotenuse = (base, height)=>{
    return Math.sqrt((base * base) + (height * height));
}
console.log(calculateHypotenuse(3,4));
console.log(calculateHypotenuse(5,12));
console.log(calculateHypotenuse(8,15));
console.log(calculateHypotenuse(7,24));
console.log(calculateHypotenuse(9,40));

// problem 11
const calculateAreaOfCircle = (radius)=>{
    return Math.PI * radius * radius;
}
console.log(calculateAreaOfCircle(1));
console.log(calculateAreaOfCircle(2));
console.log(calculateAreaOfCircle(3));
console.log(calculateAreaOfCircle(4));
console.log(calculateAreaOfCircle(5));

// problem 12
const calculateCircumferenceOfCircle = (radius)=>{
    return 2 * Math.PI * radius;
}
console.log(calculateCircumferenceOfCircle(1));
console.log(calculateCircumferenceOfCircle(2));
console.log(calculateCircumferenceOfCircle(3));
console.log(calculateCircumferenceOfCircle(4));
console.log(calculateCircumferenceOfCircle(5));

// problem 13
const isPrime = (num)=>{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0) return false;
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(16));
console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(19));
console.log(isPrime(20));

// problem 14
const reverseString = (str)=>{
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("javascript"));
console.log(reverseString("function"));
console.log(reverseString("programming"));

// problem 15
const isPalindrome = (str)=>{
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("world"));
console.log(isPalindrome("level"));

// problem 16
const fibonacci = (n)=>{
    let fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(20));
console.log(fibonacci(21));

// problem 17
const gcd = (a, b)=>{
    while (b != 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(48, 18));
console.log(gcd(56, 98));
console.log(gcd(101, 10));
console.log(gcd(54, 24));
console.log(gcd(81, 27));

// problem 18
const lcm = (a, b)=>{
    return (a * b) / gcd(a, b);
}
console.log(lcm(4, 5));
console.log(lcm(6, 8));
console.log(lcm(12, 15));
console.log(lcm(7, 9));
console.log(lcm(10, 25));   

// problem 19
const sumOfDigits = (num)=>{
    let sum = 0;
    while (num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}  
console.log(sumOfDigits(123));
console.log(sumOfDigits(456));
console.log(sumOfDigits(789));
console.log(sumOfDigits(101112));
console.log(sumOfDigits(131415));

// problem 20
const power = (base, exponent)=>{
    return Math.pow(base, exponent);
}
console.log(power(2, 3));
console.log(power(3, 4));
console.log(power(5, 2));
console.log(power(7, 3));
console.log(power(10, 4));

 