$(function() {

  $('p').css({'display':'none'});
  $('.show-btn').click(function(){
    $('p').css({'display':'block'});
  });
  $('.hide-btn').click(function(){
    $('p').css({'display':'none'});
  });

  $('.show-btn1').click(function(){
    $('.ex2 div').show();
  })
  $('.hide-btn1').click(function(){
    $('.ex2 div').hide();
  })
  $('.sh-btn').mouseenter(function(){
    $('.ex2 div').show();
  })
  $('.sh-btn').mouseleave(function(){
    $('.ex2 div').hide();
  })

  $('.show-btn2').click(function(){
    $('.ex3 div').show();
  })
  $('.hide-btn2').click(function(){
    $('.ex3 div').hide();
  })
  $('.toggle-btn').click(function(){
    $('.ex3 div').toggle();
  })

  $('.show-btn3').click(function(){
    $('.ex4 div').slideDown();
  })
  $('.hide-btn3').click(function(){
    $('.ex4 div').slideUp();
  })
  $('.toggle-btn3').click(function(){
    $('.ex4 div').slideToggle();
  })
  
  $('.show-btn4').click(function(){
    $('.ex5 div').fadeIn();
  })
  $('.hide-btn4').click(function(){
    $('.ex5 div').fadeOut();
  })
  $('.toggle-btn4').click(function(){
    $('.ex5 div').fadeToggle();
  })

  $('.add-btn6').click(function(){
    $('.ex6 div').addClass('active');
  })
  $('.rm-btn6').click(function(){
    $('.ex6 div').removeClass('active');
  })
  $('.toggle-btn6').click(function(){
    $('.ex6 div').toggleClass('active');
  })
  
  $('.menu li').mouseenter(function() {
    $(this).children('.sub-menu').stop().slideDown();
  });
  $('.menu li').mouseleave(function() {
    $(this).children('.sub-menu').stop().slideUp();
  });

  $('.ex8 .tab > span').click(function() {
    $(this).addClass('active').siblings('span').removeClass('active');
  })

})