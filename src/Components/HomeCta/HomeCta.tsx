import React from "react";
import HomeCtaCSS from "./HomeCta.module.css"; // Import CSS module

const Home = () => {
   return (
      <div className={HomeCtaCSS.componentWrapper}>
         <div className={HomeCtaCSS.header1}>
            <span className={`${HomeCtaCSS.heading1Text}`}>
               Cari Tiket
            </span>
            <span className="textNormal">
               Cari tiket sesuai kebutuhan anda
            </span>
         </div>
         <div className="submit1">
            <span className={`${HomeCtaCSS.t112}`}>Cari Tiket Umroh</span>
         </div>
      </div>
   );
};

export default Home;
