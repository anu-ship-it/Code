// -------------Arrow Functions-----------\\

// yai hota kya h
// jab function ke pass ek hi expression ho to tab isko use kar sakte h , aur wase bhi use kar sakte h
// isme humko omit aur return likhe ki kli need nhi hoti h

// Syntax
const add = (a, b) => a + b;

// isko hum mostly hmm callback ke time use karte h

// par isme [construct] method nhi hota h


//eg
function normal(a, b) {
    const arrow = () => console.log(arguments);
    arrow(100, 200);
}

normal(10, 20, 30); // prints [10, 20, 30] from normal's arguments

