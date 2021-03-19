setInterval(() => {
	try {
		document.querySelector(".os-content-arrange").remove();
	} catch (e) {}

	var els = Array.from(
		document.querySelectorAll("ul.accordion-content a"),
	).filter((el) => el.innerText.startsWith("exports."));
	for (var i = 0; i < els.length; i++) {
		els[i].innerText = els[i].innerText.replace(/^exports\./, "");
	}
}, 100);
