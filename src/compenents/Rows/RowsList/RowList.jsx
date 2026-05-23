import React from "react";
import Row from "../Row/Row.jsx";
import styles from "./RowList.module.css";
import request from "../../../utils/requests.js";

/**
 * Renders all category rows on the home page (Originals, Trending, genres, TV, documentaries).
 * Composes multiple Row components with TMDB fetch URLs from the requests config.
 * Takes no parameters.
 * @returns {import('react').ReactElement} - A fragment of horizontally scrollable movie rows.
 */
const RowList = () => {
  return (
    <div className={styles.rows_list}>
      {/* Netflix Originals Row - Shows Netflix exclusive content
          isLargeRow={true} means it displays larger poster images */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />

      {/* Trending Now Row - Shows currently trending TV shows */}
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
        isLargeRow={true}
      />

      {/* Top Rated Row - Shows the highest-rated movies of all time */}
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} isLargeRow={true} />

      {/* Action Movies Row - Displays movies in the action genre */}
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} isLargeRow={true} />

      {/* Comedy Movies Row - Shows comedy genre movies */}
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} isLargeRow={true} />

      {/* Horror Movies Row - Displays horror genre movies */}
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} isLargeRow={true} />

      {/* Romance Movies Row - Shows romance genre movies */}
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} isLargeRow={true} />

      {/* TV Shows Row - Displays popular TV shows */}
      <Row title="TV Shows" fetchUrl={request.fetchTvShow} isLargeRow={true} />

      {/* Documentaries Row - Shows documentary films */}
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} isLargeRow={true} />
    </div>
  );
};

export default RowList;
