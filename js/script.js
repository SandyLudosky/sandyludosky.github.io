$(document).ready(function() {
	 
	  // to use the window height
	 var height = $(window).innerHeight() - 42;

   console.log(height);

   $('#home').css('height', height);

   setInterval(function() {

    $('.inConstruction')  
        .fadeIn('slow')
        .addClass('bounceInLeft')        
    }, 1500);


});