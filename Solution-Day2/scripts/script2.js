/*document.write("<h1>"+"entering user info"+"</h1>");

document.write("<hr/>");
document.write("<br/>");

var userName = prompt("Enter Your Name");    

allLetter(userName);
*/
/*for(let i=0; i<4; i++){
    if(i==0){
        
    }else if(i==1){

    }else if(i==2){

    }else if(i==3){

    }else break;
}
*/
/*function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   document.write("going");
   if(inputtxt.value.match(letters))
     {
        document.write("<h1>"+"Entered Chars"+"</h1>");
        return true;
     }
   else
     {
        document.write("<h1>"+"Entered Numbers"+"</h1>");
        return false;
     }
    document.write("didn't");
  }

//var color = prompt("Welcome, Please Enter preferred color, green, red, or Blue");
/*switch(color){
    case 'green':
        color='#2fa222'
        break;
    case 'blue':
        color='#0d57bc'
        break;
    case 'red':
        color='#ff0000';
        break;
}


let text = "Hello World!";
let result = text.fontcolor("green");
document.write(text);


function changeColors(el)
{
    if (el.value == "value1" || el.value == "value2" || el.value == "value3" || el.value == "value4" || el.value == "value5" || el.value == "value6")
    {
        el.style.color='#ffbb00'
    }
    else
    {
        el.style.color='#000000'
    }
}*/

function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }