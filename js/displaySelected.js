var selectedTitle = document.getElementById('selectedTitle');
var movieTitle = document.getElementById('movieTitle');
var selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
var movieCover = document.getElementById('movieCover');
var releaseDate = document.getElementById('releaseDate');
var aboutInfo = document.getElementById('aboutInfo');
var adultContent = document.getElementById('adultContent');
var userRating = document.getElementById('userRating');

console.log(selectedMovie.photo);
selectedTitle.innerHTML = selectedMovie.title;
movieTitle.innerHTML = selectedMovie.title;
movieCover.src = selectedMovie.photo;
releaseDate.innerHTML = selectedMovie.releaseDate;
aboutInfo.innerHTML = selectedMovie.about;

if(selectedMovie.adultContent == true){
    adultContent.innerHTML = `<i class="fa-solid fa-circle-exclamation text-theme fs-4"></i>`
}

else{
    adultContent.innerHTML = `<i class="fa-solid fa-circle-check text-success fs-4"></i>`
}

userRating.innerHTML = selectedMovie.voting;



