class MovieUtil{
    constructor(){
      
    }
  async  getMovie(imdbSearch, nameSearch, yearSearch) {
        const fullMovie = await fetch(`https://api.odb.to/embed?imdb_id=${imdbSearch}&title=${nameSearch}&year=${yearSearch}`);

        const watchMovie=await fullMovie.json({});
    
        return watchMovie;
    }
}