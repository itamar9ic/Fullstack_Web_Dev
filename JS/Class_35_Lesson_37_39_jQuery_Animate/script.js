$(document).ready(function() {
    $(".hw").click(function() {
        $(this).animate({
            top:"500px",
        },1000, function() {
            $(this).animate({
                left:"500px"},1000).fadeOut(1000);

        });
    });
});