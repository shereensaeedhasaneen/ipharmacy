$(document).ready(function() {
    $("input[name$='type']").click(function() {
        var test = $(this).val();

        $("div.desc").slideUp(1000);
        $("#type" + test).slideDown(1000);
    });

    /////////// Select Location /////////////
    $('.selected-row').hide();
    $('select#location').change(function(){
        $('.selected-row').hide();
        var selectedCountry = $('select#location').children("option:selected").val();
        $("."+selectedCountry).slideDown(1000);
    })

    ///////////// specific medicin ///////////
    $(".medication").hide();
    $("input#transfer2").click(function() {
        $(".medication").slideDown(1000);
    });

    $("input#transfer1").click(function() {
        $(".medication").slideUp(1000);
    });

    ///////////// button display on click in checkbox ///////////////
   
    $("input#consent").click(function() {
        if($("input#consent").is(':checked')){
            $('button.transfer-btn').prop('disabled' ,false)
        }

        else{
            $('button.transfer-btn').prop('disabled' ,true)
        }
    });

});