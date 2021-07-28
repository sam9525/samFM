$(document).ready(function () {
	$("body").on("click", function (event) {
		console.log($(event.target))
		if ($(event.target).hasClass("nav-title")) {
			$(event.target).parent(".nav-box").toggleClass("active");
			$(event.target).siblings(".nav-content").slideToggle("300");
		}		
		if($(event.target).hasClass("bottom")){
			$(event.target).child(".like").toggleClass("active");
		}
	});
});