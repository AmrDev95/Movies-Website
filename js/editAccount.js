var noLogin = document.getElementById('noLogin');
var editUserData = document.getElementById('editUserData');
var userAgeEdit = document.getElementById('userAgeEdit');
var userEmailEdit = document.getElementById('userEmailEdit');
var firstNameEdit = document.getElementById('firstNameEdit');
var lastNameEdit = document.getElementById('lastNameEdit');
var passwordEdit = document.getElementById('passwordEdit');
var passwordConfirmEdit = document.getElementById('passwordConfirmEdit');
var updateButton = document.getElementById('updateButton');
var oldAge = document.getElementById('oldAge');
var oldEmail = document.getElementById('oldEmail');
var oldName = document.getElementById('oldName');
var oldlastName = document.getElementById('oldlastName');

var Y = JSON.parse(localStorage.getItem('signedUser'));

if(JSON.parse(localStorage.getItem('userToken')) == false){
    noLogin.classList.remove('d-none');
    editUserData.classList.add('d-none');
}

oldAge.innerHTML = Y.userAge;
oldEmail.innerHTML = Y.userEmail;
oldName.innerHTML = Y.userFirstName;
oldlastName.innerHTML = Y.userLastName;



document.addEventListener('keyup' , function(e){
    if(e.target == userAgeEdit){
        validateUserAge();
    }

    if(e.target == userEmailEdit){
        validateUserEmail();
    }

    if(e.target == firstNameEdit){
        validateName(firstNameEdit);
    }

    if(e.target == lastNameEdit){
        validateName(lastNameEdit);
    }

    if(e.target == passwordEdit){
        validatePassword();
    }

    if(e.target == passwordConfirmEdit){
        passwordIdentical();
    }
} )


updateButton.addEventListener('click' , function(){

        if(searchExisting()==true){
            updateFailed.innerHTML = 'User Already exists Please login';
            updateFailed.classList.remove('d-none');    
        }
        
        else if(validateUserAge() && validateUserEmail() && validateName(firstNameEdit) && validateName(lastNameEdit) && validatePassword() && passwordIdentical()){
        }
})




function validateUserAge(){
    var regex = /^(1[6-9]|[2-9][0-9])$/g;
    if(regex.test(userAgeEdit.value)==true){
        userAgeEdit.classList.remove('is-invalid');
        userAgeEdit.classList.add('is-valid');
        return true;
    }

    else if(userAgeEdit.value==""){
        userAgeEdit.classList.remove('is-invalid');
        userAgeEdit.classList.remove('is-valid');
        return false; 
    }
    
    else{
        userAgeEdit.classList.add('is-invalid');
        return false;
    }
}

function validateUserEmail(){
    var regex =/^([A-Z]|[a-z]|[0-9]){1,}@[A-Z a-z 0-9]{1,7}\.[a-z]{3}$/g;
    if(regex.test(userEmailEdit.value)==true){
        userEmailEdit.classList.remove('is-invalid');
        userEmailEdit.classList.add('is-valid');
        return true;
    }

    else if(userEmailEdit.value==""){
        userEmailEdit.classList.remove('is-invalid');
        userEmailEdit.classList.remove('is-valid');
        return false; 
    }

    else{
        userEmailEdit.classList.add('is-invalid');
        return false;
    }
}

function validateName(x){
    var regex = /^[A-Z][a-z]{2,}/g;
    if(regex.test(x.value)==true){
        x.classList.remove('is-invalid');
        x.classList.add('is-valid');
        return true;
    }

    else if(x.value==""){
        x.classList.remove('is-invalid');
        x.classList.remove('is-valid');
        return false; 
    }

    else{
        x.classList.add('is-invalid');
        return false;
    }
}

function validatePassword(){
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/g;
    if(regex.test(passwordEdit.value)==true){
        passwordEdit.classList.remove('is-invalid');
        passwordEdit.classList.add('is-valid');
        passwordIdentical();
        return true;
    }

    else if(passwordEdit.value==""){
        passwordEdit.classList.remove('is-invalid');
        passwordEdit.classList.remove('is-valid');
        passwordIdentical();
        return false; 
    }

    else{
        passwordEdit.classList.add('is-invalid');
        passwordIdentical();
        return false;
    }
}

function passwordIdentical(){
    if(passwordConfirmEdit.value==passwordEdit.value){
        passwordConfirmEdit.classList.remove('is-invalid');
        passwordConfirmEdit.classList.add('is-valid');
        return true;
    }

    else if(passwordConfirmEdit.value==""){
        passwordConfirmEdit.classList.remove('is-invalid');
        passwordConfirmEdit.classList.remove('is-valid');
        return false;   
    }

    else{
        passwordConfirmEdit.classList.add('is-invalid');
        return false;
    }
}

function searchExisting(){
    if(localStorage.getItem('storedUsers')==null){
        return false;
    }

    else{
        var checkMail = JSON.parse(localStorage.getItem('storedUsers'));
        for(var i =0 ; i<checkMail.length ; i++){
            if(checkMail[i].userEmail == userEmailEdit.value){
                return true;
            }
        }

        return false;
    }
}

function searchExisting(){
    if(localStorage.getItem('storedUsers')==null){
        return false;
    }

    else{
        var checkMail = JSON.parse(localStorage.getItem('storedUsers'));
        for(var i =0 ; i<checkMail.length ; i++){
            if(checkMail[i].userEmail == newData[1].value){
                return true;
            }
        }

        return false;
    }
}


