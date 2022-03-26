const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const phoneValue = phone.value.trim();

    if(!allLetter(usernameValue)) {
        setError(username, 'Enter chars only!');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!');
    } else {
        setSuccess(email);
    }

    if(mobileValue === '') {
        setError(mobile, 'Mobile is required');
    }else if(!matchZeroNums(mobileValue)){
        
    } else {
        setSuccess(mobile);
    }

    if(phoneValue === '') {
        setError(phone, 'Please Enter your Phone');
    } else if (!matchZeroNums(phoneValue)) {
        
    } else {
        setSuccess(phone);
    }
};


// function validate(name){
//     if(validateChars(name)){
//         document.write("input contains letters only");
//     }
// }


// function validateChars(name){
//     var numbers=/^[0-9]+$/;
//     var letters = /^[A-Za-z]+$/;
//     if(name.val().match(letters)&&!name.val().match(numbers))
//     {
//         return true;
//     }
// }


function allnumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers)) {

        alert('Entered Num success....');

        return true;
    }
    else {
        alert('Please input numerics only');

        return false;
    }
}

function matchZeroNums(inputtext) {
    var userInput = inputtext.value;
    if (userInput.match(/^(?=\d{11}$)(010|011|012)\d+/)) {
        alert('starts with 010.011.012 ');
        return true;
    } else {
        setError(mobile, 'Must start with 010.011.012-length is less than 11.')
        alert('Must start with 010.011.012-length is less than 11 ');
        return false;
    }
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}


function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        alert('Entered Chars...');
        return true;
    }
    else {
        alert('Entered Numbers...');
        return false;
    }
}





// function allLetter(inputtxt)
//   {
//    var letters = /^[A-Za-z]+$/;
//    document.write("going");
//    if(inputtxt.value.match(letters))
//      {
//         document.write("<h1>"+"Entered Chars"+"</h1>");
//         return true;
//      }
//    else
//      {
//         document.write("<h1>"+"Entered Numbers"+"</h1>");
//         return false;
//      }
//     document.write("didn't");
//   }

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

//    function lengthRange(inputtxt, minlength, maxlength)
//    {
//       var userInput = inputtxt.value;
//       if(userInput.length >= minlength && userInput.length <= maxlength)
//          {
//            return true;
//          }
//       else
//          {
//        alert("Please input between " +minlength+ " and " +maxlength+ " characters");
//            return false;
//          }
//    }