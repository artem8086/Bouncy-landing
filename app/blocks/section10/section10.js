$(document).ready(function () {
	$('.sec10-slider').slick({
		dots: true,
		dotsClass: 'slider__paging_vertical',
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		appendDots: $('.sec10-dots'),
		customPaging(slick, index) {
			return $('<a class="sec10-slider__button" tabindex="' + index + '">');
		}
	});
});