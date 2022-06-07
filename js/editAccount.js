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
var updateFailed = document.getElementById('updateFailed');
var updateSuccess = document.getElementById('updateSuccess');
var deleteAccount = document.getElementById('deleteAccount');

var Y = JSON.parse(localStorage.getItem('signedUser'));



if(JSON.parse(localStorage.getItem('userToken')) == false || JSON.parse(localStorage.getItem('userToken')) ==null){
    noLogin.classList.remove('d-none');
    editUserData.classList.add('d-none');
}

else{
    oldAge.innerHTML = Y.userAge;
    oldEmail.innerHTML = Y.userEmail;
    oldName.innerHTML = Y.userFirstName;
    oldlastName.innerHTML = Y.userLastName;

userAgeEdit.value = Y.userAge;
userEmailEdit.value = Y.userEmail;
firstNameEdit.value = Y.userFirstName;
lastNameEdit.value = Y.userLastName;
passwordEdit.value = Y.userPassword;

validateUserAge();
validateName(firstNameEdit);
validateName(lastNameEdit);
validateUserEmail();
validatePassword();





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
        validateUserAge();
        validateName(firstNameEdit);
        validateName(lastNameEdit);
        validateUserEmail();
        validatePassword();
        passwordIdentical();

        if(searchExisting()==true){
            updateFailed.innerHTML = 'this user is already taken';
            updateFailed.classList.remove('d-none');  
            updateSuccess.classList.add('d-none');  
        }
        
        else if(validateUserAge() && validateUserEmail() && validateName(firstNameEdit) && validateName(lastNameEdit) && validatePassword() && passwordIdentical()){
            var Y = JSON.parse(localStorage.getItem('signedUser'));
            Y.userAge = userAgeEdit.value;
            Y.userEmail = userEmailEdit.value;
            Y.userFirstName = firstNameEdit.value;
            Y.userLastName = lastNameEdit.value;
            Y.userPassword = passwordEdit.value;
            localStorage.setItem('signedUser' , JSON.stringify(Y));

            oldAge.innerHTML = Y.userAge;
            oldEmail.innerHTML = Y.userEmail;
            oldName.innerHTML = Y.userFirstName;
            oldlastName.innerHTML = Y.userLastName;

            var updateDatabase = JSON.parse(localStorage.getItem('storedUsers'));
            updateDatabase[Number(localStorage.getItem('userIndex'))] = Y;


            localStorage.setItem('storedUsers' , JSON.stringify(updateDatabase));
            
            updateFailed.classList.add('d-none');
            updateSuccess.innerHTML = 'Profile Updated';
            updateSuccess.classList.remove('d-none')
        }

        else{
            updateFailed.innerHTML = 'Some Data is missing';
            updateFailed.classList.remove('d-none');  
            updateSuccess.classList.add('d-none'); 

        }
})

deleteAccount.addEventListener('click' , function(){
    var updateDatabase = JSON.parse(localStorage.getItem('storedUsers'));
    updateDatabase.splice(Number(localStorage.getItem('userIndex')) , 1);
    console.log(updateDatabase);
    localStorage.setItem('storedUsers' , JSON.stringify(updateDatabase));
    localStorage.removeItem('userToken');
    localStorage.removeItem('userIndex');
    localStorage.removeItem('signedUser');
    window.location.href = "index.html";
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
}