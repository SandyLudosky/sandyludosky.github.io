$(document).ready(function() {

	//random bg image
	var numRand = Math.floor(Math.random()*10)
	$('style').html("body.f-topbar-fixed {background: url('img/"+ numRand +".png');background-size: cover;}")

	//setting height equal to window's height
	var height = $(window).height();
	var height_3 = height*60/100  
	var height_1 = (height*30/100)

	$('#welcome').css('height', height);
    $('#inner').css('height', height_3);
    $('#bottom').css('height', height_1);
	$('#work').css('height', height);
	

	// $('#contact').css('height', height);

    $('.diamond').on('mouseenter', function(){
    	console.log('hover');

    	$(this).find('.diamond_hover').fadeIn('slow');
    	$(this).find('.mask').fadeIn('slow');

    });

     $('.diamond').on('mouseleave', function(){
    	console.log('leave');
    	$(this).find('.diamond_hover').fadeOut('slow');
    	$(this).find('.mask').fadeOut('slow');

    });

     setInterval(function() {
     	$('#inner').fadeIn()
	}, 1000);

     setInterval(function() {
     	$('#bottom').fadeIn()
	}, 2000);


});