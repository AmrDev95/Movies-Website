var getElements = document.querySelectorAll('.form-control');
var registerButton = document.getElementById('registerButton');
var registerSuccess = document.getElementById('registerSuccess');
var registerSuccessSection = document.getElementById('registerSuccessSection');
var registerFailed = document.getElementById('registerFailed');
var premium = document.getElementById('premium'); 
var basic = document.getElementById('basic');
var visa = document.getElementById('visa');
var payPal = document.getElementById('payPal');
var free = document.getElementById('free');

var newData = [];

// Check for data stored in local Storage
if(localStorage.getItem('storedUsers')==null){
    var storedData = [];
}

else{
    storedData = JSON.parse(localStorage.getItem('storedUsers'))
}

console.log(storedData);

for(var i=0 ; i<getElements.length ; i++){
    newData[i]= getElements[i];
}

document.addEventListener('click' , function(e){
    if(e.target==registerButton){
        createAccount();
    }
})

// document.addEventListener('keypress' , function(e){
//     if(e.target==newData[0]){
        
//     }
// })

document.addEventListener('keyup' , function(e){
    if(e.target==newData[0]){
        validateUserAge();
    }

    if(e.target==newData[1]){
        validateUserEmail();
    }

    if(e.target==newData[2]){
        validateName(newData[2]);
    }

    if(e.target==newData[3]){
        validateName(newData[3]);
    }

    if(e.target==newData[4]){
        validatePassword();
    }

    if(e.target==newData[5]){
        passwordIdentical();  
    }
})



function createAccount(){
    // Here we will first check the payment method and 
    // user's package
    if(searchExisting()==true){
        registerFailed.innerHTML = 'User Already exists Please login';
        registerFailed.style.display = 'block';
        registerSuccessSection.style.display = 'none';    
    }

    else if(validateUserAge() && validateUserEmail() && validateName(newData[2]) && validateName(newData[3]) && validatePassword() && passwordIdentical()){
        var newUser = {
            userAge : newData[0].value,
            userEmail : newData[1].value,
            userFirstName : newData[2].value,
            userLastName : newData[3].value,
            userPassword : newData[4].value,
            userPackage : checkPackage(),
            userPayment : checkPayment()
            }
    
        storedData.push(newUser);
        console.log(storedData);
        localStorage.setItem('storedUsers' , JSON.stringify(storedData));
        registerSuccessSection.innerHTML = 'Account Created';
        registerSuccessSection.style.display = 'block';
        registerFailed.style.display='none';
        clearForm();
    }

    else{
        registerFailed.innerHTML = 'Please check missing Data';
        registerFailed.style.display = 'block';
        registerSuccessSection.style.display = 'none';
    }
}




// This Section is to verify user's data and get data from user


function getData(){

}

function checkPackage(){
    if(premium.checked){
        console.log(premium.value);
        return premium.value
    }

    else if(basic.checked){
        console.log(basic.value);
        return basic.value
    }
    else {
        console.log(free.value);
        return free.value;
    }
}

function checkPayment(){
    if(visa.checked){
        console.log(visa.value);
        return visa.value;
    }

    else{
        console.log(payPal.value);
        return payPal.value;
    }
}

function validateUserAge(){
    var regex = /^(1[6-9]|[2-9][0-9])$/g;
    if(regex.test(newData[0].value)==true){
        newData[0].classList.remove('is-invalid');
        newData[0].classList.add('is-valid');
        return true;
    }

    else if(newData[0].value==""){
        newData[0].classList.remove('is-invalid');
        newData[0].classList.remove('is-valid');
        return false; 
    }
    
    else{
        newData[0].classList.add('is-invalid');
        return false;
    }
}

function validateUserEmail(){
    var regex =/^([A-Z]|[a-z]|[0-9]){1,}@[A-Z a-z 0-9]{1,7}\.[a-z]{3}$/g;
    if(regex.test(newData[1].value)==true){
        newData[1].classList.remove('is-invalid');
        newData[1].classList.add('is-valid');
        return true;
    }

    else if(newData[1].value==""){
        newData[1].classList.remove('is-invalid');
        newData[1].classList.remove('is-valid');
        return false; 
    }

    else{
        newData[1].classList.add('is-invalid');
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
    if(regex.test(newData[4].value)==true){
        newData[4].classList.remove('is-invalid');
        newData[4].classList.add('is-valid');
        passwordIdentical();
        return true;
    }

    else if(newData[4].value==""){
        newData[4].classList.remove('is-invalid');
        newData[4].classList.remove('is-valid');
        passwordIdentical();
        return false; 
    }

    else{
        newData[4].classList.add('is-invalid');
        passwordIdentical();
        return false;
    }
}

function passwordIdentical(){
    if(newData[5].value==newData[4].value){
        newData[5].classList.remove('is-invalid');
        newData[5].classList.add('is-valid');
        return true;
    }

    else if(newData[5].value==""){
        newData[5].classList.remove('is-invalid');
        newData[5].classList.remove('is-valid');
        return false;   
    }

    else{
        newData[5].classList.add('is-invalid');
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

function clearForm(){
    newData[0].value="";
    newData[1].value="";
    newData[2].value="";
    newData[3].value="";
    newData[4].value="";
    newData[5].value="";
    validateUserAge();
    validateUserEmail();
    validateName(newData[2]);
    validateName(newData[3]);
    validatePassword();
}