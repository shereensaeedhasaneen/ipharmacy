$(document).ready(function(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header-mobile").addClass("changeHeaderBackground");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header-mobile").removeClass("changeHeaderBackground");
        }
    });
})