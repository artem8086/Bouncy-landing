export default function setPercentAnimation(progressBar, duration) {
	const progress = progressBar.find('.c-percent__progress');
	let length = progress.attr('stroke-dasharray');
	length -= (progressBar.attr('data-percent') / 100) * length;
	progress.css({
		transitionDuration: duration,
		strokeDashoffset: length + 'px'
	});
}
