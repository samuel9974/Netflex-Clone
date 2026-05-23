/**
 * Preconfigured Axios client for The Movie Database (TMDB) API v3.
 * Base URL: https://api.themoviedb.org/3
 * @type {import('axios').AxiosInstance}
 */
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
