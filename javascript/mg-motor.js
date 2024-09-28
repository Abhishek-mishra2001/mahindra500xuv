$('.listitmmain').click(function(event) {
    $(".listitms").removeClass("active-class");
    $(this).find($(".listitms")).addClass("active-class"); 
});