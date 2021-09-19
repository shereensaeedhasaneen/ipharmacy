function validate() {
            
    var valid = true;
    valid = checkEmpty($("#name"));
    valid = valid && checkEmail($("#email"));
    valid = valid && checkPhone($("#phone"));
    valid = valid && checkMessage($("#message"));
    
    $("#send-button").attr("disabled",true);
    if(valid) {
        $("#send-button").attr("disabled",false);
    }	
}
function checkEmpty(obj) {
    var name = $(obj).attr("name");
    $("."+name+"-validation").html("");	
    $(obj).css("border","");
    if($(obj).val() == "") {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html("Name is Required");
        return false;
    }
    
    return true;	
}
function checkEmail(obj) {
    var result = true;
    
    var name = $(obj).attr("name");
    $("."+name+"-validation").html("");	
    $(obj).css("border","");
    
    result = checkEmpty(obj);
    
    if(!result) {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html(  "Email is Required");
        return false;
    }
    
    var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    result = email_regex.test($(obj).val());
    
    if(!result) {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html( "<i class='fas fa-times-circle'></i>" +" "+"Invalid Email Address" );
        return false;
    }
    
    return result;	
}


function checkPhone(obj){
    var result = true;
    
    var name = $(obj).attr("name");
    $("."+name+"-validation").html("");	
    $(obj).css("border","");
    
    result = checkEmpty(obj);
    
    if(!result) {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html("Phone is Required");
        return false;
    }
    
    var phone_regex = /^01[0-2,5]{1}[0-9]{8}$/;
    result = phone_regex.test($(obj).val());
    
    if(!result) {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html( "<i class='fas fa-times-circle'></i>" +" "+"Invalid Phone Number" );
        return false;
    }
    
    return result;	
}

function checkMessage(obj){
    var name = $(obj).attr("name");
    $("."+name+"-validation").html("");	
    $(obj).css("border","");
    if($(obj).val() == "") {
        $(obj).css("border","#FF0000 1px solid");
        $("."+name+"-validation").html(" Message is Required");
        return false;
    }
    
    return true;	
}
