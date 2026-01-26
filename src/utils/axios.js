// Axios instance configuration for TMDB API requests
import axios from "axios";

// Create axios instance with base URL for The Movie Database API
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
