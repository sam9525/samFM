$(document).ready(function () {
	$("body").on("click", function (event) {
		console.log($(event.target))
		if ($(event.target).hasClass("nav-title")) {
			$(event.target).parent(".nav-box").toggleClass("active");
			$(event.target).siblings(".nav-content").slideToggle("300");
		}if ($(event.target).hasClass("icon-add")) {
			$(event.target).parent(".nav-title").parent(".nav-box").toggleClass("active");
			$(event.target).parent(".nav-title").siblings(".nav-content").slideToggle("300");
		}
				
		if($(event.target).hasClass("para")){
			$(event.target).siblings(".like").toggleClass("active");
		}
	});
	$("button").click(function() {
		$(".navbar").toggle();
	}); 
	if (screen.width > 375){
		$(".navbar").show(function(){
			setTimeout(function(){
				$('.navbar').hide();
			}, 5000)
		})
	}
});