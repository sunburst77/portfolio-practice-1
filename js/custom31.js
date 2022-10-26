$(function(){

  $('.accordion .content').eq(0).show().addClass('active').prev().addClass('active');
  $('.accordion .title').click(function(){
    $(this).toggleClass('active').siblings('.title').removeClass('active');
    $(this).next().stop().slideToggle('active').siblings('.content').slideUp().removeClass('active');

  })


  
});