// question 1

let date = new Date().getDay();
console.log(date);

switch(date) {
    case 0:
        console.log("Today is Sunday")
        break;
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
         break;
    case 3:
        console.log("Today is Wedensday")
         break;
    case 4:
        console.log("Today is Thursday")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    case 6:
        console.log("Shabat Shalom!")
        break;
};


// question 2

// for (let i = 100; i > 0; i -= 2) {
//     console.log(i);
// };

for (let i = 100; i > 0; i --) {
    if(!(i%2)) {
    console.log(i);
    }
};

// console.log(i, "\t", 100-i);

