$( document ).ready(function() {
	var
		blocklink_section = $("div.site-sections"),
		blocklink_info = $("div.block-link div.more-info"),
		blocklink = $("div.block-link"),
		desktop_blocklinks = $("div.site-sections.jsBlocks"),
		mobileNav = $("div#mobile-navigation")
	;





//Override default styles
    $( blocklink_info ).hide();
	

	//Mobile Menu
	$("img#hamburger_icon").on('click', function(){
		$( "div#mobile-navigation" ).toggle();
	});	

    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);


	//Function to the css rule
	function checkSize(){
    	if ($( "img#hamburger_icon" ).css("display") == "block" ){
    		$( blocklink_section ).removeClass( "jsBlocks" );
    		$( blocklink_info ).show();

    	}

    	if ($( "img#hamburger_icon" ).css("display") == "none" ){
    		$( blocklink_section ).addClass( "jsBlocks" );
    		$( blocklink_info ).hide();
    		$( mobileNav ).hide();
    		desktopSiteSectionHover();

    	}

	}


	function desktopSiteSectionHover() {
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

	}


});










