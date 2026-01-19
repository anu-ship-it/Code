// Create an object repesenting a type of tea with properties  for name, type, and caffeine content.
const teas = {
    name: 'Lemon tea',
    type: 'Green',
    caffiene: 'Low'
}

// Acess and print the name and type propperties of the tea object.

console.log(teas.name);
console.log(teas['type']);


// Add a new property origin to the tea object/
teas.origin = 'Assam'

// change the caffiene level of the tea object to "Medium".
teas.caffiene = "Medium"

// Remove the type property from the tea object.
delete teas.type

// Check if the tea object has a property origin.
console.log('Origin' in teas);

// Use a for.. in loop to prinnt all properties of the tea object.

for(let key in teas){
    console.log(key + ':' + teas[key]);
}


// Create a nested object repesenting different types of tea and their properties.

const myteas ={
    greentea:{
        name: 'Green tea',
        cups:{
            one: '1',
            two: '2'
        }
    },
    blacktea: {
        name: 'Black tea'
    }
}

// Create a copy of the tea object.

const teacopy = {...myteas}; // Shallow copy
const anotherCopy = teas; // reference 
console.log(teacopy);


// Add a custom method describer to the tea object that returns a description string.
const t = {
    name: 'Masla Chai',
    type: 'Black Tea',
    origin: 'India',
    isHot: true,

    describer: function () {
        return `${this.name} is a ${this.type} from ${this.origin},
It is usually served ${this.isHot ? 'hot' : 'cold'},`;
    }
};

console.log(t.describer());


// Merge two objects representing different teas into one.
const q = { a: 1, b: 2};
const w = { c: 3, d: 4};
const mergedqw = { ...q, ...w};
console.log(mergedqw);