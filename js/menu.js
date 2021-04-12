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




var sub = document.querySelector('.dropbtn');

// method
function toggleMenuSub (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".dropdown-content" ).classList.toggle("is_active");
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