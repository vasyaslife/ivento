$(function () {
	
	var nav = $(".nav");
	navPos = $('.header').height();

	$(window).scroll(function() {
	  if($(this).scrollTop() > navPos) {
	    nav.addClass("top-bar_fixed");
	  } else {
	    nav.removeClass("top-bar_fixed");
	  }
	});

	
});

