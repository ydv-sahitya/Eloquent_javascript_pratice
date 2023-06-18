// Defining a function

const square = function(x) {
    return x * x ;
};

console.log(square(12));


// A function is created with an expression that starts with the keyword function.

// A function can have multiple parameters or no parameters at all. In the following example, makeNoise does not list any parameter names, whereas power lists two:


const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();


// another fucntion with 2 parameter

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2 , 10));



// Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.



// example: 
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

console.log(x + z );

// Each scope can “look out” into the scope around it, so x is visible inside the block in the example. The exception is when multiple bindings have the same name—in that case, code can see only the innermost one. For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.



const halve = function(n) {
    return n/2;
};

let n = 10;
console.log(halve(100));

console.log(n);



// NESTED SCOPE
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas" );
    ingredient(0.25, "cup", "tahini" );
    ingredient(0.25,"cup", "lemon jucie");
    ingredient(1, "colve","garlic");
    ingredient(2, "tablespoon", "Olive oil");
    ingredient(0.5, "teasppon","cumin");
};


// The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

// The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.






// Functions as values   -- -read again tomorrow

let launchMissiles = Function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {/* do nothing */};
}



// Declaration notation

// Example: 


console.log("The future says:", future());

function future() {
    return "You'll never have flying car";
}



// The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.


// Arrow functions

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};


const square1 = (x) => {return x*x;};
const square2 = x => x * x;


// When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses


const horn = () => {
    console.log("Toot");
};


// The call stack


function greet(who) {
    console.log("Hello " + who);
}

greet("Harry");
console.log("bye");




// "blow the stack"

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " came first.." );




function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

// ---------------------------------------------------

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(2,6));


// --------------------------------

// Closure

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrapValue(1));

// => 1
console.log(wrapValue(2));

// => 2




// With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.


function multiplier (factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// => 10



// Recursion  ----------------------------



function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));



function findsolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history}) + 5)`) ||
                   find(current * 3, `(${history}) * 3)`);
        }
    }
    return find (1, "1");
}

console.log(findsolution(24));


// Growing functions----------------------------------------------




// ============== I have to comeback again to learn more about this stuff ===========================================


function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }

    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);


// ------------------------------------------------------


function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows,"cows"); 
    printZeroPaddedWithLabel(chickens,"Chickens");
    printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 11, 3);





function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} chickens`)
    console.log(`${zeroPad(pigs, 3)} Pigs`)
}

printFarmInventory(7, 16, 3);



// Minimum ----------------------------------

function min(a ,b) {
    if (a < b)  return a;
    else return b;
}

console.log(min(0, 10));
console.log(min(0, -10));


// Recursion// solution -------------------------------------

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
























