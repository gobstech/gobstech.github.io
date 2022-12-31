function darkMode() {
	var main = document.querySelector(".main");
	var btnsLinks = document.querySelector(".btn-default");

	main.classList.toggle("active");
	btnsLinks.forEach((btn) => {
		btn.classList.toggle("active");
	});
}
