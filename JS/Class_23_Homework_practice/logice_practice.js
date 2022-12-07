// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods

// task 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [ 1,2,2,3,4,7,7,9]

let mySum = (arr) => {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num;
};

console.log("my sum is " + mySum(arr));

// example mySum function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(mySum(arr)); -> 55

// task 2
let myMax = (arr) => {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
       if (num < arr[i]){
            num = arr[i];
        }
    }
    return num;
};

console.log("my max number is " + myMax(arr));
// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMax(arr)); -> 10

// task 3
let myMin = (arr) => {
    let num = arr[0];
    for (i = 1; i < arr.length; i++) {
       if (arr[i] < num){
            num = arr[i];
        }
    }
    return num;
};

console.log("my max number is " + myMin(arr));
// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMin(arr)); -> 1

// task 4
let myAverage = (arr) => {
    return mySum(arr)/arr.length;
};
console.log("my average is " + myAverage(arr));
// example myAverage function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myAverage(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myAverage(arr2)); -> 4.25


// task 5
let myMedian = (arr) => {
    let num2 = 0;
    if (arr.length % 2 == 0){
        let y = arr.length / 2;
        num2 = (arr[y] + arr[y-1]) /2;
    } else {
        num2 = arr[Math.floor(arr.length/2)]
    }
    return num2
};

console.log("my median is " + myMedian(arr))
// median is the middle value of an array
// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMedian(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myMedian(arr2)); -> 3.5


let arr3 = [ 1,2,2,2,2,3,4,7,7,9]

// task 6
let myMode = (arr3) => {
    let counter = 0;
    let x;
    let r = 0;
    let maxcount = 0;
    for (let i = 0; i < arr3.length; i++) {
        for (let g = 0; g < arr3.length; g++) {
            if (x == arr[g]){
                counter++;
            }

        }
        if (counter > maxcount){
            maxcount = counter;
            r=x;
        }
        counter = 0;
    }
    return r;
}

myMode(arr3);
//     let x = 1;
//     let z = 0;
//     let y;
//     for (let i = 0; i < arr3.length; i++) {
//         for (let g = 0; g < arr3.length; g++) {
//             if (arr3[i] == arr3[g]) z++;
//             if (x<z) {
//                 x=z; y = arr3[i];
//             }
                                
//         }
//     } z = 0;
       
    
// };
console.log("the most common value is " + myMode(arr3));
// mode is the most common value of an array

// task 7
let myRange = (arr) => {}; // range is the difference between the largest and smallest values of an array

// task 8
let myVariance = (arr) => {}; // variance is the average of the squared differences from the Mean

// task 9
let mySort = (arr) => {}; // sort an array from smallest to largest 








// // we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods


// let mySum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };

// // example mySum function:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(mySum(arr)); -> 55

// let myMax = (arr) => {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// };

// // example myMax function:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(myMax(arr)); -> 10

// let myMin = (arr) => {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// };

// // example myMin function:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(myMin(arr)); -> 1


// let myAverage = (arr) => {      
//     return mySum(arr) / arr.length;
//     // if you want to use the mySum function you have to write it above the myAverage function

// };
// // example myAverage function:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(myAverage(arr)); -> 5.5
// // let arr2 = [ 1,2,2,3,4,7,7,9]
// // console.log(myAverage(arr2)); -> 4.25



// let myMedian = (arr) => {
//     let median = 0;
//     let sortedArr = mySort(arr); // if you want to use the mySort function you have to write it
//     if (sortedArr.length % 2 === 0) {
//         median = (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) / 2;
//     } else {
//         median = sortedArr[(sortedArr.length - 1) / 2];
//     }
//     return median;
// }; // median is the middle value of an array

// // example myMedian function:
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(myMedian(arr)); -> 5.5
// // let arr2 = [ 1,2,2,3,4,7,7,9]
// // console.log(myMedian(arr2)); -> 3.5



// let myMode = (arr) => {
//     let mode = 0;
//     let maxCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             mode = arr[i];
//         }
//     }
//     return mode;

// }; // mode is the most common value of an array

// let myRange = (arr) => {
//     let range = myMax(arr) - myMin(arr);
//     return range;
// }; // range is the difference between the largest and smallest values of an array

// let myVariance = (arr) => {
//     let variance = 0;
//     let average = myAverage(arr);
//     for (let i = 0; i < arr.length; i++) {
//         variance += (arr[i] - average) ** 2;
//     }
//     variance = variance / arr.length;
//     return variance;
// }; // variance is the average of the squared differences from the Mean


// let mySort = (arr) => { // sort an array from smallest to largest
//     let sortedArr = [];
//     let min = myMin(arr);
//     let max = myMax(arr);
//     for (let i = min; i <= max; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] == i) {
//                 sortedArr.push(arr[j]);
//             }
//         }
//     }
//     return sortedArr;
//     // this is a very bad way to sort an array, but it works! 
// }; // sort an array from smallest to largest 