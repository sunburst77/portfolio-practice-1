$(function(){
 $('.tab-btn a').click(function() {
   $(this).addClass('active').siblings().removeClass('active');
 });
 
});