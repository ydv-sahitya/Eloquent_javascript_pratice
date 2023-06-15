// value, type , And Operators


-- values 


Imagine a sea of bits—an ocean of them. A typical modern computer has more than 30 billion bits in its volatile data storage (working memory). Nonvolatile storage (the hard disk or equivalent) tends to have yet a few orders of magnitude more.




-- numbers 



--- Automatic Type Conversion

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


document.querySelector("#p1-name").textContent = "sahi" + "yadav" 

// for accessing title in page

document.title  


// using index get the number of the word

document.title.indexOf("T")

document.title[9]

document.querySelector("header h1").textContent.toLocaleUpperCase()



// -------  chapter 2 

// Program Structure 



// A single let statement may define multiple bindings. The definitions must be separated by commas.

let one = 1, two = 2;
console.log(one + two);
// → 3




// ----------- Control flow
// When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom. This example program has two statements. The first one asks the user for a number, and the second, which is executed after the first, shows the square of that number.


// This is quite good example.

let theNumber = Number(prompt("Pick a number"));

console.log("Your number is the square root of " + theNumber * theNumber);  




// conditional exection

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of" + thenumber * theNumber);
}



// The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless theNumber is not-a-number, do this”.


// You often won’t just have code that executes when a condition holds true, but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. You can use the else keyword, together with if, to create two separate, alternative execution paths.


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


// If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. Here’s an example:

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}



// ----------- while and do loops  --------------


let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}



// this work because of let. if i use const that does not work,

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}

console.log(result);






let yourName;
do {
    yourName = prompt("Who are you ?");
} while (!yourName);
console.log(yourName);


// This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name.



// -- indenting code




// The role of this indentation inside blocks is to make the structure of the code stand out. In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins. With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it. I like to use two spaces for every open block, but tastes differ—some people use four spaces, and some people use tab characters. The important thing is that each new block adds the same amount of space.



// -- for loop

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}




// -- another example of mine

let result = 1;
for (let counter = 0; counter < 5; counter + 1) {
  result = result * 2;
}
console.log(result);



// Breaking Out of a Loop

for (let current = 20; ; current ++) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}







