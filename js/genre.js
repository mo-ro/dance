$(function() {
	$('.genre-title').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv01');
		}
		else{
			$(this).stop().removeClass('mv01');
		}
	});
});