// functions 

// // function can preform a task or return a value


// function my_function(parameter1, parameter2) {
//     // do something
//     console.log(parameter1 + parameter2);
// } // this function does not return a value




// function my_function2(parameter1, parameter2) {
//     // do something
//     return parameter1 + parameter2;
// } // this function returns a value

// // call the function
// let argument1 = 1;
// let argument2 = 2;


// my_function(argument1, argument2);

// let result = my_function2(argument1, argument2);

// let s = my_function2(result, result);

// console.log(result);
// console.log(s);

// function stringDecorator(str , decorator){
//     return decorator + str + decorator;
// }

// console.log(stringDecorator("hello", "_XXX_"));


// // get user input using the prompt function

// let mystring = "hello";
// let mystring2 = "lello";
// let mystring3 = "1";
// let mynum = 1;

// my_function(mystring, mystring2);
// my_function(mystring3,mystring3);
// my_function(mynum, mynum);



// function calc(a ,b){
//     return Number(a) + Number(b);
// }

// function user_input() {
//     let num1 = prompt("Enter a number: ");
//     let num2 = prompt("Enter another number: ");
//     let result = calc(num1,num2); // convert the string to a number also called type casting
//     alert(result);
//     alert(" this is the values you entered " + num1 + " + " + num2 + " = " + result); // string concatenation
//     alert(`${num1} + ${num2} = ${result}`); // template literal (` is not the same as ' or ")
 
// }


// function rec_func(n){
//     // recursive function - homework is just to google it ~! 
//     if(n == 0){
//         return 0;
//     }
//     console.log(n);
//     return rec_func(n);
// }



//1

function myfunction1 (x) {
    return x * 53;
}
console.log(myfunction1(10));

//2

function myfunction2 (x,y) {
    return x ** y;
}
console.log(myfunction2(10 , 5));

//3

function calcNum() {
    
    let num1 = prompt("Please Enter Number");
    let num2 = prompt("Please Enter Another Number");
    let num3 = prompt("Please Enter Another Number");
    let num4 = prompt("Please Enter Another Number");
    let num5 = prompt("Please Enter Another Number");
    
    alert((Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)));
    // let result =  (Num1,Num2,Num3,Num4,Num5);
    // alert(result);
    // alert(`)${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${calcNum(Number(num1), Number(num2), Number(num3), Number(num4), Number(num5))}`);
  
}
calcNum();

//4

function userName () {
    let firstName = prompt("Please Enter Your Name")
    let lastName = prompt("Please Enter Your Last Name")
    let age = prompt("Please Enter Your Age")

    alert(("Your Name: " + firstName + "\nYour Last Name: " + lastName + "\nYour Age: " + age));

}
userName();