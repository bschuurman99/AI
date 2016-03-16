// $(document).ready(function() {
//   var numitems =  $("nav li").length;
//   $("nav ul").css("column-count",Math.round(numitems/2));
// });

$(window).onLoad(function(){console.log('geladen')});
$('nav').after().click(function(){$(this).toggle('slide') ,console.log('slideeee')});
