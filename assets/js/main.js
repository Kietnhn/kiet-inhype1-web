

 var slideIndex = 0;
 showSlides();
 
 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 5000); 
 }
// 

 var highlights2Index = 1;
showSlides2(highlights2Index);

function plusSlides(n) {
  showSlides2(highlights2Index += n);
}


function showSlides2(n) {
  var i;
  var highlights2 = document.getElementsByClassName("js-post-highlights2");
   
  if (n > highlights2.length){highlights2Index = 1}    
  if (n < 1) {highlights2Index = highlights2.length}
  for (i = 0; i < highlights2.length; i++) {
    highlights2[i].style.display = "none";
  }
    highlights2[highlights2Index-1].style.display = "flex";  
}

