// // console.log("Hello, world!");
// function welcome(){
//     console.log("Tells have a coffee break");
// }

// function sutta(kitne){
//     console.log(`${kitne} Ultra Mild with coffee`);
// }

// sutta(4);
// welcome();
// // This is a comment

// function breaks(one, two){
//     return one + two;
// }

// console.log(breaks(5,10));

// function totalcupcakes(t1,t2){
//     return t1 + t2;
// }

// console.log(totalcupcakes(12,20));


// let number =4;
// let prizza;
// if(number<=2){
//     prizza = "small pizza";
// }else if(number<=4){
//     prizza = "medium pizza";
// }else if(number>=5){
//     prizza = "large pizza";
// }else{
//     prizza = "extra large pizza";
// }
// console.log(prizza);

// // let grade;
// // let marks = 80;
// //  if(marks>=90){
// //     grade = "+A";
// //  }else if (marks>=80){
// //     grade = "+B";
// //  }else if (marks>=70){
// //     grade = "+C";
// //  }else if (marks>=60){
// //     grade = "+D";
// //  }else{
// //     grade = "+f";
// //  }

// //  console.log(grade);

//  function calculate(marks){
//     if(marks>=90){
//         return "+A";
//     }else if (marks>=80){
//         return "+B";
//     }else if (marks>=70){
//         return "+C";
//     }else if (marks>=60){
//         return "+D";
//     }else{
//         return "+f";
//     }
//  }

//     console.log(calculate(80));

//     let myarray = [1,2,3,4,5,6,7,8,9,10];

//     function sumArray(arr){
//         let sum =0;
//         for(sum = 0; sum<arr.length; sum++){
//             sum += arr[sum];

//         }
//         return sum;
//     }
//     console.log(sumArray(myarray)); 

function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if((year%4 === 0 && year % 100 == ! 0 ) || year % 400 === 0){
      return "Leap Year"
    }else {
      return "Not a Leap Year"
    }
  }
 
    console.log(isLeapYear(2021)); // Output: Leap Year

function checknumbertype(num){
    if(num > 0){
        return "Positive Number";

}else if(num < 0){
        return "Negative Number";
    }else{
        return "Zero";
    }
}


function convertTemperature(value, type) {
    switch(type) {
      case 'CtoF':
        return (value * 9/5) + 32; // Celsius to Fahrenheit
      case 'FtoC':
        return (value - 32) * 5/9; // Fahrenheit to Celsius
      default:
        return 'Invalid conversion type';
    }
  }
  console.log(convertTemperature(0, 'CtoF'));   // Output: 32
console.log(convertTemperature(100, 'CtoF')); // Output: 212
console.log(convertTemperature(32, 'FtoC'));  // Output: 0



