$(function(){

  $('.like').click(function() {
    $(this).toggleClass('active');
  });
  $('.size span, .color span').click(function() {
    $(this).addClass('active').siblings('span').removeClass('active');
  });

});