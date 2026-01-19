//////////----------DeepCopy and Shallow copy----------\\\\\\\\\\\\\


// Shallow copy
// it basically creates a new object, pr yai bas top level ki properties copy kr sakta h

// yai deep properties copy nhi kar sakta iske pass bas unka refernce hota h 
//iske pass original copy ka bas refernce hota, original copy or refernce copy do alag chez hoti h
// hum jo bhi changes karte hai wo refernce copy mai hoga uska original copy bhi change kar deta h
// in dono ki memory same hoti h
// yai point to ek hi memmory ko kar rahe hote h
// yai safe h if we want to change the data on the top level like string, not in terms of object and functions.array. 
// adr ke properties ko changes karne sai problem aa skti h, we never know what it will affect.

//eg
const original = {
    name: "Alpha",
    address: { city: "Delhi", pin: 1100121 }
};

const ShallowCopy = { ...original };

// Changing a nested property
ShallowCopy.address.city = "Mumbai";

console.log(original.address.city);  // "Mumbai" * original also changed
console.log(ShallowCopy.address.city); // "Mumbai"




////-------------DeepCopy-------------\\\\\\\

// yai bhi karta yahi shallow copy wala kaam pr plus point yai h ki yai original memory ka reference same nhi leta
// yai pura copy top to bottom karke apni ek new pachne bana leta h
// fir isme jo changes hongye wo original copy pr show nhi karte h. as if now it is totallly independent new object


//eg
const original1 = {
    name: "Nena",
    skills: ["Java", "JS"]
};

// Deep copy using structuredClone (modern JS)
const deepcopy = structuredClone(original1);

deepcopy.name = "Singh"; // only affects the copy object
deepcopy.skills.push("React"); // only affects the copy object

console.log(original1.skills); // ["Java", "JS"]
console.log(deepcopy.skills); // ["Java", "JS", "React"]

