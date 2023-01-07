// localStorage.setItem("ping", "pong");

// setTimeout(() => {
//     window.location = "../../src/base.html";
// }, 5000 )



// main script for the web app

let Data_Base;
let json = fetch('../../assets/users.json')
        .then(r => r.json())
        .then(data => {
            Data_Base = data;
     });

// let showUser = () =>{
//     alert("username: " + Data_Base.test_user.username + "\n password: " + Data_Base.test_user.password);
// }

function redirect(link) {
    window.location.assign(link);
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // setTimeout(() => {}, 2000);
    if (username == Data_Base.data_user.username && password == Data_Base.data_user.password) {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("username", Data_Base.data_user.username);
        redirect('../../website/src/index.html');
    } else {
        alert("Wrong username or password");
        localStorage.setItem("isLogin", false);
    }

 }


 



     
