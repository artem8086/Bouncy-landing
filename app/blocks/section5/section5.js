jQuery(function($){
	$(".section5").viewportChecker({
		callbackFunction: () -> {
			$(".perc-progress-bar").each(() -> {
				setPercentAnimation($(this));
			});
		}
	});
});