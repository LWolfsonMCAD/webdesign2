$( document ).ready(function() {


//Homepage hover functions.
$('div#main-nav li').hover(function() {
	$(this).toggleClass('jQueryHover');

});

$('div.imagelink-row div.linkblock').hover(function() {
	$(this).find('div.overlay').toggleClass('jQImageHover');
});



});










