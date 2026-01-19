                 //------------------------Functions---------------\\


// Yai hota kya h: bascially ek set of code hota h jisko hum cabhi bhi kahi bhi use kar sakte h.
//is mai yai ek set of parameters par works karta h 
// hum isko kuch parameters date h aur fir hum kuch karguments pass karte
// arguments mtlb = hum is function sai karna kya h
// fir end mai yai humko return mai hamre diye hue task ka result return karta h

//eg
function add(a, b){
    return a + b; 
}

console.log(add(2, 3));  // 5


// there are 4 type of function in js
// bas taraika change hota h likha ka


// [1] Function Declartion
function greet() {
    console.log('Hey');
}
greet();


// [2] Function Expression
const greet = function() {
    console.log('why');
}
greet();


// [3] Arrow Function
const greet = () => console.log('how');
greet();


// [4] Constructor Function(for objects)
function Person(name) {
    this.name;
}
let user = new Person('Jack');
console.log(user.name); // Jack



//------------------------Instance properties--------------\\

// yai properties are defined on Function.prototype and shared by all Function instances.


// Function.prototype.constructor()
//yai hota kya hai: the constructor function that created the instance object.for function instances, the initail value is the function constructor


//eg
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object;  // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n =3;
n.constructor === Number;  // true



// length()
// is humko function ke andr kitne elements ka uska total number pata chal jata h


//eg
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// Output: 0

console.log(func2.length);
// Output: 2



// prototype()
// hai kya: is the prototype object from which all function inherit
// isko implement karne ke badh humko bohot options mil jate h likr( call, apply, bind)
// Its sits in the prototype chain above above every function.
// karke sai bohot kuch kar sakte h kisi ki bhi value ko add, modifiy or delete kar sakte h


//eg
function sayHello() {
    console.log("Hello");
}

// Using methods from Function.prototype
sayHello.call(); // "Hello"
sayHello.apply(); // "Hello"
let bound = sayHello.bind();
bound();  // "Hello!"



//----------------------Instance methods -------------\\

//Function.prototype.apply()
// yai hota kya h: call this function with a given this value, and argument provided as an array(pr an array-like object)


//eg
const number = [5 , 6 , 2 , 3, 7];

const max = Math.max.apply(null, number);

console.log(max);
// Output: 7

const min = Math.min.apply(null, number);

console.log(min);
// Output: 2




//Function.prototype.bind()
// yai ek new function with a fixed this value and (optionally) some perset arguments
// not it does not call the function immediately, it just gives you a new one.

// karta kese h: lets you explicity set what this should be refer to inside the function
// usefull when passing function as callback where this would normally be lost
// also usefull for partial function application(pre-filling arguments)


//eg
//Without bind()
const person = {
    name: 'Nena',
    greet: function() {
        console.log('Hello' + this.name);
    }
};  // 'Hello , undefined' (because `this` lost)



//with bind
const boundGreet = person.greet.bind(person);
boundGreet(); 'Hello, Nena'




// Function.prototype.call()
//yai karta kya h:yai function ke function(this) ki value ko print karta h according to the user


//eg
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('chesse', 5).name);
// Output : 'cheese'





//Funcction.prototype.toString()
// yai karta kya h:jis bhi function pr use karte h yai usko start sai end tak string part mai print kar deti h
// mainly used in debudding 


//eg
function add(a, b) {
    return a + b;
}

console.log(add.toString());

// Output :  'function add(a, b) { retun a + b; }'





//




