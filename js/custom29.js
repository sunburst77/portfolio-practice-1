$(function(){

// trigger
 $('.trigger').click(function(){
  $('.trigger').toggleClass('active');
  $('.anniversary').toggleClass('on');
  $('.modal-gnb').fadeToggle();
 })
  
// Audio Controls
const bgm = document.querySelector('#myAudio');
bgm.volume = 0.2;
});