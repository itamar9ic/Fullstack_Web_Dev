// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!

$("#btn").click(function() {
    $("body").css("background-color" , "black");
});

$("#btn").click(function() {
    $("body").css("color" , "white");
});
$("#btn").click(function() {
    $("#btn").css("background-color" , "black");
});

$("#btn").click(function() {
    $("#btn").css("color" , "yellow");
});
// local storage
// css