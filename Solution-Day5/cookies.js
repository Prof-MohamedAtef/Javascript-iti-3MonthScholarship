function login(){
    var userName= document.getElementById("userName").value;
    var password= document.getElementById("Password").value;
    var Email= document.getElementById("Email").value;
    document.cookie="UserName="+userName;
    document.cookie="Password="+password;
    document.cookie="Email="+Email;
}
