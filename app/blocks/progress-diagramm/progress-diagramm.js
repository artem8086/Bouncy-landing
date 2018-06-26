export default function refreshProgressDiagrams(elem) {
	$('.progress-diagramm').each(function () {
		$(this).find('.progress-diagramm__progress').css({
			width: $(this).attr('data-percent') + '%'
		});
	});
}