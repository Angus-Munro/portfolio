$(document).ready(function () {
	// || Fade-in on scroll animation for header and sections
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	});
	const hiddenElements = document.querySelectorAll(".hidden");
	hiddenElements.forEach((el) => {
		observer.observe(el);
	});

	// || Action button
	// action-btn-border copy dimensions of btn
	$(".action-btn-border").outerHeight($(".action-btn").outerHeight());
	$(".action-btn-border").outerWidth($(".action-btn").outerWidth());

	// || Project button
	// onClick navigate to project page
	$("#project1-btn").on("click", function () {
		window.location.href = "project1.html";
	});
	$("#project2-btn").on("click", function () {
		window.location.href = "project1.html";
	});
	$("#project3-btn").on("click", function () {
		window.location.href = "project1.html";
	});
	$("#project4-btn").on("click", function () {
		window.location.href = "project1.html";
	});
});
