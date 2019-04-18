// const movieUtil = new MovieUtil;
// const movieView = new MovieView;
// let seasonSearch = document.getElementById('seasonsearch').value;
// let episodeSearch = document.getElementById('episodesearch').value;
window.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('moviesubmit').addEventListener('click', (e) => {
        movieFunction();
        e.preventDefault();
    });
});

function movieFunction() {
    let imdbSearch = document.getElementById('imdbsearch');
    let nameSearch = document.getElementById('namesearch');
    let yearSearch = document.getElementById('yearsearch');
    let seasonSearch = document.getElementById('seasonsearch');
    let episodeSearch = document.getElementById('episodesearch');
    console.log(imdbSearch, nameSearch, yearSearch);
    // movieUtil.getMovie(imdbSearch, nameSearch, yearSearch)
    let output;
    if(imdbSearch.value !== '' && nameSearch.value !== '' && yearSearch.value !==''){
         output = `
            <div class="w-100 h-50 embed-responsive embed-responsive-16by9">
            <iframe src="https://api.odb.to/embed?imdb_id=${imdbSearch.value}&title=${nameSearch.value}&year=${yearSearch.value}" 
       height="auto" width="auto" allowscriptaccess="always" allowfullscreen="true" scrolling="no" frameborder="0"></iframe>
        </div>`;
    } else if(imdbSearch.value !=='' && seasonSearch.value !=='' && episodeSearch.value !==''){
         output = `
            <div class="w-100 h-50 embed-responsive embed-responsive-16by9">
               <iframe src="https://api.odb.to/embed?imdb_id=${imdbSearch.value}&s=${seasonSearch.value}&e=${episodeSearch.value}"
       height="auto" width="auto" allowscriptaccess="always" allowfullscreen="true" scrolling="no" frameborder="0"></iframe>
        </div>`;
    }else{
        console.log('error occured');

    }
   
    document.getElementById('result').innerHTML = output;
}


//  ? alert("Enter a value first") : movieFunction();


