$(function() {

  // 수직메뉴
$('.smenu').hide();
$('.vmenu .vm-tit > li').click( function(e) {
  e.preventDefault();
  if($(this).hasClass("active")) {
    $(this).removeClass('active').find('.smenu').slideUp();
  } else {
    $('.vmenu .vm-tit > li').removeClass('active');
    $('.smenu').slideUp();
    $(this).addClass('active').find('.smenu').slideDown();
  }
  
});

})