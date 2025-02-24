$(document).ready(function () { 
    $(".section-buttons").click(function (e) { 
        e.preventDefault();
    });

    $("#am-button").click(function (e) { 
        console.log("clicked");

        $("#am-container").css("display", "block");
        $("#hni-container").css("display", "none");
        $("#ci-container").css("display", "none");
    });
    
    $("#hni-button").click(function (e) { 
        console.log("clicked");

        $("#am-container").css("display", "none");
        $("#hni-container").css("display", "block");
        $("#ci-container").css("display", "none");
    });

    $("#ci-button").click(function (e) { 
        console.log("clicked");

        $("#am-container").css("display", "none");
        $("#hni-container").css("display", "none");
        $("#ci-container").css("display", "block");
    });

    $("#fun-fact-btn").click(function (e) { 
        e.preventDefault();
        $("#fun-fact").css("display", "none");
    });
})