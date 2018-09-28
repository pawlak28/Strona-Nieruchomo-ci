var slideIndex = 2;
// AKTUALNY SLAJD
currentSlide(slideIndex);
function currentSlide(n) // <-- FUNKCJA POKAZUJĄCĄ AKTUALNY SLAJD 
{
  showSlides(slideIndex = n);
}
function showSlides(n) // <-- FUNKCJA PRZEŁĄCZAJĄCA SLAJDY
{
  var slides = document.getElementsByClassName("offer-slider");
  //WSZYSTKIE DIVY KTÓRE ZAWIERAJĄ KLASE SLAJDU
  var dots = document.getElementsByClassName("offer-dot");
  //WSZYSTKIE KROPKI KTÓRE ZAWIERAJĄ KLASE KROPKI
  for(var i = 0;i < 5;i++)
    {
      slides[i].style.display="none";
      //WYŁĄCZENIE WSZYSTKICH SLAJDÓW
    }
  for(var j = 0;j < 5;j++)
    {
      dots[j].className=dots[j].className.replace("active","");
      //WYŁĄCZENIE WSZYSTKICH KROPEK
    }
  slides[slideIndex-1].style.display="block";
  //USTAWIENIE SLAJDU WRAZ Z KOLEJNOŚCIĄ INDEXU
  dots[slideIndex-1].className+=" active";
  //USTAWIENIE ZAŁĄCZENIA KROPKI WRAZ Z KOLEJNOŚCIĄ INDEXU
}
var slideIndex2 = 3;
currentSlide2(slideIndex2);
function currentSlide2(n2) 
{
  showSlides2(slideIndex2 = n2);
}
function showSlides2(n2)
{
  var slides = document.getElementsByClassName("offer-slider2");
  var dots = document.getElementsByClassName("offer-dot2");
  
  for(var i = 0;i < 5;i++)
    {
      slides[i].style.display="none";
      
    }
  for(var j = 0;j < 5;j++)
    {
      dots[j].className=dots[j].className.replace("active","");
      
    }
  slides[slideIndex2-1].style.display="block";
  dots[slideIndex2-1].className+=" active";
}
var slideIndex3 = 4;
currentSlide3(slideIndex3);
function currentSlide3(n3) 
{
  showSlides3(slideIndex3 = n3);
}
function showSlides3(n3)
{
  var slides = document.getElementsByClassName("offer-slider3");
  var dots = document.getElementsByClassName("offer-dot3");
  
  for(var i = 0;i < 5;i++)
    {
      slides[i].style.display="none";
      
    }
  for(var j = 0;j < 5;j++)
    {
      dots[j].className=dots[j].className.replace("active","");
      
    }
  slides[slideIndex3-1].style.display="block";
  dots[slideIndex3-1].className+=" active";
}
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


