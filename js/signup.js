var getElements = document.querySelectorAll('.form-control');
var registerButton = document.getElementById('registerButton');
var registerSuccess = document.getElementById('registerSuccess');
var registerSuccessSection = document.getElementById('registerSuccessSection');
var registerFailed = document.getElementById('registerFailed');


var newData = [];
var storedData = [];
for(var i=0 ; i<getElements.length ; i++){
    newData[i]= getElements[i];
}

document.addEventListener('click' , function(e){
    if(e.target==registerButton){
        createAccount();
    }
})

document.addEventListener('keypress' , function(e){
    if(e.target==newData[0]){
        
    }
})

document.addEventListener('keyup' , function(e){
    if(e.target==newData[0]){
        validateUserAge();
    }

    if(e.target==newData[1]){
        validateUserEmail();
    }
})



function createAccount(){
    var newUser = {
        userName : newData[0].value,
        userEmail : newData[1].value,
        userFirstName : newData[2].value,
        userLastName : newData[3].value,
        userPassword : newData[4].value,
        userPassConfirm : newData[5].value,
    }

    storedData.push(newUser);
    console.log(storedData);
    localStorage.setItem('storedUsers' , JSON.stringify(storedData));
    registerSuccessSection.innerHTML = 'Account Created';
    registerSuccessSection.style.display = 'block';
}




// This Section is to verify user's data and get data from user


function getData(){

}

function validateUserAge(){
    var regex = /^(1[6-9]|[2-9][0-9])$/g;
    if(regex.test(newData[0].value)==true){
        newData[0].classList.remove('is-invalid');
        newData[0].classList.add('is-valid');
        return true;
    }
    
    else{
        newData[0].classList.add('is-invalid');
        return false;
    }
}

function validateUserEmail(){
    var regex =/^([A_Z]|[a-z]|[0-9]){1,}@[A-Z a-z 0-9]{1,7}\.[a-z]{3}$/g;
    if(regex.test(newData[1].value)==true){
        newData[1].classList.remove('is-invalid');
        newData[1].classList.add('is-valid');
        return true;
    }

    else{
        newData[1].classList.add('is-invalid');
        return false;
    }
}

function validateName(x){
    var regex = /^[A-Z][a-z]{2,}/g;
    if(regex.test(x)==true){
        return true;
    }

    else{
        return false;
    }
}

function checkPassword(){
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/g ;
    if(regex.test(newData[3])==true){
        return true;
    }

    else{
        return false;
    }
}