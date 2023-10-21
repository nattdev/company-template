var menu_top = document.querySelector("#header").offsetHeight;
document.addEventListener("scroll", function() {
	var menu_fixed = document.querySelector("#header");
	if (window.scrollY > menu_top || window.innerWidth <= 1270) {
		menu_fixed.style.background = "rgb(var(--main-bg-color), 0.50)";
		menu_fixed.style.display = "flex";
	} else {
		menu_fixed.style.background = "transparent";
	}
});
