$(".listitmmain").click(function() {
    $(".listitms").removeClass("active-class")
    $(this).find(".listitms").addClass("active-class");
})