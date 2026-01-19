                 //------------------------Object---------------\\


// yai hota kya h:isme humlog kuch bhi store kar sakte hai like array,object ka bhi object,list, aur jo soch sakte ho
// yai karta kya h:isse humko access mil jata h iski andr wala element ke sath kuch bhi karke na (prototype)
// aur Object.prototype sai humko properties ko access kar sakte h


const person = {
    name: 'jack',
    age: 21,
    sex: 'M',
    hobbies: ['football', 'basketball', 'tennis'],
    getname: function () {
        return this.name;
    },
    address: {
        city: 'New York',
        zip: '10001',
    }

}

console.log(person.address.city);


let remote = {
    color: 'black',
    size: 'medium',
    brand: 'xyz',
    volumeup: function () {

    },
    turnoff: function () {

    },

}


let car = {
    ...remote   // spread operator... does not work in object which has already existing abject it cannot access that aboject it will take only that abject reference 
}

// how to call object.prtotype

const obj = {
    foo: 1,
    // You should not define such a method on your own object,
    // but you may not be able to prevent it from happening if
    // you are receiving the object from external input
    propertyIsEnumerable() {
        return false;
    },
};

obj.propertyIsEnumerable("foo"); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result

// How to change the properties of the obj prototype to null.

const obj = Object.create(null);
const obj1 = { __proto__: null };

// We should not make make an obj prototype to null as if then it willnot follow the rule of Object.prototype

const normalObj = {}; // Create a normal object
const nullProtoObj = Object.create(null); // Create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"

console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value


alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value

// another exp of this

normalObj.valueOf(); // shows {}
nullProtoObj, valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"

// But we can do this to string

nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back


console.log(nullProtoObj.toString()); // shows "[ object Object]"

console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"




//  We can use null prototype as a cheap  substitue for maps.

const ages = { alice: 18. bob: 27 };

function hasPerson(name) {
    return name in ages;
}

function getAge(name) {
    return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]

// agr hum null-prototype use karte to iska nhi karna hota

const ages = Object.create(null, {
    alice: { value: 18, enumerable: true },
    bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined

// yai prototype ko overwrite nhi karna chaiye as if isse bohot complication hoti h 
// agr kisi nai malicious script add kar di to Object.prtotype to read karke ja hi kyu us to yahi kaam h

const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
    // access confidential data
}


// obj always jawab kuch ways mai hi deta h
// undefined, (null= error thorugh karta h), Number, String, Boolean, Symbol, BigInt


// kon kon se properties hai object ke andar
// Static mathond == jo sirf class to refer karte hai


// Object.assign 
// yai us object ki sari values ko copy karke user jaha bolta h usko utha assign kar deta hai

//eg
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target); // Object { a: 1, b: 4, c: 5 }

// Object.create
// yai ek new object bana deta h purane object ko as a prototype of that newly created object.

//eg
const person = {
    isHuman: false,
    printIntroduction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not no "person"

me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// expected Output : "My name is Matthew. Am I human? true"


//Object.defineProperties()
// is sai hum new ya purani properties ko dal sakte h aur return mai humko object miljata h
// pata h samjh nhi aaya eg sai samjh aa gye ja


//eg
const object = {};

Object.defineProperties(object, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});

console.log(object.property1);
// Expected output : 42


// Object.defineProperty()
// yai new ya puri property add ya modifies kar deta h object ki, and return the object.


//eg

const object = {};

Object.defineProperty(object, "foo", {
    value: 42,
    writable: false,
});

object.foo = 77;
//Throws an error in strict mode

console.log(object.foo);
// Expected output: 42




//Object.entries()
// yai return mai array ki form mai data deta h object ke andar wala wo bhi string mai


//eg
const objecct = {
    a: "some string",
    b: 42,
};

for (const [key, value] of
    Object.entries(object)) {
    console.log(`${key}: ${value}`);
}

// Expected output:
// "a: some string"
// "b: 42"



//Object.freeze()
//yai karne sai wo bas output dai sakta hmm us object mai kuch bhi add ya modifiy ya remove bhi nhi kar sakte

//eg
const obj = {
    prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42



//Object.fromEntries()
// yai diya dai list ko object mai convert karke return karti h

//eg
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }



//Object.getOwnPropertyDescriptor()
//yai humko bata dena h ki object ke andr kya h us sub ka data aur unka datatype return karta h, aur us data ka type kya h aur yai userbased hai jab tak user dal ta nhi h ki usko kya chaiya 


//eg
let o, d;

o = {
    get foo() {
        return 17;
    },
};

d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
//{
//  configurable: true,
//  enumerable: true,
//  get: [Function: get foo],
//  set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// {
//     configurable: true,
//     enumerable: true,
//     value: 42,
//     writable: true
// }

o = { [Symbol.for("baz")]: 73 };
d = Object.getOwnPropertyDescriptor(o,
    Symbol.for("baz"));
console.log(d);
// {
//     configurable: true,
//     enumerable: true,
//     value: 73,
//     writable: true
// }

o = {};
Object.defineProperty(o, "qux", {
    value: 4546574,
    writable: false,
    enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "qux");
console.log(d);
// {
//     value: 4546574,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }




//Object.getOwnPropertyDescriptors()
//yai humko object ke andar kya h like jese user ko jana h ki aaye particular element object mai hai ya nhi. aur agr hai to uska data type kya h


//eg
const object = {
    foo: 42,
};

const descriptors =
    Object.getOwnPropertyDescriptors(object);

console.log(descriptors.foo.writable);
// Output: true

console.log(descriptors.foo.value);
// Output: 42




//Object.getOwnPropertyNames()
// yai object ke andar ki sari properties return karta h array kki form mai
// Note value nhi bas properties


//eg
const object = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(Object.getOwnPropertyNames(object));
// Output : ["a", "b", "c"]



// Object.getOwnPropertySymbols()
// yai object mai jo bhi symbol properties h usko return karta h

//eg
const object = {};
const a = Symbol("a");
const b = Symbol.for("b");

object[a] = "LocalSymbol";
object[b] = "globalsymbol";

const objectSymbols =
    Object.getOwnPropertySymbols(object);

console.log(objectSymbols.length);
// Output : 2



// Object.getPrototypeOf()
//yai humko object ke andar jis object ko user call karta h uski prototype(the value of internal[[Prototype]] propery) return karta h
// majorty of time yai boolen output deta h, but some time it return the type of object.prototype kya h 


//eg 1
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
// Output : true


//eg 2
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object 
Object.getPrototypeOf("foo");
// String.prototype


// Object.groupBy()
// jab humko ke object ke andr bunch of data hota h aur humko usko group karna according to user need. as if it a callback function


//eg
const inventory = [
    { name: "asparagus", type: "vegetable", quantity: 9 },
    { name: "banana", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({
    quantity }) =>
    quantity < 6 ? "restock" : "sufficient");

console.log(result.restock);
// Output: [{ name: "banana", type: "fruit", quantity: 5 }]




// Object.hasOwn()
// yai agr object ke andr dekh bata ta h ki andr koi property hai ya nhi, according to user input
// aur yai boolen return karta h 
// fill the object is empty or undefiend is will return false


//eg
const object = {
    prop: "exists",
};

console.log(Object.hasOwn(object, "prop"));
// Output: true

console.log(Object.hasOwn(object, "toString"));
// Output: false

console.log(Object.hasOwn(object, "undeclaredPropertyValue"));
// Output: false




// Object.is()
// yai humko yai bta ta hi to jo 2 value user bata rha h wo same h ya nhi


//eg
console.log(Object.is("1", 1));
// Output: false

console.log(Object.is(NaN, NaN));
// Output: true

console.log(Object.is(-0, 0));
// Output: false

const obj = {};
console.log(Object.is(obj, {}));
// Output: false




// Object.isExtensible()
// yai batna hai ki kya able hmm object mai aur properties add kar sakte hai ya nhi. aur yai boolean type return karta h output mai


//eg
const object = {};

console.log(Object.isExtensible(object));
// Output : true

Object.preventExtensions(object);

console.log(Object.isExtensible(object));
// Output : false




// Object.isFrozen()
// yai bata ta h ki object frozen hai ya nhi. Boolean type reutrn karta h
// aur frozen ka mtlb uska jab hmm us object mai kuch add,modifiy nhi kar sakte bas value call kar sakte h


//eg
const object = {
    foo: 42,
};

console.log(Object.isFrozen(object));
// Output : false

Object.freeze(object);

console.log(Object.isFrozen(object));
// Output : true




// Object.isSealed()
// yai bata ta hi ki object sealed ha ki nhi. true , false mai
// sealed = jab hum object ke element ki properties ko modifiy,remove nhi kar sakte. pr hmm object mai new element add kar sakte h


//eg
const object = {
    foo: 42,
};

console.log(Object.isSealed(object));
// Output: false

Object.seal(object);

console.log(Object.isSealed(object));
// Output: true



//Object.keys()
// yai humko object ke andr jo array sai uske bhi andr ke sari keys return karta h array ki form mai


//eg
const object = {
    a: "some string",
    b: 42,
    c: false,
};

console.log(Object.keys(object));
// Output: Array ["a", "b", "c"]




// Object.preventExtension()
// yai humko object ke andr element pr properties write,read or delete kar sakte h pr hmm koi new properties add nhi kar sakte h


//eg
const object = {};

Object.preventExtensions(object);

try {
    Object.defineProperty(object, "foo", {
        value: 42,
    });
} catch (error) {
    console.log(error);
    // Expected Output: TypeError: Cannot define property foo, object is not extensible
}




//Object.seal()
// yai humko bas object ke andr ke element ke value ko modify kar sakte h 
// na ko new properties add,delete kar sakte h


//eg
const object = {
    foo: 42,
};

Object.seal(object);
object.foo = 33;
console.log(object.foo);
// Output: 33

delete object.foo; // Cannot delete when sealed
console.log(object.foo);
// Output: 33




// Object.setPrototypeOf()
// yai karta kya h: isse hum proper way mai object our uske element pr prototype modifiy aur add kar sakte h
// par yai karna nhi chaiye


//eg
const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Output: undefiend

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Output: "bar"




// Object.value()
// yai karta kya hai: humkko object ke ander ke elements ki value return karta h 
// par isme wo apne parnet object ko return nhi kar sakta
// like agr yai object kisi object ka child hota to yai apne parent ki element ki value of return nhi kar sakta


//eg
const obj = { foo: "bar", bar: 42 };
console.log(Object.values(obj)); // ['bar', 42]


// Array-Like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "3" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']


// Array-Like object with random key ordering
// When using numeric keys, the values are retured in the key's numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myobj = Object.create(
    {},
    {
        getFoo: {
            value() {
                return this.foo;
            },
        },
    },
);
myobj.foo = "bar";
console.log(Object.values(myobj)); // ['bar']



//-----Instance properties-----------\\
// These properties are defined on Object.prototype and shared by all Object instances.

// Object.prototype.__proto__(yai ab use nhi hota pr interview mai puch sakta h )
// yai kya karta h:isme hum object ki prototype kai internal proto ko access kar sakte h 
// Note: yai karna nhi chaiye . 
// [ 1 of the fav questions in Interview ]


//eg
function Circle() {}
const shape = {};
const circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. Do NOT DO THIS in real code.

shape.__proto__ = circle; // yaha pr humne uski overwrite ka diya aur usko a new value assign kar diya ab yai isko refect karye ja

// Get the object prototype
console.log(shape.__proto__ === Circle); // false




// Object.prototype.constructor
// yai karta kya h: jab bhi hmm koi object create karte h constructor function or class ko use karte hue, tab constructor ki properties hmko bata ti h ki function mai kya kya h
// thoda h complex par aa gye ja


//eg
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let usr = new Person('Jack', 24);


let clone = new usr.constructor('kon', 26);

console.log(clone.name); // 'kon'
console.log(clone.age); // 26
console.log(clone.constructor === Person); // true



//-----------Properties our bhi h pr itni important nhi(like ab jese prtotype ki age prototype.value jese h jisme pata hota h kya ho rha h aur jab bhi samjh nhi aaye to mdn docs)-----------\\









































































































//--------------------------abhi yai bacha h yai subha hoga------------------\\