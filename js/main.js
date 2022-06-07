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
var signOut = document.getElementById('signOut');
var signouticon = document.getElementById('signouticon');
var accountSettings = document.getElementById('accountSettings');

if(JSON.parse(localStorage.getItem('userToken'))==true){
    loginButton.classList.add('d-none');
    welcomeUser.classList.remove('d-none');
    var signedIn = JSON.parse(localStorage.getItem('signedUser'));
    welcomeUser.innerHTML = `welcome ${signedIn.userFirstName}`;
    signOut.classList.remove('d-none');
    accountSettings.classList.remove('d-none');
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
        clearSignin();
    }

    if(e.target==signOut || e.target==signouticon){
        localStorage.setItem('userToken' , 'false');
        window.location.href = "index.html";
        console.log(e);
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
                localStorage.setItem('signedUser' , JSON.stringify(x[i]));
                localStorage.setItem('userIndex' , `${i}`);
                window.location.href = "index.html";
            }

            else{
                alertBox.classList.add('d-block');
                alertBox.innerHTML = 'Wrong username and/or password!';    
            }
        }
    }
}

function clearSignin(){
    inputEmail.value = "";
    inputPassword.value = "";
}