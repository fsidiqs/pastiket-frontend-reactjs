import React from "react";
import FlightFilterCSS from "./FlightFilter.module.css"; // Import CSS module

const FlightFilter = () => {
   return (
      <div className={`${FlightFilterCSS.flightFilterWrapper} ${FlightFilterCSS.secondStyle}  `}>
         <div className={`${FlightFilterCSS.dateFilterHeader}  `}>
            <div className="header1">
               <span className="heading1Text">Tiket</span>
               <span className="textNormal">Kapan kamu akan berangkat?</span>
            </div>
            <div>
               <span className="textNormal">Lihat semua</span>
            </div>
         </div>
         <div className={`${FlightFilterCSS.dateFilter}`}>
            <input type="button" value="Semua" className="button1" />

            <input type="button" value="Jan" className="button1" />

            <input type="button" value="Feb" className="button1" />

            <input type="button" value="Mar" className="buttonPrimary1" />

            <input type="button" value="Apr" className="button1" />

            <input type="button" value="Mei" className="button1" />

            <input type="button" value="Jun" className="button1" />

            <input type="button" value="Jul" className="button1" />

            <input type="button" value="Agu" className="button1" />

            <input type="button" value="Sep" className="button1" />

            <input type="button" value="Okt" className="button1" />

            <input type="button" value="Nop" className="button1" />

            <input type="button" value="Des" className="button1" />
         </div>
      </div>
   );
};

export default FlightFilter;
