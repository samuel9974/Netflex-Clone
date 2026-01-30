import React from "react";
import Row from "../Row/Row.jsx";
import request from "../../../utils/requests.js";

// RowList Component: Main container that displays all movie/show categories
// This component renders multiple Row components, each displaying a different category
// It acts as an orchestrator for all the movie rows shown on the main page
const RowList = () => {
  return (
    <>
      {/* Netflix Originals Row - Shows Netflix exclusive content
          isLargeRow={true} means it displays larger poster images */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />

      {/* Trending Now Row - Shows currently trending TV shows */}
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      {/* Top Rated Row - Shows the highest-rated movies of all time */}
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />

      {/* Action Movies Row - Displays movies in the action genre */}
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      {/* Comedy Movies Row - Shows comedy genre movies */}
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

      {/* Horror Movies Row - Displays horror genre movies */}
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

      {/* Romance Movies Row - Shows romance genre movies */}
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />

      {/* TV Shows Row - Displays popular TV shows */}
      <Row title="TV Shows" fetchUrl={request.fetchTvShow} />

      {/* Documentaries Row - Shows documentary films */}
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </>
  );
};

export default RowList;
