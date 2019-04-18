const movieutil=new MovieUtil;
const myview = new MovieView;
document.getElementById('submitmoviebutton').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('moviesearch').value == '' ? alert("Enter a value first") : movieFunction();
});

function movieFunction() {
    let movieSearch = document.getElementById('moviesearch').value;
    movieutil.getMovie(imdbsearch,namesearch,season,episode,year);
}