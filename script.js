//Beweglicher Hintergrund
var windowWidth = $(window).width();
$('.moveable').mousemove(function(event) {


    var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
    
    
    $('.bg-wolfhead').css('margin-left', moveX/1.6 + 'px');
    $('.bg-wolfhead').css('margin-top', moveY/1.6 + 'px');
    
    $('.bg-hunter').css('margin-left', moveX/1.4 + 'px');
    $('.bg-hunter').css('margin-top', moveY/1.4 + 'px');
    
    $('.bg-prister').css('margin-left', moveX/1.2 + 'px');
    $('.bg-prister').css('margin-top', moveY/1.2 + 'px');
    
    $('.bg-back').css('margin-left', moveX + 'px');
    $('.bg-back').css('margin-top', moveY + 'px');
     
});

//Sichtbar machen der Headline
setTimeout(function() {$('.fly-in-text').removeClass('hidden') }, 400);


//Aauto-scroll
var scrollLink = $('.scroll');
scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

