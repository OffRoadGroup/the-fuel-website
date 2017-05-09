$(document).ready(function(){
	$("#accordeon h6").click(function(){
		$("#accordeon ul ul").slideUp();
		if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});
	$('.menuIcon').click(function(e) {
		e.preventDefault();
		$('.menu-content').slideToggle(200);
	});

	// about page event listener
	$('.about-header').on('click', function(){
        $('.about-header').html(`<iframe width="100%" height="500" src="https://www.youtube.com/embed/` + aboutVideoId + `" frameborder="0" allowfullscreen></iframe>`)
    })

})