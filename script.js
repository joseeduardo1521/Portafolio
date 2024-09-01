$(document).ready(function() {

  $('.nav-link').click(function(e) {
    e.preventDefault();
    const targetId = $(this).attr('href').substring(1); 

   
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $('#' + targetId).offset().top
      }, 1000, 'swing');
    }, 100);
  });
});




$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});
