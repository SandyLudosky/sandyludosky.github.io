
 $(document).ready(function() {
	 
	  // to use the window height
	 var height = $(window).height();
	 var width = $(window).width();
   var window_height = (height*3)+250;

    console.log(window_height);

   $('#home, #contact').css('height', height);

   $('.portfolio-item').on('mouseenter', function(){
          $(this).find('.item_title').fadeIn('slow');
   });

    $('.portfolio-item').on('mouseleave', function(){
          $(this).find('.item_title').fadeOut('slow');
  
   });

    $('#udemy').css('top',window_height);	
	
 
	   
	   
	 
	
	
  $(window).scroll(function () {    

    var scroll = $(window).scrollTop();
    if (scroll>150) {
  	$('nav').fadeIn('slow');
    } else {
  	$('nav').fadeOut('slow');
    }
  });

   // jQuery for page scrolling feature - requires jQuery Easing plugin
   $(function() {
      $('.page-scroll a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
      });
  });

});