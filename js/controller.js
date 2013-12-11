$(document).ready(function() {
	$('div.links a').smoothScroll();

	$('#change-speed').on('click', function() {
		var $p1 = $('div.chapters a').first(),
		    p1Opts = $p1.smoothScroll('options') || {};

		p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
		$p1.smoothScroll('options', p1Opts);
	});
})

// $('button.scrollsomething').on('click', function() {
// 	$.smoothScroll({
// 		scrollElement: $('div.intro'),
// 		scrollTarget: $('div.introduction')
// 	});
// 	return false;
// })