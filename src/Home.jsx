import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar";
import Header from "./Header";
import Function from "./Function";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () =>{
  return(
    <>
      <Navbar/>
      <Header/>
      <Function/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;