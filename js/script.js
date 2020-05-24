$(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if(scrollTop > 200) {
        $('html').addClass('scrolled')
    }
    else {
        $('html').removeClass('scrolled')
    }

    if(scrollTop > 500) {
        $('#header').fadeIn(400);
    }
    else{
        $('#header').fadeOut(400);
    }
})
$(".about").click(function() {
    var scrollPosition = $($(this).attr("data-target")).offset().top;
})