// API requests configuration - Contains all TMDB API endpoints for fetching different movie/show categories
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  // Fetch trending TV shows
  fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,

  // Fetch Netflix original series
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  // Fetch top rated movies
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  // Fetch action movies (genre id: 28)
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  // Fetch comedy movies (genre id: 35)
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  // Fetch horror movies (genre id: 27)
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  // Fetch romance movies (genre id: 10749)
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  // Fetch documentaries (genre id: 99)
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  // Fetch TV Shows
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&language=en-US`,
};

export default requests;
