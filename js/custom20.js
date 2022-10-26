$(function(){

$('.login button').click(function(){
  var num = $('#id').val();
  console.log(num);
  if( num === '') {
    alert('나이를 입력하세요!');
    $('#id').val('').focus();
  }
  else if(num < 20) {
    alert('미성년자입니다.');
  }
  else if(num >= 20) {
    alert('성인입니다.');
  }
  else {
    alert('입력내용을 숫자로 넣으세요.');
    $('#id').val('').focus();
  }
  
})


})