
document.write("<h1>"+"Cos Value of Angle"+"</h1>");

document.write("<hr/>");
document.write("<br/>");

var input = parseInt( prompt("Cos Value of Angle"));
const result = Math.cos(input*(Math.PI/180)).toFixed(4);
document.write("<span>"+input+"</span>"+"<sup>&deg;</sup><br/>");

document.write(result);
alert(result);    