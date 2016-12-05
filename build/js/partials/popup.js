(function() {
	var cart 	= $('.js-cart'),
		overlay = $('.js-overlay'),
		popup 	= $('.js-popup'),
		body 	= $('body'),
		close 	= $('.js-close');

	function addClasses(el1, el2, el3) {
		el1.add(el2).addClass('is-active');
		el3.addClass('is-hidden');
	}

	function removeClasses(el1, el2, el3) {
		el1.add(el2).removeClass('is-active');
		el3.removeClass('is-hidden');
	}

	cart.click(function() {
		addClasses(overlay, popup, body);

	});

	close.click(function() {
		removeClasses(overlay, popup, body);
	});
	
})();