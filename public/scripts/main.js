

const netflixOriginals = document.getElementById('netflixOriginals');
const trending = document.getElementById('trending');
const topRated = document.getElementById('topRated');



window.onload = () => {
    getOriginals();
    getTrendingNow();
    getTopRated();
}


const fetchMovies = async (url, dom_element, path_type) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results);
    showMovies(data, dom_element, path_type);
    // return data;
}

const showMovies = async (movies, dom_element, path_type) => {
    // console.log(movies.results);
    for (let movie of movies.results) {
        let imageElement = document.createElement('img');
        imageElement.setAttribute('data-id', movie.id);
        imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
        dom_element.appendChild(imageElement);
    }
}


function getOriginals() {
    let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    fetchMovies(url, netflixOriginals, "poster_path");
}
function getTrendingNow() {
    let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    fetchMovies(url, trending, "backdrop_path");
}
function getTopRated() {
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
    fetchMovies(url, topRated, "backdrop_path");
}

