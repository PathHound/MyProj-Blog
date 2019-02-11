
document.write("<p>My name is patrick, Mayo is an instrument.</p>");
for (var i = 0; i < 10; i += 1 ){
  console.log(i);
  document.write("<div class='postit'>THIS IS A POST!<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim magna justo, vel auctor arcu efficitur sit amet. Aenean dapibus odio nec dolor feugiat, vitae consequat sem vestibulum. Fusce porta tortor in nisi iaculis, vitae tincidunt lectus molestie. Sed lobortis suscipit felis, sit amet tempor mi. Cras a ligula quis metus interdum congue at non justo. Sed nec dui eu sem tristique congue. Donec aliquet eros mollis malesuada sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt euismod dolor, non viverra enim maximus quis. Ut eu mollis erat. </div>");
}

const LinMen = document.querySelector('.monthSel');

LinMen.addEventListener('click', () => {
  LinMen.style.color = '#F00';
  LinMen.style.display = 'none';
});
