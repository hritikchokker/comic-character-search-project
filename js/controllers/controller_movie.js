const movieUtil = new MovieUtil;
const movieView = new MovieView;
// let seasonSearch = document.getElementById('seasonsearch').value;
// let episodeSearch = document.getElementById('episodesearch').value;
window.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('moviesubmit').addEventListener('click', (e) => {
        document.getElementById('imdbsearch').value === '' && document.getElementById('namesearch').value === '' && document.getElementById('yearsearch').value ? alert('enter all values') : movieFunction();
        e.preventDefault();
    });
});


function movieFunction() {
    let imdbSearch = document.getElementById('imdbsearch').value;
    let nameSearch = document.getElementById('namesearch').value;
    let yearSearch = document.getElementById('yearsearch').value;
    console.log(imdbSearch, nameSearch, yearSearch);
    // movieUtil.getMovie(imdbSearch, nameSearch, yearSearch)
    let output = `
            <div class="w-100 h-50 embed-responsive embed-responsive-16by9" >
            <iframe src="https://api.odb.to/embed?imdb_id=${imdbSearch}&title=${nameSearch}&year=${yearSearch}" 
        allowscriptaccess="always" allowfullscreen="true" scrolling="no" frameborder="0"></iframe>
        </div>`;
    document.getElementById('result').innerHTML = output;
}
// function movieTitle(imdbSearch, nameSearch, yearSearch){
//     console.log(imdbSearch, nameSearch, yearSearch);
//     movieutil.getAllMovie();
// }

//  ? alert("Enter a value first") : movieFunction();



//     if (imdbSearch === '' && nameSearch === '' && yearSearch === ''){
//         console.log(imdbSearch, nameSearch, yearSearch);
//         movieUtil.getMovie(imdbSearch, nameSearch, yearSearch);
//     }
//     else if (document.getElementById('imdbsearch').value == '' && document.getElementById('namesearch').value == '' && document.getElementById('yearsearch').value == '' && document.getElementById('seasonsearch').value == '' && document.getElementById('episodesearch').value == '' ){
//         console.log(imdbSearch, nameSearch, yearSearch, seasonSearch, episodeSearch);
//         movieUtil.getAllMovie(imdbSearch, nameSearch, yearSearch, seasonSearch, episodeSearch);
//     }
//     e.preventDefault();
// });