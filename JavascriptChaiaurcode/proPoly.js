//.........Prototype........\\

// So basicallly prototype is basically a object and if we have add a function inside the Array prototype then we can use that function to any arry by simpliy using a "." operator as if because the "." opertor is = to the previous Prototype it take its reference from that reference like father and son releationship  asa
// Father has some properties like color , height those properties while be also be having to child ......and this properties having in child is called prototype inherantence
//so this is how Prototype Works
// It is a type of function which we make when a particular function does not work on any browser due to any reason, so in that case we make our own function which is called Polyfills

// It's very important thing its is conform that it will come in interview and important to become an elite Developer

// Polyfill//


if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userfn) {
        const originalArr = this; // Current Object ki taraf point karta hai
        // jis bhi array ke upper user isko call kar rha h
        for (let i = 0; i < originalArr.length; i++) {
            userfn(originalArr[i], i);
        }
    };
}


const arr = [1, 2, 3, 4, 5, 6]
// Error: .forEach function does not exist on arr variable

// We are making polyfill of foreach

// Real signture ko samjo - No return, function input, value, index
// calls my fn for every value


const ret = arr.myForEach(function (index, value) {
    console.log(`Value at Index ${index} at ${value}`)
});



// Signture .map
// Return? - New Array, Each ele Itlerate, userFn

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            result.push(value);
        }

        return result;
    };
}


const n1 = arr.map((e) => e * 3)
const n = arr.myMap((e) => e * 2);
console.log(n);
console.log(n1);


// Filter
// Signature: Return - new array | input: userFn,
// agar user ka function true return karta hai toh current value ko new array mai include kar leta hai

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = []

        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    };
}


const n4 = arr.myFilter((e) => e % 3 == 0);
const n3 = arr.filter((e) => e % 2 == 0);
console.log(n3);
console.log(n4);


// ayu theme


// at()
// Error: through an error if idex is out of range
// Signature: Return undefined if out of index, function , check if num is negative then is track from end of array
// call my fn for that particular value

if (!Array.prototype.myAt) {
    Array.prototype.myAt = function (index) {
        const len = this.length;// yaha array ki length ko store kar rha hai as if we have to compare with index value 

        // yaha hmm negative index handel kar rhe h
        const k = index < 0 ? len + index : index;


        // yaha pr less than bohot zero like -50 yaha fir 50 index pr in both case yai undefiend karta hai 
        if (k < 0 || k >= len) return undefined;

        return this[k];
    };
}

let ar = [1, 2, 3, 4];
console.log(ar.myAt(2));


//concat()
//Error: koi error through nhi karta h
// Signature : retun new array with combine of arrays give by user,wo purani array ko nhi change karta, yai index pr work karta h , wo dusri array ko copy karta h 
// pr yai return value based karta h

if (!Array.prototype.myconcat) {
    Array.prototype.myconcat = function (...args) { // waha pr ... method sai hum kuch bhi accept kar sakte h array mai wo bhi jese
        // myconcat(b,d,7, [11, 55] is me jo kuch bhi h wo accepted h
        const newArr = [];// new arr create ki h

        for (let i = 0; i < this.length; i++) {
            newArr.push(this[i]);
            // yaha pr hum first array sai element push(copy) kar rhe h new array mai
        }

        for (let j = 0; j < args.length; j++) {
            let item = args[j];
            // waha pr hum baki sari array ko push(copy) kar rhe h new array mai
            if (Array.isArray(item)) { // yai sare array ko spreed kar dena h jisse we can pick elem by elem
                for (let k = 0; k < item.length; k++) {
                    newArr.push(item[k]);
                }
            } else {
                newArr.push(item);
            }
        }
        return newArr;
    };
}

let a = [1, 2, 3];
let b = [4, 5, 6];
let d = [4, 9, 1, 10]
let c = a.myconcat(b, d, 7, [11, 55]);
console.log(c);



// copyWithin()
//Error: Yai koi Error through nhi karta
// Real Signature ko samjo: Return same array, Works with index, copy/paste as per the user requirement

if (!Array.prototype.mycopyWith) {
    Array.prototype.mycopyWith = function (target, start, end) {
        const len = this.length;// yaha hum array length store karte h
        end = end || len; // agr koi end point nhi diya to wo automatically array ki length ko end point smjh leta h

        let count = Math.min(end - start, len - target);//yai ensure karta h ki hum jada ele copy na kar lai. aur kitne ele ko copy karna h, aur target sai end tak mai kitna space dena h

        for (let i = 0; i < count; i++) {
            this[target + i] = this[start + i];
        }
        // yai pura part overwrite ka h tar ko start mai copy karna ka
        return this;
        // yaha to overwrite array mil jati h
    };
}
let av = [1, 2, 3, 4, 5];
av.mycopyWith(0, 3);
console.log(av);



// entries()
// karta kya h: show karta h key/value of the array
// Error: koi dikat nhi h isme
// Signature Role karta:returns a new iterator object(.next() use hota h isme),fir wo object humko index/value pair mai show karta h one by one
//mtlb jab tak array over nhi hota h yahi karo

if (!Array.prototype.myentries) {
    Array.prototype.myentries = function () {
        let i = 0;// yahi sai start karna hai

        // yai pura core logice h 
        return {// yai object return kar rha hai

            next: function () {
                if (index < this.length) {//
                    return { value: [index, this[index++]], done: false };// yaha pr wo index/value ko seprate kar rha h taki dono ko sath mai show kara sake
                } else {
                    return { value: undefined, done: true };
                    // jab len khtm ho gye to yai show kara dena h
                }
            }
        };
    };
}

let fruits = ['aaple', 'banana', 'cherry'];
let it = fruits.entries();

console.log(it.next().value);




// every()
// Return: yai ek boolen value send karta h 
// Error: Koi error wala dikat nhi h
// Signature role karta: yai check karta h ki sare elements test pass karte h yai nhi aur fir end mai ek boolen value return karta h

if (!Array.prototype.myevery) {
    Array.prototype.myevery = function (userFn, arg) {
        for (let i = 0; i < this.length; i++) {
            if (i in this) {// yai blank space ko skip karta h
                if (!userFn.call(arg, this[i], i, this)) {
                    return false;
                }
            }

        }
        return true;
    };
}


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myevery(isBelowThreshold));
// Expected output: true


// fill()
// Error: make sure that array should not be empty
// Signature role karta: yai array ko overwrite karta h jis sihab se user action dai 
// yai copywith ka oppostie ha wo copy karta h yai overwrite karta h
//Return: yai array pr updated form mai 

if (!Array.prototype.myfill) {
    Array.prototype.myfill = function (value, start = 0, end = this.length) {
        const len = this.length;

        //yai part negative ko hangle karta h like  len = 5 , start = -2 agr start - value sai hai to len + start = 3 
        // aur agr postive hai to fir to koi bata hi nhi
        start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);

        // yai bhi same negative handle karta hai bas yai end sai dekha h kab user end gandu ho to uska bhi dekha hota h.
        // baki yai bhi same way hi use karta hai
        end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);


        //
        for (let i = start; i < end; i++) {
            this[i] = value;;
        }// yai to Overwrite logic h

        return this;
    };
}

let gb = [1, 2, 3, 4, 5, 6];
console.log(gb.myfill(0, 2, 4));
console.log(gb.myfill(1, -5, -2));


//find()
// Error: agar condition false hui to undefined
// Signature samjo:yai phela element return kar deta h jese hi conditon true mil jati h 
// Return: ek element
// aur yai ek callback function h

if (!Array.prototype.myfind) {
    Array.prototype.myfind = function (userfn, thisarg) {

        for (let i = 0; i < this.length; i++) {
            if (i in this)
                // yai condtion right pr element hi dai deta h
                if (userfn.call(thisarg, this[i], i, this)) {
                    return this[i];
                }
        }
        return undefined;
    };
}

const arry = [5, 12, 8, 130, 44];
const found = arry.myfind((element) => element > 10);
console.log(found);



//findIndex()

// Error: bas wrong condition par -1 aata h
// Signature ko samjho: condtion right pr element ka index num, aur condition false pr -1 return
// Return: element ka index value
//aur yai ek callback function h


if (!Array.prototype.myfindIndex) {
    Array.prototype.myfindIndex = function (userfn, thisarg) {

        for (let i = 0; i < this.length; i++) {
            if (i in this)

                // yai check karta h ki condtion true hai yai nhi aur agr true hai to uska index do
                if (userfn.call(thisarg, this[i], i, this)) {
                    return i;
                }
        }
        return -1;
    };
}

let ary = [5, 12, 8, 130, 44];
let foun = ary.myfindIndex((element) => element > 10);
console.log(foun);


//findlast()

//Error: jab condition false hoti h tab undefiend aata h 
// Signature ko samjho: yai bas array to last sai access karna start karta h aur karta same h jese findindex wo index deta h yai value
// Return: value jab condtion true hoti h
// aur yai ek callback function h

if (!Array.prototype.myfindLast) {
    Array.prototype.myfindLast = function (userfn, thisarg) {

        for (let i = this.length - 1; i >= 0; i--) {
            if (i in this)

                if (userfn.call(thisarg, this[i], i, this)) {
                    return this[i];// yai value return karta h index nhi
                }
        }
        return undefined;
    };
}

let van = [1, 2, 85, 65, 64, 75];
let park = van.myfindLast((element) => element > 75);
console.log(park);

//findLastIndex

//Error: jab condition false hoti h tab undefined aata h
//Signature ko samjho: yai condition true hone par value aur uska index return karte hai
//Return: yai value aur uska index provide karta h
// aur yai ek callback function hai



if (!Array.prototype.myfindLastIndex) {
    Array.prototype.myfindLastIndex = function (userfn, thisarg) {

        for (let i = 0; i < this.length; i++) {
            if (i in this)

                if (userfn.call(thisarg, this[i], i, this)) {
                    return this[i] && i;// yai value return karta h index nhi
                }
        }
        return undefined;
    };
}

let va = [1, 2, 85, 65, 64, 75];
let par = van.myfindLastIndex((element) => element > 75);
console.log(par);


//flatMap()

//Error: nhi aesa koi scene nhi h
//Signature ko samjho:agr ek array ke andr multiple array h to yai phele to subko flattens karke ja, aur fir user ke arrgument ko exectue karke ja 
//Return : a new array but in a clear form
// yai ek callback function hai

if (!Array.prototype.myflatMap) {
    Array.prototype.myflatMap = function (userfn, thisarg) {
        const newArry = []; // yai new array jiska wo return karye ja
        for (let i = 0; i < this.length; i++) {
            if (i in this) { // yai jese array mai koi loop hole hota hai to usko skip kar deta h
                const value = userfn.call(thisarg, this[i], i, this);

                // yai handle karta h flatten part in this code
                if (Array.isArray(value)) {
                    newArry.push(...value);
                } else {
                    newArry.push(value);
                }
            }
        }
        return newArry;
    };
}

// how does flatten works: Its basically checks that the callf=backs function return the array and this check where the array is in this form ([1,[1, 2], 1]) then this part into this ([1,2,1])

const ar3r = [1, 2, 1];

const resu = ar3r.myflatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(resu);




// pop()

//Error: return undefined if array is empty
//Signature ko samjo:yai array sai last element ko remove karke return kar deta h
// Return: last element of array


if (!Array.prototype.mypop) {
    Array.prototype.mypop = function () {
        if (this.length === 0) {
            return undefined; // age array empty hai to yai aaye ja
        }
        const lastvalue = this[this.length - 1]; // gets the last element
        this.length = this.length - 1;  // remove the last element
        return lastvalue;
    };
}

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tamato'];
console.log(plants.mypop());



//push()
//return: yai element add karne ke badh puri array ki length show karta h
// Signature ko samjho: isme user ko value deta hai usko array ki last place par push karna hota h
//Error: isme koi scope nhi h

if (!Array.prototype.mypush) {
    Array.prototype.mypush = function (arg) {
        this[this.length] = arg; // place a the new element at ending
        return this.length; // return the array
    };
}


const animals = ['cat', 'dog', 'horse'];
const count = animals.mypush('goat');
console.log(count);
console.log(animals);



// reduce()
// Error: 
// Signature ko samjho: yai puri array to redcue karke a single element return karta h according to the users need. like(add,sub,div,mul)
// Return: yai jo bhi user ke arg ka result aaya hoga wo return karta h
// yai ek callBack function hai


if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        // set starting accumulator and index
        let acc = initialValue !== undefined ? initialValue : this[0];// agr user nai acc nhi diya to 0 ko acc samjh kar start karo
        let start = initialValue !== undefined ? 0 : 1; //age initialValue undefined h to fir 0 index sai start karo 
        // aur diya h to fir usse start karo
        // loop through array and update accumulator
        for (let i = start; i < this.length; i++) {
            acc = callback(acc, this[i], i, this);
        }

        return acc; // final reduced value
    };
}


const number = [1, 2, 3, 4];

const sum = number.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);





// reverse()
//Error: Koi error ka scope nhi h
//Signature ko samjo: yai puri array to palath dena h first ko last bana deta h and vesa versa
//Return: reversed array ka reference deta h



if (!Array.prototype.myReverse) {
    Array.prototype.myReverse = function () {
        // yai for line ko acche sai samjo time lai kar
        for (let left = 0, right = this.length - 1; left < right; left++, right--) {
            // swap elements

            let temp = this[left];
            this[left] = this[right];
            this[right] = temp;
        }
        return this; // reverse() modifies the array in place
    }
}

let arr5 = [10, 20, 30, 40, 50];
console.log(arr5.myReverse());





//shift()
// Signature ko samjo: phele element ko remove karta h array karke humko return karta h
// Return: First element


if (!Array.prototype.myshift) {
    Array.prototype.myshift = function () {
        if (this.length === 0) {
            return undefined; // if array is empty
        }

        const firstValue = this[0]; // Store first element


        // Shift everything left
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }

        this.length = this.length - 1; // shrink array
        return firstValue; // return removed element 
    };
}

let br = [1, 2, 3];
const frelement = br.myshift();
console.log(br);
console.log(frelement);



// slice()
//Error: aesa koi scene nhi h
// Signature ko samjho: isme user 2 argument deta h us arg ko follow karke array ko splice karna h fir jo bachi hui h usko return karna h
// pr yai jo bhi kam karta h uske refernce pr karta h arignal ko kuch nhi hota h
//  Return : slice ke badh bachi hui array ko return karta h

if (!Array.prototype.myslice) {
    Array.prototype.myslice = function (start = 0, end = this.length) {
        let result = [];
        let len = this.length;

        if (start < 0) {
            start = len + start;
            if (start < 0) start = 0;
        }

        // Handles the negative index
        if (end < 0) {
            end = len + end;
            if (end < 0) end = 0;
        }

        // loop from start to end
        for (let i = start; i < end && i < len; i++) {
            result.push(this[i]);
        }

        return result;
    };
}


let ani = [10, 20, 30, 40, 50];

console.log(ani.myslice(1, 3));  // [20, 30]
console.log(ani.myslice(2));  // [30, 40, 50]
console.log(ani.myslice(-2));  //[40, 50]
console.log(ani.myslice(-10, 2));  //[10, 20] (clamped at 0)
console.log(ani);  // [10, 20, 30, 40, 50]




//join()
// Error: yai symbol ko string mai convert nhi kar sakta hai
// Signature ko samjho:array ke sare element ko string mai convert karke join karke string ki form mai return karta h
// Return: joined string formed array


if (!Array.prototype.myjoin) {
    Array.prototype.myjoin = function (separator = ",") {
        if (this.length === 0) return "";
        let result = "";
        for (let i = 0; i < this.length; i++) {
            let value = this[i];

            // handle null/undefined/holes
            value = (value === null || value === undefined) ? "" : String(value);

            if (i > 0) {
                result += separator; // add separator before each element except first
            }
            result += value;
        }
        return result;
    }
}


console.log([1, null, 3, undefined].myjoin("-"));  // "1--3-"
console.log([].myjoin());  // ""
console.log([42].myjoin());  // "42"




//keys()
//Error: jab array empty ka undefined hota h
//Signature ko samjho: yai humko array ki values ki index values provide karta h
// Return: yai basically humko index number return karta h uska particular value ka


if (!Array.prototype.mykeys) {
    Array.prototype.mykeys = function () {
        let index = 0;
        let self = this;

        // return the iterator object
        return {
            next() {
                if (index < self.length) {
                    return { value: index++, done: false }; // return current index
                } else {
                    return { value: undefined, done: true }; // finished
                }
            },
            [Symbol.iterator]() {
                return this; // makes it iterable for for...of
            }
        }
    }
}


let a1 = ['a', 'b', 'c'];
console.log([...a1.mykeys()]);

for(let key of a1.mykeys()) {
    console.log(key);
}




// splice()
// Error: 
// Signature ko samjho: yai humko array mai elements ko add/remove kar deti h user kr arrgument pr
// Return: the removed/ added elements



//eg
if(!Array.prototype.mysplice) {
   Array.prototype.mysplice = function(start, deleteCount, ...items) {
    const arr = this;
    const len = arr.length;


    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    deleteCount = deleteCount === undefined ? len - start : Math.min(Math.max(deleteCount, 0), len - start);

    const deleted = arr.slice(start, start + deleteCount);

    // Shift remaining elements and insert new items
    arr.splice = undefined; // temporarily remove native splice if exists
    const tail = arr.slice(start + deleteCount);
    arr.length = start;
    arr.push(...items, ...tail);

    return deleted;
    }
}

let a3 = [1,2,3,4,5]
let remove = a3.mysplice(1,2,10,11);


console.log(a3);
console.log(remove);




//
// Error:
// Signature ko samjho:
// Return:

