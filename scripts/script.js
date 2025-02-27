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
        // console.log(this)
        // console.log(this.id)

        const linkSelectedCss = {
            "color": "white",
            "background-color": "var(--orange)",
            "border": "3px solid, var(--orange)",
            "border-radius": "15px",
        }

        const linkClearCss = {
            "border": "none",
            "background-color": "transparent",
            "color": "black"
        }

        switch (this.id) {
            case "am-button":
                $("#am-container").css("display", "block");
                $("#hni-container").css("display", "none");
                $("#ci-container").css("display", "none");

                $(".section-buttons").css(linkClearCss);
                $(`#${this.id}`).css(linkSelectedCss);
                break;
            case "hni-button":
                $("#am-container").css("display", "none");
                $("#hni-container").css("display", "block");
                $("#ci-container").css("display", "none");
                $(".section-buttons").css(linkClearCss);
                $(`#${this.id}`).css(linkSelectedCss);
                break;
            case "ci-button":
                $("#am-container").css("display", "none");
                $("#hni-container").css("display", "none");
                $("#ci-container").css("display", "block");
                $(".section-buttons").css(linkClearCss);
                $(`#${this.id}`).css(linkSelectedCss);
                break;

            default:
                break;
        }
    })

    $("#fun-fact-btn").click(function (e) {
        e.preventDefault();
        $("#fun-fact").css("display", "none");
    });
})