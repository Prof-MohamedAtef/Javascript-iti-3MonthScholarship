document.write("<h1>"+"Array Of User Input"+"</h1>");

document.write("<hr/>");
document.write("<br/>");
var arr = new Array();
for(let i=0; i<5; i++){
    var input = prompt("Enter your inputs");    
    arr[i]=input;
}
document.write("You have entered the values : ");
for(let i=0; i<5; i++){
    document.write(arr[i]);
}

document.write("<hr/>");
document.write("<br/>");

arr.sort(function(a, b) {
    return a - b;
  });

  document.write("You values after being sorted ascending : ");
  for(let i=0; i<5; i++){
    document.write(arr[i]);
}

document.write("<hr/>");
document.write("<br/>");

arr.sort(function(a, b) {
    return b - a;
  });

  document.write("You values after being sorted descending : ");
  for(let i=0; i<5; i++){
    document.write(arr[i]);
}
