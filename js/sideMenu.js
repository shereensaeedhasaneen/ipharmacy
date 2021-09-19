/*$(document).ready(function(){

    var selectedCountry = $('select#location').children("option:selected").val();
    if(selectedCountry=="Select a Location"){
        //$('select#location').addClass("errorValidation");
        $('.requestRefillbtn').prop("disabled",true);
    }


    $('select#location').change(function(){
        $('.requestRefillbtn').prop("disabled",false);
    })
    $(".requestRefillbtn").click(function(){
       var selectedCountry = $('select#location').children("option:selected").val();

        
       if(selectedCountry=="Millwoods"){
            location.href="./millwoods.html";
        }

        if(selectedCountry=="Chinatown"){
            window.location.href="./chinatown.html";
        }

        if(selectedCountry=="Downtown"){
            window.location.href="./downtown.html";
        }

        if(selectedCountry=="Highway 16"){
            window.location.href="./spruce Grove.html";
        }

        if(selectedCountry=="Salvation"){
            window.location.href="./salvation.html";
        }

       
    });

    
});

*/


function openNav() {
    document.getElementById("mySidenav").style.width = "95%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }