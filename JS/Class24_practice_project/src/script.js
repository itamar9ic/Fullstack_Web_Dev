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
    