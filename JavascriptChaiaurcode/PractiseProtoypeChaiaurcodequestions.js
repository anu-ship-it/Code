// Yai Top Notch questions hai Prototype ke 


// 1)  You need to create a constructor fucntion Animal that takes a name parameter. Add a method makesound to its prototype, which always returns "some generic sound".

function Animal(name) {
    this.name = name;
}
Animal.prototype.makesound = function () {
    return "some generic sound";
};


// 2) You are desiging a simple robot system.Each robot has a name and a batteryLevel.The robot should have a method charge() that increase the battery level by 20, but it cannot exceed 100.

function Robot(name, batteryLevel) {
    this.name = name;
    this.batteryLevel = batteryLevel;
}
Robot.prototype.charge = function () {
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
    return this.batteryLevel;
};


// 3) You need to create a counter constructor function that initializes a count properly to 0. The counter should have two prototype methods
// . increment() increase the count by 1.
// . decrement() decrease the count by 1.

// Challenge
// Implement a constructor function Counter that initialize count to 0
// Attach increment() and decrement() method to the prototype


function Counter() {
    this.count = 0;
}
Counter.prototype.increment = function () {
    this.count += 1;
    return this.count;
};

Counter.prototype.decrement = function () {
    this.count -= 1;
    return this.count;
};


// 4) Create a Playlist constructor that initialize with an empty songs array. Add a method addSong(song) to the prototype that adds a new song to the playlist.

// Challenge
// Implement a constructor function Playlist that initializes an empty songs arrat.
// Attach a method addSong(song) to its prototype that adds the song to the songs array.


function Playlist() {
    this.songs = [];
};

Playlist.prototype.addSong = function (song) {
    this.songs.push(song);
    return this.songs;
};



// 5) Create s Shopping Cart system where items can be added with a price. Implement a method getTotalPrice() that calculates the total price of all items in the cart.

// Challenge
// Implement a constructor function shoppingCart that initializes an empty items array.
// Attach addItem(price) to the prototype to add items.
// Attach getotalPrice() to calculate the total price of items.

function ShoppingCart() {
    this.items = [];
}

ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price);
};

ShoppingCart.prototype.getTotalPrice = function () {
    return this.items.reduce((acc, price) => acc + price, 0);
}



// 6) Create a BankAccount constructor that initializes:
// A balance property representing the account balance.
// A transactions array to log all deposit and withdrawal activities.

// Implement the following methods on the prototype

// Deposit(amount):
// Increases the balance by the given amount.
// Adds a transaction log in the format: "Deposited X" (where X is the amount).

// Withdraw(amount):
// Decreases the balance by the given amount:
// Prevents overdraft (cannot withdraw if balance is insufficient).
// If withdrawal is successful,log: "Withdrew X".
// If balance is insufficient, log: "Insufficient balance".

// getTransactionHistory();
// Returns the list of all transactions as an array of string in the order they occurred.

// Challenge

// Implement BankAccount constructor with balance and transactions.
// Attach deposit(amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

function BankAccount(balance) {
    this.balance = balance;
    this.transactions = [];
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
    return this.balance;
}
BankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(`Withdrew ${amount}`);
        return this.balance;
    }
    this.transactions.push("Insufficient balance");
    return "Insufficient balance";
}
BankAccount.prototype.getTransactionHistory = function () {
    return this.transactions;
}



// 7) Create an Employee constructor that initalizes name, position, and salary. Implement:
// applyBonus(percent): Increases the salary by the given percentage

// Challenge
// Implement Employee construcot with name, position, and salary
// Attach applyBonus(percent) to the prototype to increase salary.


function Employee(name, position, salary) {
    thia.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.applybonus = function (percent) {
    this.salary = Math.round(this.salary + this.salary * (percent / 100));
}


// 8) Create a Library constructor that initializes a books array.

// Implement:
// addBook(book): Adds a book to the books array.
// findBook(title): Searches for a book by title and returns "Book found" or"Book not found".

// Challenge
//Implement Library constructor with a books array.
// Attach addBook(book) and findBook(title) methods to the prototype.


function Library() {
    this.book = [];
}
Library.prototype.addBook = function (book) {
    this.book.push(book);
}
Library.prototype.findBook = function (title) {
    return this.book.includes(title) ? "Book found" : "Book not found";
}



// 9) You are building a baking system where multiple bank acocunts can exist. Each account has an accountNumber, holderName, and balance. Implement the following methods:

// deposit(amount): Adds money to the balance.
// withdraw(amount): Deducts money but prevents overdraft.
// transfer(amount, targetAccount): Transfers money from one account to another if the balance allows it.

// Challenge
// Implement BankAccount constructor with accountNumber, holderName, and balance.
// Attach depost(amount), withdraw(amount), and transfer(amount, targetAccount) methods to the prototype.


function BankAccount(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    if (this.balance < amount) {
        this.balance -= amount;
    }
}
BankAccount.prototype.transfer = function (amount, targetAccount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        targetAccount.deposit(amount);
    }
};



// 10) You are developing an online store system where each product has the folllowing properties:
//  name: The name of the product(e.g. "Laptop").
//  price: The price of the product(a postive integer).
//  stock: the available stock(a non-negative integer).

// Your task is to implelement the following methods:

//  1)applyDiscount(percent)
// Reduces the price of the product by the given percentage.
// The final price should be rounded to the nearest integer(useMath.round).
// Example: If a product cost $1000 and 10% discount is applied, the new price should be $900.

// 2)Purchase(quantity)
// If the requested quantity is available is stock, reduce the stock accordingly.
// If not enough stock is available, return "Not enough stock"
// Example: If 5 items are in stock are in stock and the user buys3, the new stock should be 2.


// Challenge

// Implement the Product constructor with name, price, and stock properties.
// Attach applyDiscount(percent) and purchase(quantity) methods to the prototype (for memory efficiency).
// Ensure integer values for price after applying a discount.
// Handle edge cases like zero stock or excessive purchases.


function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}
Product.prototype.applyDiscount = function (percent) {
    this.price = Math.round(this.price - this.price * (percent / 100));
}
Product.prototype.purchase = function (quantity) {
    if (this.stock >= quantity) {
        this.stock -= quantity;
        return this.stock;
    } else {
        return "Not enough stock";
    }
};



