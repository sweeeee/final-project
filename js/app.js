$(document).ready(function(){
  $('a').click(function(){
    $('body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60 }, 900);
    return false;
});
});

$(document).ready(function(){
  $("#contactForm").on('click', function(event) {
    event.preventDefault();
    $(".form").show('slow');
  });
});

$(document).ready(function(){
  $('.form-close').click(function(){
    $('i').toggleClass('rotate');

  });

  $('.form-close').click(function(){
    $('.form-close').toggleClass('.form-close');
  });

});

$(document).ready(function(){
  $(".form-close").on('click', function(event) {
    event.preventDefault();
    $(".form").hide('slow');
  });
});
