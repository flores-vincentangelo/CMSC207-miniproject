$(document).ready(function () {

	let isHeaderLarge = true;

	$("#enter").click(function (e) {
		e.preventDefault();
		$(".header-container").css("animation-name", "header-anim");
		$(".header-container").css("height", "30vh");

		$("#enter").css("animation-name", "nav-fade-anim");
		$("#enter").css("display", "none");

		$(".nav-container").css("animation-name", "nav-fade-anim");
		$(".nav-container").css("display", "flex")

		$(".title h1").css("cursor", "pointer");

		isHeaderLarge = false;

	});

	$(".title h1").click(function (e) {
		if (!isHeaderLarge) {
			$(".header-container").css("animation-name", "header-anim-rev");
			$(".header-container").css("height", "100vh");

			$("#enter").css("animation-name", "nav-fade-anim-rev");
			$("#enter").css("display", "block");

			$(".nav-container").css("animation-name", "nav-fade-anim-rev");
			$(".nav-container").css("display", "none");
			$(".title h1").css("cursor", "auto");

			isHeaderLarge = true;
		}
	})

	$(".section-buttons").click(function (e) {
		// e.preventDefault();

		const previousNavItem = $(".selected").attr("id");
		console.log(previousNavItem);

		$(".section-buttons").removeClass('selected');
		$(`#${this.id}`).addClass('selected');

	})

	$("#fun-fact-btn").click(function (e) {
		e.preventDefault();
		$("#fun-fact").css("display", "block");
	});
})