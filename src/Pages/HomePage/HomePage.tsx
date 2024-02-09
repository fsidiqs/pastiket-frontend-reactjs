import React from "react";
import "./HomePage.module.css";
import Navbar from "../../Components/Navbar/NavbarMain/Navbar";
import Home from "../../Components/Home/Home";
import Blog from "../../Components/Blog/Blog";
import Popular from "../../Components/Popular/Popular";
import Offer from "../../Components/Offer/Offer";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";

const HomePage: React.FC = () => {
   return (
      <>
         <Navbar />
         {/* <Home /> */}
         <Popular />
         <Offer />
         <About />
         <Blog />
         <Footer />
      </>
   );
};

export default HomePage;
