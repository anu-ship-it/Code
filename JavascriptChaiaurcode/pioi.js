//---- isPrototypeof() , Inheritance and Object ,Inherantes---\\


// How many per prototype properties are there like,how can we access the properties of these prototype


//.isPrototypeOf()
//syntax: isPrototypeOf(object)

// yai hota kya h: yai check karta h ki ki agar ek object ki instanceof(mtlb yai prototype. kai andar ki baat h)
//  dursi object ki prototype chain main exits karta h
// yai operate booolen value pr karta hai as if because it only check that it that properties is avaliable in that object
// Error: yai to bas name kiye liye error likha h jab wo jis check ko check kar rha ho wo waha pr kuch value nhi ho to wo (null ya undefiend)


function Foo() {} // yai bana fun
function Bar() {} //  dursa fn

Bar.prototype = Object.create(Foo.prototype);
// yai pr hmm assign kar rhe h bar ki prototype ko foo ki proto pr by create an object

const bar = new Bar();
// So yaha pr ek new variable ko assign kiya h

console.log(Foo.prototype.isPrototypeOf(bar));
// yaha  pr hmm dekh paa rhe hai ki hm foo ki proto pr bar ko call kar pa rhe hai
console.log(Bar.prototype.isPrototypeOf(bar));
// yaha pr bhi wahi bar ki proto pr foo ko call kar rhe hai



class Foo {}
class Bar extends Foo {} // extends ka mtlb yai hua ki yai ek inheritance relationship banta h foo for bar ke bich mai wo bhi subclas ki form mai
class Baz extends Bar {}


const foo =  new Foo();
const bar = new Bar();
const baz = new Baz();


// Prototype chains:
// foo: Foo -> Object
// bar: Bar --> Foo --> Object
// bar: --> Bar --> Foo --> Object

// So yaha pr yai ho rha h ki ab hmne ine teeno ki properties ko ek durse mai call kar sakte hai

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); //false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(bar)); // true


//yai example hai bas

class Foo {
    #value = "foo";
    static getValue(x) {
        return x.#value;
    }
}

const baz = {__proto__: Foo.prototype };

if (Foo.prototype.isPrototypeOf(baz)) {
    console.log(Foo.getValue(baz)); // TypeError: Connot read
    //private member #value from an object whose class did not declare it
}



//yahi same concept lagta hai instanceof
// yai instanceof() kya hota hai
// yai check karta h ki proto property of construcotr kaha appear karti hai proto chain of object ki. our return karta h boolen value

//iska example
//function Car(make, model, year) {
    //this.make = make;
    //this.model = model;
    //this.year = year;
//}
//const auto = new Car("Honda", "Accord", 1998);

//console.log(auto instanceof Car); // output: true
// console.log(auto instanceof Object);  // Output: true





class Foo {
    #value = "foo";
    static getValue(x) {
        return x.#value;
    }
    static isFoo(x) {
        return #value in x;
    }
}

const baz = {__proto__: Foo.prototype };

if (Foo.isFoo(baz)) {
    // Doesn't run, because baz is not a Foo
    console.log(Foo.getValue(baz));
}



//---------// ------------Inheritance----------\\-------\\

// hota kya yai:yai bascially passes characteristics from parent to child jis wo child be isko use kar sake
// javascript mai issi inheritance for prototype ka nmae diya hai. jase ek prototype object ka bhi prototype hota h.
// humlog isko apne hisb se use overwrite kar sakte hai runtime pr 


// Inheritance with the prototype chain


// iska mtlb yai ki prototype ka bhi prototype hota h 
//aur usko = obj.__proto__ sai access kar sakte hai
// aur usko ab getPrototypeOf(obj) se aceess kar sakte 
// ismai iska mtlb hai ki object ke prototype ke bhi prototype ko call kiya ja rha h
// aur hum isko overwrite kar sakte h like we are assinging some other property to it
// and later we can call it on any other function


// Exp
const o = {
    a : 1,
    b : 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    
    __proto__: {
        b : 3,
        c : 4,

    },
};

//o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain What that means)
// Finally, o.[[Prortotype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a : 1, b : } ---> { b : 3, c : 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o,b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o,c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o,d);// undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o. [[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prptotype and
// there is no 'd' property by default, check its prototype.
//o.[[Prototype]].[[Prototype]].[[Prototype]]  is null, stop searching,
// no property found, return undefiend.



