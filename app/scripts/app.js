/*import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});*/

jQuery(function ($) {
	function setPercentAnimation(progressBar, duration) {
		var progress = progressBar.find('.c-percent__progress');
		console.log(progress);
		var length = progress.attr('stroke-dasharray');
		var offset = length - (progressBar.attr('data-percent') / 100) * length;
		progress.css({
			transitionDuration: duration,
			strokeDashoffset: offset + 'px'
		});
	}

	$(".sec5-diagrams").viewportChecker({
		callbackFunction: function () {
			$(".perc-progress-bar").each(function () {
				setPercentAnimation($(this), '1.3s');
			});
		}
	});
});