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
        e.preventDefault();

        const previousNavItem = $(".selected").attr("id");
        console.log(previousNavItem);

        $(".section-buttons").removeClass('selected');
        $(`#${this.id}`).addClass('selected');

        switch (this.id) {
            case "am-button":
                $("#am-container").css("display", "flex");
                $("#hni-container").css("display", "none");
                $("#ci-container").css("display", "none");
                break;
            case "hni-button":
                $(`#am-container`).addClass('section-move-away');
                $(`#hni-container`).addClass('section-move-to');
                $("#am-container").css("display", "none");
                $("#hni-container").css("display", "block");
                $("#ci-container").css("display", "none");

                break;
            case "ci-button":
                $("#am-container").css("display", "none");
                $("#hni-container").css("display", "none");
                $("#ci-container").css("display", "block");
                break;

            default:
                break;
        }

        // switch (previousNavItem) {
        //     case "am-button":
        //         $(`#am-container`).addClass('section-move-away');

        //         break;
        //     case "hni-button":

        //         $(`#hni-container`).addClass('section-move-away');
        //         break;
        //     case "ci-button":
        //         $(`#ci-container`).addClass('section-move-away');
        //         break;

        //     default:
        //         break;
        // }

    })

    $("#fun-fact-btn").click(function (e) {
        e.preventDefault();
        $("#fun-fact").css("display", "none");
    });
})