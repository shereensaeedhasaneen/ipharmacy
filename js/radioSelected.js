$(document).ready(function() {
    $("input[name$='type']").click(function() {
        var test = $(this).val();

        $("div.desc").slideUp(1000);
        $("#type" + test).slideDown(1000);
    });
});