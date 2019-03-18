
// Junk Post Section - Need to learn more\|/ \|/ \|/
var archivePosts = [];

// Function for clearing the post's.
function clearPost(){
  $('.usrPost').slideUp(450, function() { $(this).detach(); });
}

for (var i = 0; i < 3; i += 1 ){
  $('#arcPost').append("<div class='usrPost feb19'><h3>THIS IS A POST!</h3><p class='date'>The Past: Junk Date</p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim magna justo, vel auctor arcu efficitur sit amet. Aenean dapibus odio nec dolor feugiat, vitae consequat sem vestibulum. Fusce porta tortor in nisi iaculis, vitae tincidunt lectus molestie. Sed lobortis suscipit felis, sit amet tempor mi. Cras a ligula quis metus interdum congue at non justo. Sed nec dui eu sem tristique congue. Donec aliquet eros mollis malesuada sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt euismod dolor, non viverra enim maximus quis. Ut eu mollis erat. </div>");
}

$("#2019 a:contains('Jan')").click(function(){
  clearPost();
  $('#arcPost').append(archivePosts[1]);
  $('.usrPost').slideDown(450);
});

$("#2019 a:contains('Feb')").click(function(){
  clearPost();
  $('#arcPost').append(archivePosts[0]);
  $('.usrPost').slideDown(450);
});

$("#2019 a:contains('Mar')").click(function(){
  clearPost();
  $('#arcPost').append(archivePosts[2]);
  $('.usrPost').slideDown(450);
});

$("#2018 a:contains('Dec')").click(function(){
  clearPost();
  $('#arcPost').append(archivePosts[3]);
  $('.usrPost').slideDown(450);
});
// Junk Post Section - Need to learn more /|\ /|\ /|\


// Section dedicated to an interactive Navigation browser
$('.Year').click(function(){
    $('div.monthNav div').slideUp(450);
    $('#' + $(this).html()).slideToggle(450);
});
// If there is no more focus or no mouse over the NAvigation Menu, Menu closes.
$("div.monthNav").on('mouseleave',function(){
  $('div.monthNav div').slideUp(450);
});

//Adding more content! - Post functions to write inputted data to the website
// unable to save, need classes or lessons on how the back-ends for web development works.
$('#btnPost').click(function(){
  var pTitle = $('#pTitle').val();
  var pDate = $('#pDate').val();
  var pContent = $('#pContent').val();
  var newContent = $("<div class = 'usrPost mar19'><h3>" + pTitle + "</h3><p class='date'>" + pDate + "</p> <p>" + pContent + "</p>").appendTo('#arcPost');
  archivePosts[2].push(newContent[0]);
});

//Hide's the user post's, Menu items.
archivePosts[0] = $('.feb19').detach();
archivePosts[1] = $('.jan19').detach();
archivePosts[2] = $('.mar19').detach();
archivePosts[3] = $('.dec18').detach();
$('#arcPost').append(archivePosts[2]).slideDown(450);
$('#2019').hide();
$('#2018').hide();
$('.usrPost').hide().slideDown(450); // Slides out the posts on approach.
