// q1
var ourScreen = document.getElementById("inputValue");
function myNum(mybttn){
    
    ourScreen.value += mybttn.value.trim();
}
function clearText(){
    ourScreen.value="";
}
function clearLastText(){
    ourScreen.value = ourScreen.value.substring(0, ourScreen.value.length-1);
}




//q2

var timer=null;
function changeImg(){
    document.getElementById("imgDesign").src="../SlideShow/2.jpg"
}
function preImg(){
    document.getElementById("imgDesign").src="../SlideShow/1.jpg"
}


var myImage = document.getElementById("imgDesign");
var imageArray=["../SlideShow/2.jpg","../SlideShow/3.jpg","../SlideShow/4.jpg",
"../SlideShow/5.jpg","../SlideShow/6.jpg"
];
var imageIndex = 0;

function showImg() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
      imageIndex = 0;
    }
    timer=window.setInterval("showImg()",2000);
  }

  function stopImg(){
      clearTimeout(timer);
  }