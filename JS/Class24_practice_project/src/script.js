let Data_Base;
// let Username;
// let Password;

let json = fetch(`.../data_base`)
        .then(r => r.jason())
        .then(data => {
        Data_Base = data;
        // Username = Data_Base.test_user.username;
        // Password = Data_Base.test_user.password;
     })

let showUser = () => {
    alert("username: " + Data_Base.test_user.username + " password: " + Data_Base.test_user.password);
}

function redierct(link) {
    location.assign(link);
}


function login() {
   let json = fetch("./data_base.json")
   .then
    // let data_base = JSON.parse()
    let sUserName = document.getElementById("user_name").value;
    let sPassword = document.getElementById("password").value;

    if (sUserName + sPassword === data_base.json) {
     alert("wellcome username");
    } else {
     alert("login failed"); 
    }
console.log(json);
 }

//  function fetchData(){
//     let json = fetch("./data_base.json")
//     .then(response => response.json())
//     .then(data => console.log(data));
    
//     console.log(json);
//     }
    