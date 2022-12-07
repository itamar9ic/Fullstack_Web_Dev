// // Random

// let a = Math.random(); // returns a random number between 0 and 1 (floating point number)
// console.log(a);

// let b = Math.floor(Math.random() * 10); // returns a random number between 0 and 9 (whole number)
// console.log(b);

// let c = Math.random() * 10; // returns a random number between 1 and 10 (floating point number)
// console.log(c);

// let d = Math.floor(Math.random() * 10) + 1; // returns a random number between 1 and 10 (whole number)


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

// let k = getRandomNumber(5, 55);
// console.log(k);

// // Looping in JavaScript
// /*
// for
// for in
// for of
// while
// do while
// recursive loops (functions calling themselves)
// */

// // for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // for in loop (for objects)
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let i in obj) {
//     console.log(i);
// }

// // for of loop (for arrays)
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     console.log(i);
// }


// // while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// // do while loop
// let j = 0;
// do {
//     console.log(j);
//     j++;
// }
// while (j < 10);

// // recursive loop
// function recursiveLoop(i) {
//     console.log(i);
//     if (i < 10) {
//         recursiveLoop(i + 1);
//     }
// }
// const multiplier = 10;
// for (let i = 0; i < 100; i++) {
//     let result = multiplier * i+10; 
//     console.log(result);
// }
    
// 1

// option 1
// let x  = 10;
// let y  = 15;
// function belly(max,min) {
//     let rand = Math.floor(Math.random() *(max - min + 1)) + min;
//     return console.log(rand);
//     }
//     belly(x,y);

// option 2
function getRndInteger(min,max) {
    return Math.floor(Math.random() *(max - min +1)) + min;
}
console.log(getRndInteger(10,15));


// 2
let random = "presentation";
for (let i = 0; i < random.length; i++) {

    console.log(random[i]);
}

