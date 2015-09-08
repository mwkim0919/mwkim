$(document).ready(function() {
	
	// scroll function
	$(function() {
		// match id name with class scroll and when that id has been clicked
		$('a[href*=#]:not([href=#]).scroll').click(function() {

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
				if (target.length) {
					// scroll to the div with the same id as the top.
					$('html,body').animate({
						scrollTop: target.offset().top
			        }, 500);
			        return false;
				}
		    }
		});
	});
	
	// table tab function
	var tabs = $('.tabs');	// for caching a selector

	$('.tab').hide();

	tabs.find('a').on('click', function(e){
		// this prevents jumping around the content.
		e.preventDefault(); //maybe no ;?

		// this line of code cancels highlight of the previous tab
		tabs.find('.current').removeClass('current');
		// this part highlights the current tab with a different color
		$(this).addClass('current'); //maybe no ;?

		// checks href attributes and shows the content
		// of the corresponding tab.
		// hide the sibling tab content.
		$(this.hash).show().siblings().hide();


	}).first().click();	// this clicks the first tab when started

});