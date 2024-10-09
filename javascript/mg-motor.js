// $('.listitmmain').click(function(event) {
//     $(".listitms").removeClass("active-class");
//     $(this).find($(".listitms")).addClass("active-class"); 
// });

$(document).ready(function(){
    $(".accordion").click(function(){
        // Toggle the active class on the clicked accordion
        $(this).toggleClass("active");
        
        // Toggle between showing and hiding the panel
        var panel = $(this).next(".panel");
        panel.slideToggle();
        
        // Close other open panels
        $(".panel").not(panel).slideUp();
        $(".accordion").not(this).removeClass("active");
    });
});

//     $('a[href^="#"]').off();
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
       
//       const targetId = this.getAttribute('href');
//       const targetElement = document.querySelector(targetId);
//       const offset = 1000; // Adjust this to the height of your header
//       window.scrollTo({
//         top: targetElement.offsetTop - offset,
//         behavior: 'smooth' // This enables smooth scrolling
//       });
//     });
//   });

