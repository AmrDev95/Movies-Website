var allTrendings =[];
var pagination = document.querySelectorAll('.displayPagination');

async function getAllTrendings(category, timeFrame){
    for(var i=1; i<=9; i++){
        var x = await fetch(`https://api.themoviedb.org/3/trending/${category}/${timeFrame}?api_key=bf369bb0e503052f7e688dc460012ad0&page=${i}`);
        var myMovies = await x.json();
        allTrendings.push(myMovies);
    }
    displayFunc();
}

getAllTrendings('movie', 'day');


function displayFunc(){
    for (var i=1; i<=9; i++){
        for(var j=1; j<=20; j++){
            pagination[i-1].innerHTML +=`
            <div class="col-lg-3 col-sm-6 position-relative hover-cover">
            <div class="effect-dark d-flex flex-column justify-content-center">
                <div class="container d-flex flex-column gap-2 align-items-center">
                    <div class="text-white text-center">
                        <h3>${allTrendings[i-1].results[j-1].original_title}</h3>
                        <p class="adjust-overview">${allTrendings[i-1].results[j-1].overview}</p>
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
            <img src="https://image.tmdb.org/t/p/w500${allTrendings[i-1].results[j-1].poster_path}" class="w-100" alt="Cover">
        </div>
            `
        }
    }
}








