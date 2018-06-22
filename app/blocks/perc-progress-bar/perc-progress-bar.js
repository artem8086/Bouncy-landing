export default function setPercentAnimation(progressBar, duration) {
	var progress = progressBar.find('.c-percent__progress');
	var length = progress.attr('stroke-dasharray');
	length -= (progressBar.attr('data-percent') / 100) * length;
	progress.css({
		transitionDuration: duration,
		strokeDashoffset: length + 'px'
	});
}