$(function(){

  $('.btn li').click(function() {
    let num = $(this).attr('data-alt');
    $(this).addClass('active').siblings().removeClass('active');
    $('#'+ num).addClass('active').siblings().removeClass('active');
  })



})