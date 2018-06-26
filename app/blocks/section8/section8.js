import refreshProgressDiagrams from '../progress-diagramm/progress-diagramm';

$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		dotsClass: 'slider__paging',
		arrows: false,
		customPaging(slick, index) {
			return $('<a class="slider__button" tabindex="' + index + '">');
		}
	});

	$('.sec8-slider').viewportChecker({
		callbackFunction: refreshProgressDiagrams
	});
});
