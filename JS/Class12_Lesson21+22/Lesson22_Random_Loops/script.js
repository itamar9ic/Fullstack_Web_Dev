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

