document.write("<h1>"+"Heading"+"</h1>");

document.write("<hr/>");
document.write("<br/>");

document.write("Sum of Values: ");
var total=0;

for(let i=1; i<=10; i++){

    var userInput= parseInt( prompt("Enter value num: "+i));
    if(userInput==0){
        break;
    }else{
        total += userInput;
        if(total>=100){
            break;
        }
    }
}
document.write( total.toString());