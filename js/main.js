$(document).ready(function(){
    setBackgroundImgSize();
    $(window).on('resize',function(){
	setBackgroundImgSize();
    }); 

    $('a.scroll-link').on('click',function(ev){
	ev.preventDefault();
	var $link = $(this);
	var target = $link.attr('href');
	if(target) {
	    $('html, body').animate({
		scrollTop: $(target).offset().top
	    }, 1000);
	}
    });

    function setBackgroundImgSize(){
	var h = $(window).height();
	var w = $(window).width();
	$('.main').css({'min-height':h*0.9});
	if(w <= 768){
	    $('.main').css({'background-position-x':'-291px'});
	}
	else {
	    $('.main').css({'background-position-x':'0px'});
	}
	
    }
});
