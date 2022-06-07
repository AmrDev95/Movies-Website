var loginButton = document.getElementById('loginButton');
var loginSection = document.getElementById('loginSection');
var loginIcon = document.getElementById('loginIcon');
var closeLogin = document.getElementById('closeLogin');
var signupButton = document.getElementById('signupButton');
var signInButton = document.getElementById('signInButton');
var alertBox = document.getElementById('alertBox');
var inputPassword = document.getElementById('inputPassword');
var inputEmail = document.getElementById('inputEmail');
var welcomeUser = document.getElementById('welcomeUser');

if(JSON.parse(localStorage.getItem('userToken'))==true){
    loginButton.classList.add('d-none');
    welcomeUser.classList.remove('d-none');
    welcomeUser.innerHTML = `welcome ${JSON.parse(localStorage.getItem('userName'))}`;
}

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

    if(e.target==signInButton){
        checkDatabase();
    }
})


function checkDatabase(){
    if(localStorage.getItem('storedUsers')==null){
        alertBox.classList.add('d-block');
        alertBox.innerHTML = 'Wrong username and/or password!';      
    }

    else{
        var x = JSON.parse(localStorage.getItem('storedUsers'));
        for(var i =0 ; i < x.length ; i++){
            if(x[i].userEmail ==inputEmail.value && x[i].userPassword == inputPassword.value){
                localStorage.setItem('userToken' , 'true');
                localStorage.setItem('userName' , JSON.stringify(x[i].userFirstName));
                window.location.href = "index.html";
            }

            else{
                alertBox.classList.add('d-block');
                alertBox.innerHTML = 'Wrong username and/or password!';    
            }
        }
    }
}