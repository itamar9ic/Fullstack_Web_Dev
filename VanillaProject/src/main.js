// main script for the web app
try{
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
}catch {
    window.location = "../login/src/login.html"; 
}
