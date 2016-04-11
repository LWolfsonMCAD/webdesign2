$( document ).ready(function() {
	var
		viewButtons = $("div.toggleButtons button"),
		readableRecipe = $("div.recipeInstructions div.readableRecipe"),
		videoRecipe = $("div.recipeInstructions div.videoRecipe"),
		startingButton = $("div.toggleButtons button#readRecipeBtn"),
		startingSection = $( readableRecipe )
	;


//Override default styles
	$( startingButton ).addClass( "currentView" );

	$( startingSection ).addClass( "currentSection" );

	$( videoRecipe ).addClass( "inactive" );


//Toggle recipe view based on user's choice.

	$( viewButtons ).on('click', function() {
		previousButton = $( "button.currentView" ),
		previousSection = $( "div.currentSection" );

		$( this ).toggleClass( "currentView" );

		$( previousButton ).toggleClass( "currentView" );

			$( videoRecipe )
				.toggleClass( "inactive currentSection" );
			$( readableRecipe )
				.toggleClass( "currentSection inactive" );
		
	});


//Popup for ProTip.

	$('span.info').mouseenter(function() {
	      // $('img.hover-image').remove();
	      $(this).append('<img class="hover-image" src="img/coolingrack_protip.jpg"/>')
	    }).mouseleave(function() {
	      $('img.hover-image').remove();
	    })
	



});










