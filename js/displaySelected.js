var selectedTitle = document.getElementById('selectedTitle');

var selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));

selectedTitle.innerHTML = selectedMovie.title;

