$(function(){

  $('.testimonial-pic img').click(function(){
    let tab = $(this).attr('data-alt');
    $(this).addClass('active').siblings().removeClass('active');
    console.log(tab);
    // $('.testimonial .content').removeClass('active')
    $('#'+ tab).addClass('active').siblings().removeClass('active');
  });



})