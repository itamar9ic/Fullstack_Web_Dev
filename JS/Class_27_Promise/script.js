
// // Async Functions
// function resolveAfter1Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 1000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter1Seconds();
//     console.log(result);
//     for (let i=0; i<10; i++) {
//         console.log(i);
//     }

//     // expected output: "resolved"
// }

// task 1
async function asyncForLoop(stop,time=1000,start=0,jump=1) {
    for (let i=start; i<stop; i+=jump) {
        await new Promise(resolve => {
            setTimeout(() => {
            resolve(i);
            }, time);
        }).then(result => {
            console.log(result);
        });
    }
}

asyncForLoop(10, 1000);

// task 2

async function asyncWhileLoop(stop,time=1000,start=0,jump=1) {
    let i = start;
    while (i< stop) {
        await new Promise(resolve => {
            setTimeout(() => {
            resolve(i+=jump);
            }, time);
        }).then(result => {
            console.log(result);
        })
    } 
} 

asyncWhileLoop(10, 1000);
