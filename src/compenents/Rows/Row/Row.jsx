import React, { useEffect, useRef, useState } from "react";
import styles from "./Row.module.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

/**
 * Renders a horizontal scrollable row of movie or TV show posters with trailer playback.
 * Fetches titles from the TMDB API on mount and when the fetch URL changes.
 * Assumes title, fetchUrl, and isLargeRow are not null or undefined.
 * @param {Object} props - Component props.
 * @param {string} props.title - Display label for the row (e.g. "Trending Now").
 * @param {string} props.fetchUrl - TMDB API endpoint path used to load row items.
 * @param {boolean} props.isLargeRow - When true, uses poster images and large poster styling.
 * @returns {import('react').ReactElement} - The row UI including posters, scroll controls, and optional trailer player.
 */
const Row = ({ title, fetchUrl, isLargeRow }) => {
  // State to store the list of movies/shows fetched from the API
  const [movies, setMovie] = useState([]);
  // State to store the YouTube video ID for the trailer that's currently being played
  const [trailerUrl, setTrailerUrl] = useState("");
  const rowPostersRef = useRef(null);

  // Base URL for loading images from The Movie Database (TMDB)
  const base_url = "https://image.tmdb.org/t/p/original";

  /**
   * Fetches movie or TV show results for this row when the component mounts or fetchUrl changes.
   * Assumes fetchUrl is not null or undefined.
   * @returns {void} - Updates movies state asynchronously; no return value.
   * On failure, logs to the console (e.g. network error, 401 invalid API key, or malformed response).
   */
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

  /**
   * Toggles trailer playback for a poster click: closes the player if one is open,
   * otherwise resolves a YouTube trailer URL and stores the video id in state.
   * Assumes movie is not null or undefined.
   * @param {Object} movie - TMDB result object for the clicked title.
   * @param {string} [movie.title] - Movie title, when applicable.
   * @param {string} [movie.name] - TV or alternate display name.
   * @param {string} [movie.original_name] - Original title fallback for lookup.
   * @returns {void} - Updates trailer state asynchronously; no return value.
   * On failure, logs to the console (e.g. trailer not found, invalid URL, or network error from movie-trailer).
   */
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

  /**
   * Scrolls the poster row horizontally by a fixed pixel amount.
   * Assumes direction is not null or undefined.
   * @param {"left" | "right"} direction - Scroll toward the start ("left") or end ("right") of the row.
   * @returns {void} - No return value; scrolls the DOM container when the ref is attached.
   * Does nothing if the poster container ref is not mounted (no error thrown).
   */
  const scrollRow = (direction) => {
    if (rowPostersRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      rowPostersRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.row}>
      {/* Row title */}
      <h2>{title}</h2>
      {/* Container for the horizontally scrollable movie/show posters */}
      <div className={styles.row_posters_wrapper}>
        <button
          type="button"
          className={styles.row_scroll_btn + " " + styles.row_scroll_btn_left}
          onClick={() => scrollRow("left")}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <div className={styles.row_posters} ref={rowPostersRef}>
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
            className={`${styles.row_poster} ${isLargeRow && styles.row_posterLarge}`}
            // Hide images that fail to load (missing or broken image URLs)
            onError={(e) => (e.target.style.display = "none")}
          />
        ))}
        </div>
        <button
          type="button"
          className={styles.row_scroll_btn + " " + styles.row_scroll_btn_right}
          onClick={() => scrollRow("right")}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
      {/* YouTube player: Only displayed when a trailerUrl is set */}
        <div className={styles.trailer_container} style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
