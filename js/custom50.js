$(function(){

  let i = 0;
  var chkViewtime = setInterval(function() {
    $('.move-border > li').removeClass('active').eq(i).addClass('active');
    if (i === 3) { i = 0; }
    else { i++; }
}, 2000);


});