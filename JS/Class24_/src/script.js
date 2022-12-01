function onsigninbutton() {
    
    let sUserName = document.getElementById("user_name").value;
    let sPassword = document.getElementById("password").value;

    if (sUserName === 'username' && sPassword === 'password' || sUserName === 'itamar' && sPassword === '1234') {
     alert("wellcome username");
    } else {
     alert("login failed"); 
    }

 }

 function fetchData(){
    let json = fetch("./data_base.json")
    .then(response => response.json())
    .then(data => console.log(data));
    
    console.log(json);
    }
    