(function($) {
	$('[bg]').each(function(){
		$(this).css('background-image','url(images/'+$(this).attr('bg')+'.jpg)');
	});


	$('[hamburger]').click(function() {
		console.log('hamburger');
		$('nav, [icon], [scrim]').toggleClass('extended');
	});

	$('[scrim]').click(function() {
		$('nav, [icon], [scrim]').removeClass('extended');
		console.log('scrim');
	});

	$('nav ul').click(function(event){
	    event.stopPropagation();
	});

	$('nav a').click(function(event){
		$('nav, [icon], [scrim]').removeClass('extended');
		$('html, body').stop().animate({scrollTop: Math.round($($(this).attr('href')).offset().top) - ($(window).innerWidth()>1263?67:0)}, 750);
	});

	$('[totop]').click(function(){
		$('html, body').animate({scrollTop:0},750);
	});

	var $totop = $('[totop]');

	$(window).scroll(function() {
		var pxFromTop = $(window).scrollTop();
		var scroll = Math.min(pxFromTop/300, 1);

		if (pxFromTop > 0 && $totop.hasClass('ontop')) $totop.removeClass('ontop');
			else if (pxFromTop <= 0 && !$totop.hasClass('ontop')) $totop.addClass('ontop');

		$('nav').css({'background-color':'rgba(255, 255, 255, '+ scroll +')','box-shadow':'0px 0px 6px rgba(0, 0, 0, ' + scroll * 0.6 + ')'});
		$('nav a').css('color','hsla(180, 80%, ' + (100 - scroll * 100) + '%, ' + (1 - scroll * 0.13) + ')');

	});

	setTimeout(function(){ if (window.location.hash && $(window).innerWidth()>1263) $('html, body').stop().animate({scrollTop: Math.round($(window.location.hash).offset().top) - 67}, 100);},500);
}($));
