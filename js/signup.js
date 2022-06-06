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

