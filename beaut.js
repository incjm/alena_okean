$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#Beaut").offset().top
        }, 2300);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>120){
        $('#click').fadeIn(900)
      }else{
        $('#click').fadeOut(100)
      }
    });
  });
