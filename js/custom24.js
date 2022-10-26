$(function(){

  $('.navi li').mouseenter(function(){
    let changeImg = $(this).attr('data-image');
    $('.photo').css({
      'background-image': 'url('+ changeImg + ')'
    });
  });
  $('.navi li').mouseleave(function(){
    $('.photo').css({
      'background-image': ''
    });
  });

});