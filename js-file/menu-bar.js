/*Js-Code für mobile devices*/
$(window).on("scroll touchmove", function () {
	$("header").toggleClass("tiny", $(document).scrollTop() > 0);
	/*$("header nav ul li").toggleClass("tiny", $(document).scrollTop() > 0);*/
	/*$("header nav ul").toggleClass("open", $(document).scrollTop() > 0);*/
	$("#logo").toggleClass("tiny", $(document).scrollTop() > 0);
	$(".fa-bars").toggleClass("tiny", $(document).scrollTop() > 0);
});

$(document).ready(function() {
	$(".fa-bars").on("click", function() {
		$("header nav ul").toggleClass("open");
	});

/*	$(".fa-bars.tiny").on("click", function() {
		$("header nav ul li").toggleClass("open");
	});
*/
	$("header nav ul li").on("click", function() { 
		$("header nav ul").removeClass("open");
	});

	$("section").on("click", function() {
		$("header nav ul").removeClass("open");
	});

});


