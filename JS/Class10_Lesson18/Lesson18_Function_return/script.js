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