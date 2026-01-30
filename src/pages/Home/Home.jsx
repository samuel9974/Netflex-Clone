import React from "react";
import Header from "../../compenents/Header/Header.jsx";
import Footer from "../../compenents/Footer/Footer.jsx";
import Banner from "../../compenents/Banner/Banner.jsx";
import RowList from "../../compenents/Rows/RowsList/RowList.jsx";

// Home Page Component: Main page layout for the Netflix Clone application
// This component serves as the master page that combines all major sections:
// - Header (Navigation bar)
// - Banner (Hero section with featured content)
// - RowList (All movie/show category rows)
// - Footer (Copyright and links)
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
