$('.navi > li').mouseenter(function(){
  const chgImg = $(this).attr('data-img');
  console.log(chgImg);
  $('.photo').css({
    'background-image':'url('+ chgImg +')'
  });
})
$('.navi > li').mouseleave(function(){
  $('.photo').css({
    'background-image':'url(../images/portrait-initial.jpg)'
  });
})