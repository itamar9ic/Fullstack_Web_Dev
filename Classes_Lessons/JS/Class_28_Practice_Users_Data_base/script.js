// Pratice 2 - Fill in the empty functions 


// Q1: instanceOf counts the number of instances of e in a collection
let frut = "banana";
let instanceOf = (element, collection) => {
    let counter = 0;
    for (let i = 0; i < collection.length; i++ ) {
        if (collection[i] == element) {
            counter++
        } 
    } return counter

}

console.log(instanceOf("a", "banana")) //👉️3

//instanceOf(1, [1, 2, 3, 1, 1, 4]) // 3
//instanceOf("a", "banana") // 3
//instanceOf(5, {a: 5, b: 5}) // 2


// Q2: 
    // 1.
    //count the number of users in "data_base_l1.json" 
    //and return a list of their names
let Data_Base;
let json = fetch("./data_base_l1.json")
        .then(r => r.json())
        .then(data => {
            Data_Base = data;
            jelly ()
            // console.log(Data_Base)
     });

// let countUsers = (element, collection) => {
//     let counter = 0;
//     for (let i = 0; i < collection.length; i++ ) {
//         if (collection[i] == element) {
//             counter++
//         } 
//     } return counter

// }

// let showUser = () =>{
//     alert("usernames: " + Data_Base.users.name);
// }
function jelly () {
console.log(Data_Base);
}

jelly()

// console.log(countUsers()) //👉️6

    // 2.
    // in "data_base_l2.json" and return a list of lists with size 2  -> [[name, age], [name, age], ...]
    // each list contains the name and the age of the user

    // 3.
    // in "data_base_l3.json"
    // return a list of emails that are created from name+_+last_name + "@gmail.com" 
    // for example: "john doe" -> john_doe@gmail.com


// Q3:
    // 1. create a login page (you can reuse the code from the previous lesson)
    // 2. assume that the user is logged in if the user name is "admin" and the password is "1234"
    // 3. if the user is logged in, show a welcome message and table of all users in "data_base_l3.json" and their emails
    



 



     
