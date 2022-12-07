    // task 1
x=10;
y=25;
try {
    if (x + y > 100) throw "this is a big number";
    if (x + y < 100) throw "this is a small number";
} catch (err) {
        console.log(`x + y equals to ${x+y} , ${err}`)
    }
    finally {
        console.log(`done`);
    }
try {
    if (x + y == 35) throw "woow!";
} catch (err) {
        console.log(`x + y equals to ${x+y}! ${err}`)
    }

    // task 2
a = "Hello World";
    try {
    a = Number(a);
    throw "a is now a number"
} catch (err) {
    console.log(`oops! ${err}`)
}

    // task 3
    try {
    toString(x); throw "x is now string"
} catch (err) {
    console.log(`YAYYY! ${err}`)
}



// error handiling

// try {
//     // code to try
//     console.log('Start of try runs' , a);
// }catch(error){
//     // error handling
//     console.log('Error has occured', error);
// }

// try...catch...finally

// try {
//     // code to try
//     console.logg('Start of try runs');
// }catch(error){
//     // error handling
//     console.log('Error has occured');
// }finally{
//     // always runs
//     console.log('This is always run');
// }

// // throw

// let x;

// try {
//     x = Math.floor(Math.random() * 9);
//     // code to try
//     console.log('Start of try runs');
//     // throw new Error('Whoops!'); // this will throw an error and stop the code
//     if(x < 3){
//         throw "eat eggs for breakfast"
//     }   
// }catch(error){
//     // error handling
//     console.log(`${error} has occured`);
// }finally{
//     console.log(x);
// }

// function f(a){
//     if(a < 0)
//         throw "inside the function error!";
//     if(a < -100)
//         throw "very small number";
// }

// function g(a){
//     if(a < 0)
//         return "inside the function error!";
//     if(a < -100)
//         return "very small number";
// }

// function h(a){
//     if(a < 0)
//         console.log("inside the function error!");
//     if(a < -100)
//         console.log("very small number");
// }


// console.log(f(-105))













// try{
//     f(-1);
// }catch(e){
//     console.log(` this is the error type: ${e}`)
// }


// let g = 5;

// if(g < 33){
//     let a;
//     a = 15;
//     console.log(a);
// }

// console.log(a);


// Promise in JavaScript

// // Promise is an object that represents the eventual completion or failure of an asynchronous operation

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
    
// }).then(result => console.log(result));


// // more examples

// let x = 5

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log(x);
//     }
// }, 2);

// console.log("----------------------------------------------------------------")

// console.log(`im outside the timeout ${x}`);

// x = 20

// console.log(`im outside the timeout ${x}`);








// setInterval(() => {
//     try{
//         b = x + a
//         console.log(b)
//     }catch(e){
//         console.log("x and a are not defined yeat!")
//     }

// }, 2000)

// let user_input = prompt("enter 2 number: ") 
// // " 1 5"

// try {
//     let arr = user_input.split(" ")
//     a = Number(arr[0])
//     x = Number(arr[1])
// }catch(e){
//     console.log("wrong input");
//     a = 5
//     x = 6
// }
















