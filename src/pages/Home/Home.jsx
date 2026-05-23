import React from "react";
import Header from "../../compenents/Header/Header.jsx";
import Footer from "../../compenents/Footer/Footer.jsx";
import Banner from "../../compenents/Banner/Banner.jsx";
import RowList from "../../compenents/Rows/RowsList/RowList.jsx";

/**
 * Renders the main Netflix clone page layout: header, hero banner, content rows, and footer.
 * Takes no parameters.
 * @returns {import('react').ReactElement} - The full home page structure.
 */
const Home = () => {
  return (
    <div>
      {/* Navigation header at the top of the page */}
      <Header />

      {/* Hero banner section featuring a random Netflix Original */}
      <Banner />

      {/* Main content: Multiple rows of movies/shows by category */}
      <RowList />

      {/* Footer section with copyright and additional links */}
      <Footer />
    </div>
  );
};

export default Home;
