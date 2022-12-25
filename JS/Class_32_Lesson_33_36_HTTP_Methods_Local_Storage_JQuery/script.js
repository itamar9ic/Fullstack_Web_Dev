
// let f = () => {
//     $("p").toggle();
//     $("#h2").css("background-color", "blue").css("color", "white");
//     $('[href*="www.google.com"]').css('color', 'red');

// }


//     // code goes here
// $("button").click(f).keypress(f); // if we use defer in the script tag, we don't need this... but it's good practice to use it anyway

// Lesson 35
// task 1
$(".btn-hide").click(() => {
    $(".hw").hide();
});

// task 2
$("p").click(function() {
    $(this).hide();
});

// task 3
$(".btn-hide-first").click(() => {
    $("p:first").hide();
});

// Lesson 36
// task 1
$(".hw").mouseenter(function() {
    $(this).css("background-color" , "red");
});
$(".hw").mouseleave(function() {
    $(this).css("background-color" , "white");
});

// task 2
$(".db-click").dblclick(() => {
    $("h5").text("you clicked twice")
});

// task 3
$("h5").mouseenter(function() {
    $(this).css("color" , "red");
});
$("h5").mouseleave(function() {
    $(this).css("color" , "green");
});



