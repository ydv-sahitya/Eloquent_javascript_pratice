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