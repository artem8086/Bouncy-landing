$(document).ready(function () {
	$('.sec7-slider').slick({
		dots: true,
		appendDots: $('.sec7-selector'),
		dotsClass: 'sec7-slider__paging',
		arrows: false,
		customPaging(slick, index) {
			return $('<a class="sec7-selector__button" tabindex="' + index + '">')
				.text($(slick.$slides.get(index)).find('.sec7-page').attr('page-name'));
		}
	});
});
