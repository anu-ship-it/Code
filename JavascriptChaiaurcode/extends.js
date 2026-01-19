
// ---------------extends-----------\\

// yai hota kya h:ek new class banta h us class ki jiska child another class h.

// pata h kuch samjh nhi aaya hoga 
// lets see by Exp

class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        return `${this.getDate()}--${months[this.getMonth()]}--${this.getFullYear()}`; 
    }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// Output: 19--Aug--1975


// simpliy 
// yai ek child class create karta h with all the properties of the parent child
// isse hmko har par rewriting ke badle resue kar sakte hai
// hum isme new method or purna methods ko change bhi kar sakte hai

// is wale se packa samjh aa gye ja 
// agr abhi bhi nhi aaya to mdn dekh lena

class Animal {
    speak() {
        console.log("This animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

let a = new Animal();
a.speak(); //This animal makes a sound

let d = new Dog();
d.speak(); // Dog barks

// isme Dog extends h Animals ka mtlb 
// Animals is parent 
// Dog is child
// Dog has all features of Animals, but it override speak().

// Using Super

class Animal {
    constructor(name) {
        this.name = name;
    }

    info() {
        console.log(`This is an animal named ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // callls Animal's constructor
        this.breed = breed;
    }

    info() {
        super.info();
        console.log(`It is a ${this.breed}`);
    }
}

let d = new Dog("Tommy", "Labrador");
d.info();
// This is an animal named Tommy
// It is a Labrador


// parent ko object ya null hona chaiya pr nhi h to koi dikat nhi

function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have vaild prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!



// extends sets the prtotype for both ChildClass and ChildClass.prototype.


//--------------Dekho abhi aur baki h wo deeper deive h extends ki wo college mai kiye gye ji -----------//


