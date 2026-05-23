import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import styles from "./Banner.module.css";

/**
 * Renders the home page hero with a random Netflix Original backdrop, title, actions, and description.
 * Loads featured content from TMDB on mount.
 * Takes no parameters.
 * @returns {import('react').ReactElement} - The banner section with background image and content overlay.
 * On API failure, logs to the console; the banner may render with empty or partial movie data.
 */
const Banner = () => {
 
  const [movie, setMovie] = useState({});

  /**
   * Fetches Netflix Originals and stores one random title for the hero background.
   * Runs once on mount. Takes no parameters.
   * @returns {void} - Updates movie state asynchronously; no return value.
   * On failure, logs to the console (e.g. network error or invalid API key).
   */
  useEffect(() => {
    (async () => {
      try {
        // Fetch Netflix Originals data from the API
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request.data);
        // Select a random movie/show from the results array
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        // Log any errors that occur during the API call
        console.log("error", error);
      }
    })();
  }, []); // Empty dependency array: only runs once when component mounts

  /**
   * Shortens a string to a maximum length and appends an ellipsis when truncated.
   * Assumes str and n are not null or undefined.
   * @param {string} str - The text to truncate (e.g. movie overview).
   * @param {number} n - Maximum character count before truncation.
   * @returns {string} - The original string if within the limit, otherwise a shortened string ending with "...".
   */
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        // Use the movie's backdrop image as background
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}")`,
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Don't repeat the image
      }}
    >
      {/* Banner content: Title, buttons, and description */}
      <div className={styles.banner_contents}>
        {/* Display movie/show title - handles different API response field names */}
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Action buttons: Play and My List */}
        <div className={styles.banner_buttons}>
          {/* Play button with special styling */}
          <button className={`${styles.banner_button} ${styles.play}`}>Play</button>
            {/* My List button to add to watchlist */}
          <button className={styles.banner_button}>My List</button>
        </div>

        {/* Movie/show description - truncated to 150 characters with ellipsis */}
        <h1 className={styles.banner_description}>{truncate(movie?.overview, 150)}</h1>
      </div>

      {/* Fade-out effect at the bottom of the banner (gradient overlay) */}
      <div className={styles.banner_fadeBottom} />
    </div>
  );
};

export default Banner;
