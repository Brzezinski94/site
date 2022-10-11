const scroll = new SmoothScroll('.menu a[href*="#"]', {
	speed: 500
});
$(function() {
    $('html, body').animate({scrollTop:0},1500);
  });