$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__link').toggleClass('active');
	});
});
document.addEventListener('DOMContentLoaded', function () {
	new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
	});
	new ChiefSlider('.slider-2', {
		swipe: true,
		});
  });