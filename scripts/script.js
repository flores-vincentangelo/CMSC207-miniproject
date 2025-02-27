$(document).ready(function () {

    $("#enter").click(function (e) {
        e.preventDefault();
        $(".header-container").css("animation-name", "header-anim");
        $(".header-container").css("height", "30vh");

        $("#enter").css("animation-name", "nav-fade-anim");
        $("#enter").css("display", "none");

        $(".nav-container").css("animation-name", "nav-fade-anim");
        $(".nav-container").css("display", "flex")

    });

    $(".section-buttons").click(function (e) {
        // e.preventDefault();

        const previousNavItem = $(".selected").attr("id");
        console.log(previousNavItem);

        $(".section-buttons").removeClass('selected');
        $(`#${this.id}`).addClass('selected');

    })

    $("#fun-fact-btn").click(function (e) {
        e.preventDefault();
        $("#fun-fact").css("display", "none");
    });
})