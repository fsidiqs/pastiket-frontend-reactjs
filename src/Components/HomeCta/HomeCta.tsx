import React from "react";
import HomeCtaCSS from "./HomeCta.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
   return (
      <div className={HomeCtaCSS.componentWrapper}>
         <div className={HomeCtaCSS.header1}>
            <span className={`${HomeCtaCSS.heading1Text}`}>Cari Tiket</span>
            <span className="textNormal">Cari tiket sesuai kebutuhan anda</span>
         </div>
         <div
            className="submit1"
            onClick={() => {
               return navigate("/search-ticket");
            }}
         >
            <span className={`${HomeCtaCSS.t112}`}>Cari Tiket Umroh</span>
         </div>
      </div>
   );
};

export default Home;
