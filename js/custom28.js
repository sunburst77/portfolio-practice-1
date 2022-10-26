$(function(){

  $('.title').click(function() {
    let changeImg = $(this).attr('data-image');
    $(this).addClass('active').siblings('.title').removeClass('active');
    $('.desc').stop().slideUp().removeClass('active');
    $(this).next().stop().slideDown().addClass('active');
    $('.image img').attr('src',changeImg);
  });
  

});