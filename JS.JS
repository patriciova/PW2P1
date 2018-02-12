$(function() {
	$('.card').click(function() {
  	if ($(this).hasClass('card--open')) {
    	$(this).removeClass('card--open');
    } else {
    	$(this).addClass('card--open');
    }
  });
  
})