$(document).scroll(function(){
	var height = $(window).height();

    var y = $(this).scrollTop();
    if (y > 200) {
          console.log('scroll');
          $('.fixed nav').fadeIn('slow')
	     		
     }
});
