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
var trendingMoviesDay = document.getElementById('trendingMoviesDay');


async function getTrending(category, timeFrame, page){
    var x = await fetch(`https://api.themoviedb.org/3/trending/${category}/${timeFrame}?api_key=bf369bb0e503052f7e688dc460012ad0&page=${page}`);
    var myMovies = await x.json();
    for(var i=0 ; i<4 ; i++){
        if(i<2){
            trendingMoviesDay.innerHTML +=`
            <div class="col-lg-3 col-md-6 position-relative hover-cover">
            <div class="effect-dark d-flex flex-column justify-content-center">
                <div class="container d-flex flex-column gap-2 align-items-center">
                    <div class="text-white text-center">
                        <h3>${myMovies.results[i].original_title}</h3>
                        <p class="adjust-overview">${myMovies.results[i].overview}</p>
                        <button class="btn btn-danger bg-theme">More info</button>
                    </div>
        
                    <div class="mt-3 d-flex">
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <a data-bs-toggle="collapse" class="text-decoration-none text-theme" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1"><i class="fa-solid fa-share-nodes text-theme fs-5"></i></a>
                        </div>
        
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-heart text-theme fs-5"></i>
                        </div>
                        
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus text-theme fs-5"></i>
                        </div>
                    </div>
        
                    <div class="collapse" id="collapse1">
                        <div class="rounded-pill d-flex mt-2 justify-content-between">
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook-f text-theme fs-6"></i>
                            </div>
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook-messenger text-theme fs-6"></i>
                            </div>
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-whatsapp text-theme fs-6"></i>
                            </div>
                        </div>
                    </div>
        
        
                </div>
            </div>
            <img src="https://image.tmdb.org/t/p/w500${myMovies.results[i].poster_path}" class="w-100" alt="Cover" id="cover1">
        </div>
            `
        }
    
        else{
            trendingMoviesDay.innerHTML +=`
            <div class="col-lg-3 d-lg-inline d-none position-relative hover-cover">
            <div class="effect-dark d-flex flex-column justify-content-center">
                <div class="container d-flex flex-column gap-2 align-items-center">
                    <div class="text-white text-center">
                        <h3>${myMovies.results[i].original_title}</h3>
                        <p class="adjust-overview">${myMovies.results[i].overview}</p>
                        <button class="btn btn-danger bg-theme">More info</button>
                    </div>
    
                    <div class="mt-3 d-flex">
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <a data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3"><i class="fa-solid fa-share-nodes text-theme fs-5"></i></a>
                        </div>
    
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-heart text-theme fs-5"></i>
                        </div>
                        
                        <div class="icon-div-movie mx-2 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus text-theme fs-5"></i>
                        </div>
    
                    </div>
    
                    <div class="collapse" id="collapse3">
                        <div class="rounded-pill d-flex mt-2 justify-content-between">
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook-f text-theme fs-6"></i>
                            </div>
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook-messenger text-theme fs-6"></i>
                            </div>
                            <div class="icon-div-small mx-2 d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-whatsapp text-theme fs-6"></i>
                            </div>
                        </div>
                    </div>
    
    
                </div>
            </div>
            <img src="https://image.tmdb.org/t/p/w500${myMovies.results[i].poster_path}" class="w-100" alt="Cover">
        </div>
            `
    
        }
    }


}

getTrending('movie', 'day',1);





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
    var itemNumber = JSON.parse(localStorage.getItem('storedUsers'));
    if(localStorage.getItem('storedUsers')==null || itemNumber.length ==0){
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