import React from "react";
import FlightInfoCSS from "./FlightInfo.module.css"; // Import CSS module
import giIcon from "../../Assets/gi-icon.png";

const Flights = [
   {
      id: 1,
      airline: "Garuda Indonesia",
      route: "CGK - Jakarta -&gt; JED - Jeddah",
      date: "01 Feb - 11 Feb 2023",
      type: "Direct",
      duration: "9 DAAY",
      availability: "40 PAX",
      price: "Rp. 14.000.000",
      airlineIcon: giIcon,
   },
   {
      id: 2,
      airline: "Garuda Indonesia",
      route: "CGK - Jakarta -&gt; JED - Jeddah",
      date: "01 Feb - 11 Feb 2023",
      type: "Direct",
      duration: "9 DAAY",
      availability: "40 PAX",
      price: "Rp. 14.000.000",
      airlineIcon: giIcon,
   },
   {
      id: 3,
      airline: "Garuda Indonesia",
      route: "CGK - Jakarta -&gt; JED - Jeddah",
      date: "01 Feb - 11 Feb 2023",
      type: "Direct",
      duration: "9 DAAY",
      availability: "40 PAX",
      price: "Rp. 14.000.000",
      airlineIcon: giIcon,
   },
   {
      id: 4,
      airline: "Garuda Indonesia",
      route: "CGK - Jakarta -&gt; JED - Jeddah",
      date: "01 Feb - 11 Feb 2023",
      type: "Direct",
      duration: "9 DAAY",
      availability: "40 PAX",
      price: "Rp. 14.000.000",
      airlineIcon: giIcon,
   },
   {
      id: 5,
      airline: "Garuda Indonesia",
      route: "CGK - Jakarta -&gt; JED - Jeddah",
      date: "01 Feb - 11 Feb 2023",
      type: "Direct",
      duration: "9 DAAY",
      availability: "40 PAX",
      price: "Rp. 14.000.000",
      airlineIcon: giIcon,
   },
];

const FlightInfo = () => {
   return (
      <div className={FlightInfoCSS.componentWrapper}>
         {Flights.map((flight) => {
            return (
               <div className={`${FlightInfoCSS.flightCard} `}>
                  <div className={`${FlightInfoCSS.flightCardHeader} `}>
                     <div className={`${FlightInfoCSS.airlineRoute} `}>
                        <img
                           src={flight.airlineIcon}
                           loading="lazy"
                           alt="null"
                           className={`${FlightInfoCSS.airlineLogo} `}
                        />
                        <div className={`${FlightInfoCSS.airlineInfo} `}>
                           <span className={`${FlightInfoCSS.airlineName} `}>
                              Garuda Indonesia
                           </span>
                           <span>CGK - Jakarta -&gt; JED - Jeddah</span>
                        </div>
                     </div>
                     <div className={`${FlightInfoCSS.flightInfo1} `}>
                        <div className={`${FlightInfoCSS.flightDate} `}>
                           <span>Penerbangan</span>
                           <span>01 Feb - 11 Feb 2023</span>
                        </div>
                        <div className={`${FlightInfoCSS.flightTypeWrapper} `}>
                           <div className={`${FlightInfoCSS.buttonPrimary1} `}>
                              <span>Direct</span>
                           </div>
                           <div className={`${FlightInfoCSS.buttonPrimary1} `}>
                              <span>9 DAAY</span>
                           </div>
                        </div>
                     </div>
                     <div className={`${FlightInfoCSS.flightInfo2} `}>
                        <div className={`${FlightInfoCSS.flightAvailability}`}>
                           <span>Available</span>
                           <span>40 PAX</span>
                        </div>
                        <div>
                           <p className={`${FlightInfoCSS.flightPrice} `}>
                              Rp. 14.000.000
                           </p>
                        </div>
                     </div>
                     <div>
                        <div className="submit1">
                           <span>Pilih Program</span>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default FlightInfo;
