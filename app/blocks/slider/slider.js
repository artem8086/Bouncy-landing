$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		dotsClass: 'slider__paging',
		arrows: false,
		customPaging(slick, index) {
			return $('<a class="slider__button" tabindex="' + index + '">');
		}
	});
});