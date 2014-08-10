$(document).scroll(function(){
	var height = $(window).height();

    var y = $(this).scrollTop();
    if (y > 200) {
          console.log('scroll');
          $('.fixed nav').fadeIn('slow'); 
          $('.name').find('span').text('- MY WORKS -')    		
    } else {
    	  $('.name').find('span').text('')  
    }



  
});
