

document.write("<h1>"+"Heading"+"</h1>");

document.write("<hr/>");
document.write("<br/>");

var userMessage = prompt("Enter Message Number");


for(num = 0; num <= 6 ; num++) {
    num.toString();
    if(num==0){
        num++;
        
    }else{
        
    }
    document.write("<h" + num + ">" + userMessage+ "</h" + num + ">");
  }