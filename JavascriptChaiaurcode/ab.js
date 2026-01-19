// let user = {
//   id: 101,
//   name: "Anoop",
//   email: "anoop@example.com",
//   isAdmin: true,
//   login: function() {
//     console.log(this.name + " logged in");
//   }
// };

//console.log(Object.keys(user));    
//console.log(Object.values(user));  
//user.login();


// Create an object students with properties: name, age, and grade. print all the properties.
student = {
  name : 'Anoop',
  age : 22,
  grade : 'A',
}

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

//Add a new property school to the student object.
student.sex = 'M';
//console.log(student);

// Delete the grade property from the student object.
delete student.grade;
//console.log(student);

// Check if student object has a property called age.
//console.log(student.hasOwnProperty('age'));

// Write a function that takes an object and return the number of properties it has.

function countProperties(obj){
  return Object.keys(obj).length;
}

//console.log(countProperties(student));


// Create an object book with properties title, author, amd year.
// print the keys of the object.
// print the value of the Object.
book = {
  title: 'Self Help',
  author: 'Sami',
  year: 2000,
}

// console.log(Object.keys(book));
// console.log(Object.values(book));

// Write a function that takes a person object {name, age} and print "Hello , my name is X and I am Y year old".
function takename (ob){
  return `Hello, my name is ${ob.name} and I am ${ob.age} years old.`
}

//console.log(takename(student));

// Make an object car with properties brand, model, and a method start() that prints "Car is starting..". Call the method.

car = {
  brand: 'Nissan',
  model: 'GTR',
  year: '2018',
  isRunning: false,

start: function() {
  this.isRunning = true;
  console.log("Car is Stating...");
},

stop: function() {
  this.isRunning = false;
  console.log("Car never Started");
  }
};

//car.start();
//car.stop();


// Create an object marks with subject names as keys and marks as values.
// Write a function that calculates the average marks.

marks = {
  math: 90,
  science: 80,
  english: 92,
  CS: 100,
  AI: 100,
}

function avg (objs){
  let values = Object.values(objs);
  let sum = 0;

  for (let i = 0; i<values.length; i++){
    sum += values[i];
  }
return sum / values.length;

}


//console.log(avg(marks));

//Loop through an object of employess details and print "key: value" for each property.

employee = {
  no: 50,
  team: 'Developer',
  size: 5,
  salary: 90000,
  office: true,
}

for (let company in employee){
  console.log(company + ':' + employee[company]);
}
