import '../blocks/slider/slider';
import '../blocks/section5/section5';
import '../blocks/section7/section7';
import '../blocks/section8/section8';
import '../blocks/section10/section10';

$(document).ready(function () {
	function smoothScroll(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	}

	const menuLink = '.main-nav__link';
	const activeClass = 'main-nav__link_active';

	$(menuLink).on('click', function (event) {
		console.log(this);
		$(menuLink).removeClass(activeClass);
		$(this).addClass(activeClass);
		smoothScroll.call(this, event);
	});

	$('.round-button').on('click', smoothScroll);
});