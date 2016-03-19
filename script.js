// $(document).ready(function() {
//   var numitems =  $("nav li").length;
//   $("nav ul").css("column-count",Math.round(numitems/2));
// });

var n = false;

$('[hamburger]').click(function() {
	$('nav, [icon]').toggleClass('extended');
 	n = true;
});

$('nav').click(function() {
	if (!n) {	$('nav').removeClass('extended');};
	n = false;
});

$('nav ul').click(function(event){
    event.stopPropagation();
});

$('nav a').click(function(event){
	$('nav').removeClass('extended');
});

$('nav a').click(function() {
  $('html, body').animate({scrollTop: Math.round($($(this).attr('href')).offset().top)}, 750);
});

$('[totop]').click(function(){
	$('html, body').animate({scrollTop:0},750);
});

$(window).scroll(function() {
		if($(window).scrollTop() > 0) {
				$('[totop]').removeClass('ontop');
		} else {
				$('[totop]').addClass('ontop');
		}
});
