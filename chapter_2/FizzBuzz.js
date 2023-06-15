

// book solution . 

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) {
        output += "Fizz";
    }
       
    if (n % 5 == 0) {
        output += "Buzz";
    }
    console.log(output || n );

}


for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}









// ---------- this is my solution

// let i = 0;

// for (i = 0; i < 100; i++ ) {
//     if (i % 3 == 0) {
//         console.log("fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else
//         console.log("fizzbuzz" || i);    
// }
// console.log(i);