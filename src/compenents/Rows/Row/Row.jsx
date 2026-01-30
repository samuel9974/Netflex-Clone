import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

// Row Component: Displays a horizontal scrollable row of movies/shows with trailer functionality
// Props:
//   - title: The name/label for the row (e.g., "NETFLIX ORIGINALS", "Trending Now")
//   - fetchUrl: The API endpoint URL to fetch movies/shows data
//   - isLargeRow: Boolean flag to determine if poster or backdrop image is displayed
const Row = ({ title, fetchUrl, isLargeRow }) => {
  // State to store the list of movies/shows fetched from the API
  const [movies, setMovie] = useState([]);
  // State to store the YouTube video ID for the trailer that's currently being played
  const [trailerUrl, setTrailerUrl] = useState("");

  // Base URL for loading images from The Movie Database (TMDB)
  const base_url = "https://image.tmdb.org/t/p/original";

  // useEffect: Fetches movie/show data from the API when component mounts or fetchUrl changes
  useEffect(() => {
    (async () => {
      try {
        // Make an API request using the provided fetchUrl
        const request = await axios.get(fetchUrl);
        // Store the results (array of movies/shows) in state
        setMovie(request.data.results);
      } catch (error) {
        // Log any errors that occur during the API call
        console.log("error", error);
      }
    })();
  }, [fetchUrl]); // Dependency array: refetch data whenever fetchUrl changes

  // handleClick: Toggles trailer playback on and off
  const handleClick = (movie) => {
    if (trailerUrl) {
      // If a trailer is already playing, close it by resetting the URL
      setTrailerUrl("");
    } else {
      // If no trailer is playing, fetch the trailer for the clicked movie
      // Try to get title from multiple fields (handles both movies and TV shows)
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          // Extract the YouTube video ID from the URL
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          // Store the video ID in state to display the YouTube player
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("error", error));
    }
  };

  // Configuration options for the YouTube player
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1, // Automatically start playing the video
    },
  };

  return (
    <div className="row">
      {/* Row title */}
      <h2>{title}</h2>
      {/* Container for the horizontally scrollable movie/show posters */}
      <div className="row_posters">
        {/* Map through the movies array and display each one as an image */}
        {movies.map((movie, index) => (
          <img
            // Trigger handleClick when user clicks on a movie poster
            onClick={() => handleClick(movie)}
            key={index}
            // Construct the image URL: use poster_path for large rows, backdrop_path for regular rows
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            // Apply styling: add 'row_posterLarge' class if isLargeRow is true
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            // Hide images that fail to load (missing or broken image URLs)
            onError={(e) => (e.target.style.display = "none")}
          />
        ))}
      </div>
      {/* YouTube player: Only displayed when a trailerUrl is set */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
