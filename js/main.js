$(function () {
	
	var nav = $(".nav");
	navPos = $('.header').height();

	$(window).scroll(function() {
	  if($(this).scrollTop() > navPos) {
	    nav.addClass("top-bar_fixed");
	  } 
	  else 
	  {
	    nav.removeClass("top-bar_fixed");
	  }
	});

	if ($(".top-bar__input").is(":focus")) {
		alert('1');
		$(".top-bar__search-icon").addClass("top-bar__search-icon_red");
	} 
	else 
	{
		$(".top-bar__search-icon").removeClass("top-bar__search-icon_red");
	}


});

