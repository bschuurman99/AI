$('[hamburger]').click(function() {
	$(this).parent().toggleClass('extended');
});

$('html').click(function() {
	$('nav').removeClass('extended');
});

$('nav').click(function(event){
    event.stopPropagation();
});

$('nav a').click(function(event){
	$('nav').removeClass('extended');
});

$('a').click(function() {
	console.log($(this).attr('href'));
});


// van http://jsfiddle.net/49u2q/6/
$.fn.toggleAttr = function(attr, val) {
	return this.each(function() {
		var $this = $(this);
		if ($this.is("[" + attr + "]")) {
			$this.removeAttr(attr);
		} else {
			$this.attr(attr, val);
		}
	});
}
