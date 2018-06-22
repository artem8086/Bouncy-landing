import setPercentAnimation from '../perc-progress-bar/perc-progress-bar'
 
$(document).ready(function () {
	$(".sec5-diagrams").viewportChecker({
		callbackFunction: function () {
			$(".perc-progress-bar").each(function () {
				setPercentAnimation($(this), '1.3s');
			});
		}
	});
});
