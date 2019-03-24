/*Js-Code für mobile devices*/
$(document).ready(function() {
	$(".fa-bars").on("click", function() {
		$("header nav ul").toggleClass("open");
	});

	$("header nav ul li").on("click", function() { 
		$("header nav ul").removeClass("open");
	});

	$("section").on("click", function() {
		$("header nav ul").removeClass("open");
	});
});

