(function() {

	var allSelects  = $('.js-select'),
		allContents = $('.js-select-content'),
		duration 	= 200;

	function showContent(select, content) {
		select.addClass('is-active');
		content.slideDown(duration);
	}

	function hideContent(select, content) {
		select.removeClass('is-active');
		content.slideUp(duration);
	}

	$('.js-select-value').click(function() {
		var that = $(this),
			parent = that.parents('.js-select'),
			content = parent.find('.js-select-content');

		if(!parent.hasClass('is-active')) {
			hideContent(allSelects, allContents);
			showContent(parent, content);
		} else {
			hideContent(parent, content);
		}
	});

	$('.js-select-link').click(function(e) {
		e.preventDefault();

		var that = $(this),
			value  = that.text(),
			select = that.parents('.js-select');

		select.find('.js-select-value').text(value);
		select.removeClass('is-active');
		select.find('.js-select-content').slideUp(duration);
	})

})();