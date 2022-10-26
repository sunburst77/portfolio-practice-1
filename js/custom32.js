$(function(){

  $('.accordion-item').click(function(){
    
    $(this).children('.content').stop().slideToggle(300);
    $(this).toggleClass('active');
    
  })

  
});