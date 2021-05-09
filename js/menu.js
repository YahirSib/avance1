// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);




var sub = document.querySelector('.dropbtn1');

// method
function toggleMenuSub (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".dropdown-content1" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
sub.addEventListener('click', toggleMenuSub, false);



var sub2 = document.querySelector('.dropbtn2');

// method
function toggleMenuSub2 (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".dropdown-content2" ).classList.toggle("is_active");
  event.preventDefault();
}
// event
sub2.addEventListener('click', toggleMenuSub2, false);


var sub3 = document.querySelector('.dropbtn3');
//method
function toggleMenuSub3 (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".dropdown-content3" ).classList.toggle("is_active");
  event.preventDefault();
}
// event
sub3.addEventListener('click', toggleMenuSub3, false);

