import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

// Banner Component: Hero section that displays a random Netflix Original movie/show
// Features a large background image, title, buttons, and description
// This is the prominent featured content at the top of the home page
const Banner = () => {
  // State to store the randomly selected movie/show data
  const [movie, setMovie] = useState({});

  // useEffect: Fetches Netflix Originals and randomly selects one to display
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

  // Helper function to truncate long text strings with ellipsis (...)
  // Parameters:
  //   str: The string to truncate
  //   n: Maximum number of characters to keep
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        // Use the movie's backdrop image as background
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}")`,
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Don't repeat the image
      }}
    >
      {/* Banner content: Title, buttons, and description */}
      <div className="banner_contents">
        {/* Display movie/show title - handles different API response field names */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Action buttons: Play and My List */}
        <div className="banner_buttons">
          {/* Play button with special styling */}
          <button className="banner_button play">Play</button>
          {/* My List button to add to watchlist */}
          <button className="banner_button">My List</button>
        </div>

        {/* Movie/show description - truncated to 150 characters with ellipsis */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      {/* Fade-out effect at the bottom of the banner (gradient overlay) */}
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
