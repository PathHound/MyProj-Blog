
for (var i = 0; i < 3; i += 1 ){
  document.write("<div class='usrPost'>THIS IS A POST!<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim magna justo, vel auctor arcu efficitur sit amet. Aenean dapibus odio nec dolor feugiat, vitae consequat sem vestibulum. Fusce porta tortor in nisi iaculis, vitae tincidunt lectus molestie. Sed lobortis suscipit felis, sit amet tempor mi. Cras a ligula quis metus interdum congue at non justo. Sed nec dui eu sem tristique congue. Donec aliquet eros mollis malesuada sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt euismod dolor, non viverra enim maximus quis. Ut eu mollis erat. </div>");
}

$('.Year').click(function(){
    $('#' + $(this).html()).slideToggle(450);

})

$("div.monthNav").on('mouseleave',function(){
  $('div.monthNav div').slideUp(450);
});

$('.Year').on('mouseon', function(){
  $('#' + (this).html()).css('color:#F00');
})

$('#2019').hide();
$('#2018').hide();
$('.usrPost').hide().slideDown(350);

$('.2018').click(function(){
  console.log('Under Construction');
});
