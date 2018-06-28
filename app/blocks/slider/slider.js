$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		dotsClass: 'slider__paging',
		infinite: false,
		arrows: false,
		customPaging(slick, index) {
			return $('<a class="slider__button" tabindex="' + index + '">');
		}
	});
});