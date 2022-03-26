var animate, left=0, imgObj=null;

function init(){

   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'absolute';
   imgObj.style.top = '40px';
   imgObj.style.left = '-100px';
   imgObj.style.visibility='hidden';

   for(let i=0; i<500; i++){
    moveRight();
   }
   
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};