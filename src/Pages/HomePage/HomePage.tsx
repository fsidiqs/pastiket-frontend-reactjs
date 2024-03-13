import React from "react";
import "./HomePage.module.css";
import Navigation from "../../Components/Navigation/NavigationMain/Navigation";
import HomeCta from "../../Components/HomeCta/HomeCta";
import FlightFilter from "../../Components/FlightFilter/FlightFilter";
import FlightInfo from "../../Components/FlightInfo/FlightInfo";
import Blog from "../../Components/Blog/Blog";
import Offer from "../../Components/Offer/Offer";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import HomePageCSS from "./HomePage.module.css";

const HomePage: React.FC = () => {
   return (
      <>
         <div className={`${HomePageCSS.bodyWrapper}`}>
            <HomeCta />
            <FlightFilter />
            <FlightInfo />
            <Offer />
            <About />
            <Blog />
            <Footer />
         </div>
      </>
   );
};

export default HomePage;
