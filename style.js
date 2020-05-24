$(function(){

  $('.hhh').click(function(){
      var $drop = $('.header-list');
      if($drop.hasClass('open')){
        $drop.removeClass('open')
        $drop.slideDown(1000);
        $('.close').css('display','block');
        $('.open2').css('display','none');
        $('.header-top').css('backgroundcolor:gray');
      }else {
        $drop.addClass('open');
        $drop.slideUp(1000);
        $('.close').css('display','none');
        $('.open2').css('display','block');
      }
    });

    $('.nav').click(function(){
    var s =$(this).attr('href');
    var sm =$(s).offset().top;
    $('html,body').animate({'scrollTop':sm},5000);
    });

});
