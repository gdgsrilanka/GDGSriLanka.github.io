$(document).ready(function(){
  $('.stories-slider').height($('.stories-list').height());
  $('.stories-slider').slick({
	dots: true,
  	infinite: true,
  	speed: 300,
  	autoplay: true
  });
});
