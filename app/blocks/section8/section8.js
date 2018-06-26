import refreshProgressDiagrams from '../progress-diagramm/progress-diagramm';

$(document).ready(function () {
	$('.sec8-slider').viewportChecker({
		callbackFunction: refreshProgressDiagrams
	});

	$('.sec8-info').mCustomScrollbar({
		alwaysShowScrollbar: 2,
		autoHideScrollbar: false,
		theme: 'green'
	});
});
