
$(document).ready(function(){ 
 //----------------go to top---------------------//
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

        $('.tablinks').click(function(){
            $("html, body").animate({ scrollTop: 800 }, 600);
            return false;
        });
//-------------------------------------------------// 
$("#main-slider").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true,
      // item: 1,
      autoPlay: true,
      loop: true
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
//---------------------------//
var url = window.location.href.toLowerCase();

    $(".navbar-default li a").each(function() {

        var $this = $(this);

        var href = $this.attr("href").toLowerCase();

        if(url.indexOf(href) > -1) {
            $this.addClass("active");            
        }           
    });
//--------------------------//	    
$('.fancybox').fancybox();

//-----------------------//

	
$( ".iamlink" ).click(function() {
  $( ".iam-dropdown" ).toggle();
});
//----------------------//	
$( ".patient" ).click(function() {
  $( ".patient-dropdown" ).show();
});
	
$( ".dropdown-menu a,.health" ).click(function() {
  $( ".patient-dropdown" ).hide();
});
	
$( ".health" ).click(function() {
  $( ".health-dropdown" ).show();
});
$( ".dropdown-menu a,.patient" ).click(function() {
  $( ".health-dropdown" ).hide();
});
//----------------------//	
});
