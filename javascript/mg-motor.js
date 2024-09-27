$('.listitmmain > li').click(function(event) {
    event.stopPropagation(); 
    $(this).children('.listitms').slideToggle('slow'); 
    $('.listitms').not($(this).children('.listitms')).slideUp('slow'); 
});