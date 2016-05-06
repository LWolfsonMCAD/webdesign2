$( document ).ready(function() {
	var
		blocklink_info = $("div.block-link div.more-info"),
		blocklink = $("div.block-link")
	;


//Override default styles
	$( blocklink_info ).hide();


	$( blocklink ).on ({
		mouseenter: function() {
			$( this )
				.find( blocklink_info )
				.slideDown(600);
		},

		mouseleave: function() {
			$( this )
				.find( blocklink_info )
				.slideUp(600);
		}
	});

});










