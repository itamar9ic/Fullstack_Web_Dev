// $(document).ready(function() {
//     $('#box').click(function() {
//         $(this).animate({
//             right: '+=500px',
//         }, 1000, function() {
//           $(this).animate({top: '+=250px'}, 1000).fadeOut(1000); // we can chain animations!
//         });
//       });
//     }); 


// $(document).ready(function() {
//         $("#btn-display").click(function() {
//             $("#box2").fadeToggle("fast");
//             $("#box").css("background-color", "#ff0000");
//         })});




// // "fliping cards" animation without animate
// $(document).ready(function() { 
//   $('#card').click(function() {
//     $(this).toggleClass('flip');
//   });
// });

// // "fliping cards" animation with animate

// //1
// $(document).ready(function() {
//     $("#btn-click").click(function() {
//         $("#hw").html(`<mark> Hello </mark>`)
//     });

// //2
//     $("#btn-attr").click(function() {
//         $("#hw").text($("#hw").attr("id"));
//     });

// //3
//     $("#btn-show").click(function() {
//         $("#hw").text($("#input").val());
//     });

// });

// lesson 37
$(document).ready(function() {
    $("#hw").click(function() {
        $(this).animate({
            top:"500px",
        },1000, function() {
            $(this).animate({left:"500px"},1000).fadeOut(1000);

        });
    });
});
$(document).ready(function() {
        $("#btn-show").click(function() {
            $("#box1").fadeToggle("fast");
        });
        $("#btn-color").click(function() {
            $("#box2").css("background-color", "#ff0000");
        })});

// lesson 38
$(document).ready(function() {
    $("#btn-show-text").click(function() {
        $("#text-id").html("this is a <mark>test</mark>")
    });
});
    $("#btn-show-attr").click(function() {
        $("#text-id").text($("#text-id").attr("id"));
    });
    $("#btn-show-val").click(function() {
        $("#text-id").text($("#val").val());
    });


// lesson 39
$(document).ready(function() {
    $("#btn-add-text-before").click(function() {
        $("#hwbefore").before("<mark> first text now </mark>");
    });
});
let i = 0
    $("#btn-add").click(function() {
        i++;
        $("ul").append("<li>this is a new player</li>");
    });
    $("#delete").click(function() {
        $("li").remove();
    });
