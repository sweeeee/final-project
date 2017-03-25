$('a').click(function(){
    $('body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top }, 900);
    return false;
});

// $("#contact").click(function() {
//   $("#contactform").style.display="block";
//   $("#contactform").show();
// });
