var queryString=location.search.split("?")[1];

var userName = queryString.split("&")[0].split("=")[1];
var title=queryString.split("&")[1].split("=")[1];
var address=queryString.split("&")[2].split("=")[1];
var gender=queryString.split("&")[3].split("=")[1];
var email=queryString.split("&")[4].split("=")[1];
var mobile=queryString.split("&")[5].split("=")[1];
var password=queryString.split("&")[6].split("=")[1];

/*var assArray=[];
for(let i=0; i<queryString.split("&").length; i++){
    var key=queryString.split("&")[i].split("=")[0];
    var value=queryString.split("&")[i].split("=")[1];

    assArray[key]=value;
}*/

document.write("<h1>Welcome ya "+userName+"</h1>"+"</br>"+"<h2>"+"It's our pleasure to know that you are a "+title+"</br>"+"Your address is :"+address+"</br>"
+"You are a "+gender+"</br>"+"Your email is :"+email+"</br>"
+"Your mobile is : "+mobile+"</br>"+"Your Password is : "+password+" </h2>");

/*
document.write("<h1>Welcome ya "+assArray["UserName"]+"</h1>"+"</br>"+"<h2>"+"It's our pleasure to know that you are a "+assArray["Title"]+"</br>"+"Your address is :"+assArray[Address]+"</br>"
+"You are a "+assArray[Gender]+"</br>"+"Your email is :"+assArray[Email]+"</br>"
+"Your mobile is : "+assArray[Mobile]+"</br>"+"Your Password is : "+assArray[password]+" </h2>");
*/