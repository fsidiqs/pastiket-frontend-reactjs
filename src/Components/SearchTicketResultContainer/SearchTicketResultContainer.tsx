import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { SiEthiopianairlines } from "react-icons/si";

import styles from "./SearchTicketResultContainer.module.css";
import React from "react";
import airlineImg from "../../Assets/gi.png";

const Offers = [
   {
      id: 1,
      imgSrc: airlineImg,
      destTitle: "Machu Picchu",
      location: "Peru",
      price: "13.500.000",
   },
   {
      id: 2,
      imgSrc: airlineImg,
      destTitle: "Guanajuato",
      location: "Mexico",
      price: "1.400.000",
   },
];

const SearchTicketResultContainer: React.FC = () => {
   return (
      <section className="container section">
         <div>
            <div className={`${styles.mainContent} grid`}>
               {Offers.map((offer) => {
                  return (
                     <div className={styles.ticketCard}>
                        <div className={styles.ticketContent}>
                           <div className={`${styles.flightHeader}`}>
                              <img src={offer.imgSrc} alt="Image Name" />

                              <div className={styles.flightText}>
                                 <h4>Garuda Indonesia</h4>
                                 <div>
                                    <span>CGK-Jakarta</span>
                                    <span>-</span>
                                    <span>CGK-Jakarta</span>
                                 </div>
                              </div>
                           </div>

                           <div className={styles.ticketDetails}>
                              <div className={styles.ticketInfo}>
                                 <small>Penerbangan</small>
                                 <span>Kam, 02 Feb 2023 (9 Days)</span>
                              </div>
                              <div>
                                 <span className={styles.status}>Transit</span>
                                 <span className={styles.status}>9 Day</span>
                              </div>
                           </div>

                           <div className={styles.ticketFooter}>
                              <div className={styles.availableSeats}>
                                 <small>Available</small>
                                 <span>80 pax</span>
                              </div>
                              <div className={styles.ticketPrice}>
                                 <h4>RP {offer.price}</h4>
                              </div>
                           </div>

                           <button className={`${styles.btn} btn flex`}>
                              Pilih Program
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default SearchTicketResultContainer;
