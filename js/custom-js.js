var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
  	slideIndex = 1
  }    
  if (n < 1) {
  	slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function openNav() {
    document.getElementById("myNav").style.height = "100%";
   $('#burgerIcon').hide();
   $('#navClose').show();
   $('.w3-black').hide();

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
   $('#navClose').hide();
   $('#burgerIcon').show();
   $('.w3-black').show();

}


$('.overlay-content a').click(function(){
	closeNav();
var that = $(this);
var div = $(that).attr('href');
	$('html,body').animate({
        scrollTop: $(div).offset().top}, 'slow');
});




$(document).ready(function() {
  // load static image map into bg
$('#map_container').css("background-image","url(https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.127236739737!2d44.782700814883555!3d41.7177731834121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d4fa5b02d7%3A0xced15c2c7992ceb5!2sGeoLab!5e0!3m2!1sen!2sge!4v1468512361766");
    
});


function submitClicked(){
  alert('Message Sent!');
  return false;
}


