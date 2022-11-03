// const car = {type:"Bmw", 
//             price:10000, 
//             color:"Gold", 
//             fual:10, 
//     run:function(){
//         while( this.fual > 0){
//             console.log("driving..");
//                 this.fual--;
//         }
//             console.log("out of fual")
// }};
// console.log(car.type);
// console.log(car["type"]);

// car.fual = 100;
// console.log(car.fual);
// car.run();

// car2.fual = 5;
// console.log

// const date = new Date();
// console.log(date);
// new date = year, month, week, day;

// class Car {
//     constructor(name ="Volvo"){
//         this.name = "BMW"
//     }
// }

// const car1 = new Car();

// console.log(car);

// Home Work

// 1
const jelly = {
    firstName:"Itamar",
    lastName:"Cohen",
    age: 33,
    carName:"Mercedes",
    fullName:function() {return this.firstName + " " + this.lastName;}
};

console.log(jelly.fullName());

// 1 (part 2)
const date = new Date (1988 ,10 ,20)
console.log(date);

// 2
const belly = {
    firstName: "Itamar" ,
    lastName: "Cohen" ,
    age: 33 ,
    carName: "Mercedes" ,
    date ,
    fullName:function() {return this.firstName + " " + this.lastName + this.date + this.age + this.carName;}
};

console.log(belly.fullName());

// 3
const fakedate = new Date (1988,10,35)
console.log(fakedate);

// Result for question 3 - 
// By entering a number higher than the total number of days in the month, the date changes to the next month 