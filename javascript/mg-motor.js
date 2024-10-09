$(document).ready(function(){
    $(".accordion").click(function(){
        $(this).toggleClass("active");
        var panel = $(this).next(".panel");
        panel.slideToggle();
        $(".panel").not(panel).slideUp();
        $(".accordion").not(this).removeClass("active");
    });
});



