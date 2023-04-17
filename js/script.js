$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar-s-sticky').addClass("sticky");
        } else {
            $('.navbar-s-sticky').removeClass("sticky");
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar-sticky .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

});
