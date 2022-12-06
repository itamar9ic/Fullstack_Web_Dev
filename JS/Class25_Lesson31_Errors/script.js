    // task 1
x=10;
y=25;
try {
    if (x + y > 100) throw "this is a big number";
    if (x + y < 100) throw "this is a small number";
    if (x + y == 35) throw "woow!";
} catch (err) {
        console.log(`x + y equals to ${x+y} , ${err}`)
    }
    // task 2
a = "Hello World";
    try {
    a = Number(a); throw "a is now a number"
} catch (err) {
    console.log(`oops! ${err}`)
}

    // task 3
    try {
    toString(x); throw "x is now string"
} catch (err) {
    console.log(`oops! ${err}`)
}