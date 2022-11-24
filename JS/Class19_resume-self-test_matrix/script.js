// function matrixBuilder (size, val=0) {
//     let matrix = []
//     for (let row = 0; row < size; row++){
//         let inner_arr = []
//         for (let col = 0; col < size; col++){
//             inner_arr.push(val);
//         }
//         matrix.push(inner_arr)
//     }
//     return matrix
// }

// let m = matrixBuilder(3)
// console.log(m);


// task 1

function matrixBuilder (size=3, val=0) {
    let matrix = []
    for (let row = 0; row < size; row++){
        let inner_arr = []
        for (let col = 0; col < size; col++){
            inner_arr.push(val);
        }
        matrix.push(inner_arr)
    }
    return matrix
}
    
let m = matrixBuilder()
console.log(m);


// task 2

function setIndex(matrix,i,j,val){
    matrix[i][j] = val;
}

setIndex(m,1,1,1)
console.log(m);


let arr = [0,0,0]
function f(i,val,arr){
    arr[i] = val;
}

f(1,2,arr)
console.log(arr)


// task 3

function printMat(m){
    for(let i = 0; i < m.length; i++){
        console.log(m[i])
    }

}

printMat(m)


// task 4

function diagonal(m){


}

