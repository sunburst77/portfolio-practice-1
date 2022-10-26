$(function(){

  $('.field input').focus(function() {
    $(this).parent().next().css('display','block');
  }).blur(function() {
    $(this).parent().next().css('display','none');
  })
  $('nav .search').click(function() {
    $('.modal-search').addClass('active');
  })
  $('.close-search, section').click(function() {
    $('.modal-search').removeClass('active');
  })
})