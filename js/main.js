var loginButton = document.getElementById('loginButton');
var loginSection = document.getElementById('loginSection');
var loginIcon = document.getElementById('loginIcon');
var closeLogin = document.getElementById('closeLogin');
var signupButton = document.getElementById('signupButton');



loginButton.addEventListener('click' , function(e){
    if(e.target==loginButton || e.target==loginIcon){
        loginSection.style.display = 'flex';
        console.log('welcome');
    }
})

document.addEventListener('click' , function(e){
    if(e.target==closeLogin){
        loginSection.style.display = 'none';
    }

    if(e.target==signupButton){
        window.location.href="signup.html";
    }
})