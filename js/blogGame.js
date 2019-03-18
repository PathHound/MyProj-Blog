
// Junk Post Section - Need to learn more\|/ \|/ \|/
var archivePosts = [];
var febPostRand = [
  "<div class='usrPost feb19'><h3>Nintendo!</h3><p class='date'>2|14|2019</p><p>While nintendo attempts to dominate the 'at home console market', their competitors prepare for the next generation. Sony looks like they're on shakey ground by moving their main head quaters out to Florida while pushing heavier censorship on developers who are just looking for their place in the market.</p></div>",
  "<div class='usrPost feb19'><h3>Dateless</h3><p class='date'>2|13|2019</p><p>It's a day before Valentine's and those who seek love who have lost, I only hope that you find solace in the days to come. A recommendation from the 'king of the Edge,' Boot up an old PS3 console and pop in a copy of Little Big Planet and game on! play the night away alone or gather some friends who are in the same boat as you. Just because it's a day to celebrate the couples doesn't mean you still can't have fun.</p></div>",
  "<div class='usrPost feb19'><h3>It's FREEZING!!!!</h3><p class='date'>2|2|2019</p><p>WHY IS IT SO COLD?! WHERE DID THIS SNOW COME FROM?!</p>",
  "<div class='usrPost feb19'><h3>We've been Spoiled</h3><p class='date'>2|20|2019</p><img src='https://arcadeheaven.files.wordpress.com/2010/03/armyoftrolls.jpg?resize=450%2C713' alt='Coin-Op Arcade Machines'></img><p>As video games continue evolve in temrs of graphics, ideas and art that has been explored, everyone seems to be chasing the new hotest things in order to entertain themselves rather than seek the simpler enjoyments of something a bit more old and what we have now.</p> <p>Nintendo is partial to blame for this type of issue along with companies such as ID or Insomniac, even Apple and Microsoft. They chase the never ending demand to be new to fight for our almighty dollar as if it we're a detestable fight out of super smash brothers. I can understand that they need to do this in order to make a profit to pay the employees under their belt the wages to keep jobs and keep this industry running and I don't see anything wrong with it; but far are we willing to push technology out to the consumer and in what direction?</p><p>The first video game that tries to push physical touch from skin to flame and cross the boundry of a virtual world to a reality we can forge through numbers and pixels will be the last video game created and the last technology to come out. People will want to leave the real world to a digital prison we made for ourselves and refuse to leave as an excuse than to confront the reality of the world around them</p> <p>Ironically, we play games to gain these experiences because we know our world isn't perfect, whether we're fat or something else we detest and we want to be the characters we play as. Noone anymore would rather play simpler games in such as Pac-Man, Galaga. In fact, if these games didn't get their own re-releases, we would forget about them all together and no longer have the ability to play them anymore. What I'm getting at is, we've been spoiled by the next best and big thing... Why can we enjoy the last and simple thing?</p></div>",
  "<div class='usrPost feb19'><h3>GUNDAM!</h3><p class='date'>2|19|2019</p><p>I just wanted to make a random post for kicks</p>",
  "<div class='usrPost feb19'><h3>Robotech</h3><p class='date'>2|17|2019</p><p>The Rival of gundam, where the war and the wars end all starts with a woman named Mimei.... Well, it ends with that woman, she didn't start it but she's trouble with a capital 'T' and every scene she's in, you want to say, WHY IS SHE HERE?! She's like Yamcha from DBZ but worse! MUCH WORSE!</p>",
  "<div class='usrPost feb19'><h3>Castle of the Awesome!</h3><p class='date'>2|16|2019</p><p>I finished remodling my Rec Room! It looks kick ASS!</p>"];

// Function for clearing the post's.
function clearPost(){
  $('.nContent').slideUp(450);
  $('.usrPost').slideUp(450, function() { $(this).detach(); });
}

for (var i = 0; i < 3; i += 1 ){
  var temp = febPostRand[Math.floor(Math.random() * 7)];
  $('#arcPost').append(temp);
  console.log(temp);
  //$('#arcPost').append("<div class='usrPost feb19'><h3>THIS IS A POST!</h3><p class='date'>The Past: Junk Date</p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim magna justo, vel auctor arcu efficitur sit amet. Aenean dapibus odio nec dolor feugiat, vitae consequat sem vestibulum. Fusce porta tortor in nisi iaculis, vitae tincidunt lectus molestie. Sed lobortis suscipit felis, sit amet tempor mi. Cras a ligula quis metus interdum congue at non justo. Sed nec dui eu sem tristique congue. Donec aliquet eros mollis malesuada sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt euismod dolor, non viverra enim maximus quis. Ut eu mollis erat. </div>");
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
  $('.nContent').slideDown(450);
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
  var newContent = $("<div class = 'usrPost mar19'><h3>" + pTitle + "</h3><p class='date'>" + pDate + "</p> <p>" + pContent + "</p>").appendTo('#arcPost:last');
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
