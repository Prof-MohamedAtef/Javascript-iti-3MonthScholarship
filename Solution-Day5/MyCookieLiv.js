//Create Cookie
function AddCookie(key,value,ExpFlage){
    if(ExpFlage){//Persistant Cookie
        var today = new Date();
        today.setMonth( today.getMonth()+3 );
        document.cookie = key+"="+value+";expires="+today;
    }else{//undefined ===> false Value ===> Session Cookie
        document.cookie = key+"="+value;
    }
    
}

//DeleteCookie
function DeleteOneCookie(key){
    var today = new Date();
    today.setMonth( today.getMonth()-1 );
    document.cookie = key+"=;expires="+today;
}

function GetOneCookies(key_){
    var array=GetAllCookies();
    return array[key_];
}


//Get All Cookies
function GetAllCookies(){
    //Associative Array [Key:Value]
    var assArray = [];

    var allcookie = document.cookie;//string.splite("")===>array

    var AllCookiesArray = allcookie.split(";");//["userName=sara", " userAge=20"]

    for(var i=0;i<AllCookiesArray.length; i++){
        var key = AllCookiesArray[i].split("=")[0].trim();
        var value = AllCookiesArray[i].split("=")[1].trim();
        assArray[key] = value;
    }

    return assArray;
}


AddCookie("MyWebsite","www.talabstation.org",true);
AddCookie("facebook-website","www.facebook.org",true);

DeleteOneCookie("website");

var arr=GetAllCookies();