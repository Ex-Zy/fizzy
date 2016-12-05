$(document).click(function(e) {
	var allDocExeptSelect 		= !$(e.target).closest('.js-select').length,
		allDocExeptPopupAndCart = !$(e.target).closest('.js-popup').length && 
								  !$(e.target).closest('.js-cart').length;

	if(allDocExeptSelect) {
		$('.js-select').removeClass('is-active');
		$('.js-select').find('.js-select-content')
					   .slideUp(200);
	}

	if (allDocExeptPopupAndCart) {
		$('.js-popup').add('.js-overlay')
					  .removeClass('is-active');
		$('body').removeClass('is-hidden');
	}
});