function openNav() {
    document.getElementById("myNav").style.height = "100%";
   $('#burgerIcon').hide();
   $('#navClose').show();
   $('.w3-black').hide();
   $('#logoWhite').hide();
   $('#logoRed').show();

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
   $('#navClose').hide();
   $('#burgerIcon').show();
   $('.w3-black').show();
   $('#logoWhite').show();
   $('#logoRed').hide();
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


// The latitude and longitude of your business / place
var position = [41.717578, 44.7828302];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

