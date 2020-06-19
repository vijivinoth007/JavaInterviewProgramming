
function executeScrollfun()
{
    var headerPosition = $('header').position().top;

$(window).on('scroll', function () {
    var scrollPosition = $(window).scrollTop();
    
    if (scrollPosition >= headerPosition) {
        $('header').addClass(' nav-scrolled');
    } else {
        $('header').removeClass(' nav-scrolled');
    }
});
}

