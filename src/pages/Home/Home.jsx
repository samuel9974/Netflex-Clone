import React from 'react'
import Header from '../../compenents/Header/Header.jsx'
import Footer from '../../compenents/Footer/Footer.jsx'
import Banner from '../../compenents/Banner/Banner.jsx'
import RowList from '../../compenents/Rows/RowsList/RowList.jsx'

const Home = () => {
  return (
    <div> 
       <Header />
       <Banner />
       <RowList />
       <Footer />
    </div>
  )
}
export default Home