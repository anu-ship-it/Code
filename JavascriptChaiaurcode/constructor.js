
//---------Constructors-------\\

//yai hota kya h:jab hum logo ke pass ek object h uske andar aur object h aur wo object ki property ek hi hai to har par usko call karna ek foolish way hai that why
//we have one this "getvalue" is yai hoga ki getvalue ke pass un sub data ka refer hoga jis se jab we will call it will work or mermeory par load nhi padhe ja 


// Exp 


// A constructor function

function Box(value) {
    this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have

Box.prototype.getValue = function () {
    return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
console.log(Box(boxes));

// We can rewrite on classes

class Box {
    constructor(value) {
        this.value = value;
    }

    // Method are created on Box.prototype
    getValue() {
        return this.value;
    }
}

// We can the behaviour of all isstances by mutating Box.prototype.

function Box(value) {
    this.value = value;
}
Box.prototype.getValue = function () {
    return this.value;
};
const box = new Box(1);

// Mutate Box.prototype after an instance has already been
//created
Box.prototype.getValue = function () {
    return this.value + 1;
};
box.getValue(); // 2



// Implicit constructor of literals

    // Object literal (without the `__proto__` key) automatically
    //have `Object.prototype` as their `[[Prototype]]`
    const object = { a: 1 };
    Object.getPrototypeOf(object) === Object.prototype; // true

    /// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
    const array = [1, 2, 3];
    Object.getPrototypeOf(array) === Array.prototype; // true

    // RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
    const regexp = /abc/;
    Object.getPrototypeOf(regexp) === RegExp.prototype; // true

    

    // We can build longer prtotype chain by using = Object.setProtoTypeOf() function.

    function Base () {}
    function Derived() {}

    // Set the `[[Prototype]]` of `Derived.prototype`
    // to `Base.prototype`
    Object.setPrototypeOf(Derived.prototype, Base.prototype);

    const obj = new Derived();
    // obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null


    // we have a class terms for this setPrototype is called extends.

    class Base {}
    class Derived extends Base {}

    const obj = new Derived();
    // obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null



    //--------------Dekho abhi aur baki h wo deeper deive h constructor ki wo college mai kiye gye ji -----------//

    // Inspecting prototype: a deeper dive