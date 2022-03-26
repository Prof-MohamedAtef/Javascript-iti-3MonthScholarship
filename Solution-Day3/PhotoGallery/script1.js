var images = new Array(5);  
    images[0] = "../PhotoGallery/img/1.jpeg";
    images[1] = "../PhotoGallery/img/2.jpg";
    images[2] = "../PhotoGallery/img/3.jpg";
    images[3] = "../PhotoGallery/img/4.jpg";
    images[4] = "../PhotoGallery/img/5.jpg";

var numimg = 4;
var curimg = 1;

function  goback() {
    var im=document.getElementById("image");
    if(curimg>0)
   {
    im.src = images[curimg-1];
    curimg = curimg - 1;
   }else{
    alert("This is the first image");
   }
}

function gofwd(){
    var im=document.getElementById("image");
        if(curimg < numimg){
           im.src = images[curimg+1];
           curimg = curimg + 1;
        }else{
           alert("This is the last image");
        }    
}

/*
circulate
*/

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// window.setInterval(function(){
//     plusSlides(1);
// }, 2000);

