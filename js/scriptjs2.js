var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
  var hamburger2 = document.querySelector(".hamburger");
  var menu = document.querySelector(".navigation");
  if(hamburger2.classList.contains("fa-bars")){
    hamburger2.classList="hamburger fas fa-times fade";
    menu.classList="navigation roll-out-menu";
  }
  else{
    hamburger2.classList="hamburger fa fa-bars fade-reload";
    menu.classList="navigation none";
  }
  
  
});

var contact = document.querySelector("#contact");
contact.addEventListener("click",function(){
  window.scrollTo(0,document.body.scrollHeight);
});

function initMap() {
var uluru = {lat: -25.344, lng: 131.036};
var map = new google.maps.Map(
document.getElementById('map'), {zoom: 4, center: uluru});  
var marker = new google.maps.Marker({position: uluru, map: map})};
