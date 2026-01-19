// Yai top notch questions hai Object ke

const { use } = require("react");



// 1) Imagine you are building an online scholl management system.Each student has a profile containing their name, age, and grade. You need to store this information in an object format so that it can be accessed easily when required.

// Challenge
// Write a function that takes name, age, and grade as parameters and returns a student object containing these properties.

// Constraints
// 1) name should be string.
// 2) age should be a positive integer grater than 5.
// 3) grade should be a string like "10th", "12th", etc.
// 4) return "invalid input" for wrong inputs.

function createStudentProfile(name, age, grade) {
    if (
        typeof name !== "string" ||
        typeof grade !== "string" ||
        typeof age !== "number" ||
        age <= 5 ||
        name === ""
    ) {
        return "Invalid input";
    }

    return { name, age, grade };
}



// 2) You are developing a car rental service. Each car has a brand and model, but some cars don't have a color assigned yet. You need to add a color property dynamically when a customer selects a car.

// Challenge
// Write a function that takes a car object and a color string, then adds the color property to the object.

// Constraints 
// 1) car should be a valid object with at least brand and model properties.
// 2) color should be a non-empty string, otherwise return "Invalid color".


function addCarColor(car, color) {
    if (
        typeof car !== "object" ||
        typeof color !== "string" ||
        color.length === 0
    ) {
        return "Invalid color";
    }

    car.color = color;
    return car;
}




// 3) You are building an online shopping platform. Some products have discounts, and some don't. You need to check whether a product object contains a discount property.

// Challenge
// Write a function that check if a product object has a discount property and returns true and false.

// Constraints
// 1) products should be a vaild object.


function hasDiscount(product) {
    return typeof product === "object" && product !== null && "discount" in product;
}



// 4) For security reasons, when a user logs out, their password should be removed from the user object before storing it in logs or analytics.

// Challenge
// Write a function that removes the password property from a user object and returns the updated object.

// Constraints
// 1) user should be a valid object with at least a username and password.
// 2) If password does not exit, return the object as it is. 


function removePassword(user) {
    if (typeof user == "object" || user !== null) {
        if ("password" in user) {
            delete user.password;
        }
        return user;
    }
}



// 5) You are analyzing user data in a database. You need to count how many properties exist in a user's profile to determine if the profile is complete.

// Challenge
// Write a function that returns the number of properties in an object.

// Constraints
// 1) User should be a valid object.
// 2) If the object is empty, return 0.


function countProperties(user) {
    if (typeof user == "object") {
        if (user == null) {
            return 0;
        } else {
            return Object.keys(user).length;
        }
    };
}




// 5) You are working on a system that stores user profile information from multiple sources. Sometimes, the same user has two different records, and you need to merge them into a single object.

// Challenge
// Write a function that takes objects and merges them into one. If a key exits in both objects, the value from the secound object should overwrite the value from the first object.

// Constraints
// 1) Both inputs should be valid objects.
// 2) If an object is empty, return the other object as it is.
// 3) If both objects are empty, return{}.



function mergeObjects(obj1, obj2){
    if(typeof obj1!== "object" || obj1 == null || typeof obj2!== "object" || obj2 == null){
        return {};
    }

    if(Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0){
        return {};
    }

    if(Object.keys(obj1).length === 0) return obj2;
    if(Object.keys(obj2).length === 0) return obj1;

    return { ...obj1, ...obj2 };
}




// 7) You are working on a system that stores product details in an object. However, for some functionalities, the data needs to be in an array format.

// Challenge
// Write a function that converts an object into an array of key-value pairs. Each element in the array should be an array where the first item is the key and the second item is the value.

// Constraints
// 1) The input should be a valid object.
// 2) If the object is empty, return an empty array.


function ObjectToArray(obj){
    if(typeof obj == "object" && obj !== null){
        return Object.entries(obj);
    }
    return [];
}



// 8) In your web application, some objects contain unecessary properties. To optimize performace, you need to remove all properties that have null or undefined values.

// Challenge
// Write a function that removes all properties with null or undefined values from an object.

// Constraints
// 1) The input should be a valid object.
// 2) If the object has no valid properties left, return {}.


function cleanObject(obj) {
    let cleanedObj = {};

    for(let key in obj){
        if(obj[key]!== null && obj[key] !== undefined){
            cleanedObj[key] = obj[key]
        };
    }

    return cleanedObj;
}



// 9) You are working on a web application where objects contain nested properties. JavaScript's built-in assigment(=) creates a shallow copy, meaning changes to the copied object will also affect the original. To prevent this, you need to create a deep copy of an object, ensuring that nested objects are cloned properly.

// Challenge
// Write a function that takes an object and returns a deep copy of it.

// Constraints
// 1) The innput should be a valid object.
// 2) The function should work with nested objects and arrays inside objects.
// 3) The function should not modify the original object.


function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }  
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }
    let copy = {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}  




// 10) In many applications; data is stored in deeply nested objects. Accessing a property from a deeply nested object requires multiple checks to avoid errors. Instead of  manually checking each level, we need a function that safely retrieves a value from a nested object using a dot-separated key path.

// Challenge
// Write a function that takes a nested object and a key path string(e.g., "user.address.city") and returns the value. If any part of the path is missing, return "Key not found".

// Constraints
// 1) The input object should be valid.
// 2) The key path should be a stringwith dot notation(.)separating keys.
// 3) If a key is missing, return "Key not found".
// 4) The function should handle deeply nested objects.


function getValueFromPath(obj, keyPath) {
    let keys = keyPath.split(".");
    let current = obj;

    for(let key of keys){
        if(current[key] === undefined){
            return "Key not found";
        }
        current = current[key];
    }

    return current;
}

