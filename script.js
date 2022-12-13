function darkMode() {
	var main = document.querySelector(".main");
	var icon = document.querySelector(".icon");
	var btnsLinks = document.querySelector(".btn-default");

	main.classList.toggle("active");
	icon.classList.toggle("active");
	btnsLinks.forEach((btn) => {
		btn.classList.toggle("active");
	});
}