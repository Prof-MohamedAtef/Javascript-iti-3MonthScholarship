var output="This is Mohamed Atef";
output.split(' ');
function openWin(){
    var window_=window.open("","","width=600,height=600");
    var i=0;
    var interval=setInterval(function(){
        if(i<output.length){
            window_.document.write(output[i]);
            i++;
        }
    },150);
    
    setTimeout(function() { window_.close(); }, 5000);
}