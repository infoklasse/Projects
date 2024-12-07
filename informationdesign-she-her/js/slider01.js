var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); 
  var img = document.getElementsByClassName("bgimg");

  //text-slides
  if (n > slides.length){
    slideIndex = 1;
  };

  if (n < 1){
    slideIndex = slides.length
  };
      
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none"; 
  };
  slides[slideIndex-1].style.display = "block";


  //img-slides
  if (n > img.length){
    slideIndex = 1;
  };

  if (n < 1){
    slideIndex = img.length
  }

  for (i = 0; i < img.length; i++){
    img[i].style.display = "none";  
  }
 
  

  img[slideIndex-1].style.display = "block";
}
