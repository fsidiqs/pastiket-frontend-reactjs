import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { SiEthiopianairlines } from "react-icons/si";

import styles from "./SearchTicketResultContainer.module.css";
import React from "react";

const Offers = [
   {
      id: 1,
      imgSrc: "img",
      destTitle: "Machu Picchu",
      location: "Peru",
      price: "13.500.000",
   },
   {
      id: 2,
      imgSrc: "img",
      destTitle: "Guanajuato",
      location: "Mexico",
      price: "1.400.000",
   },
];

const SearchTicketResultContainer: React.FC = () => {
   return (
      <section className="container section">
         <div >
            <div className={`${styles.mainContent} grid`}>
               {Offers.map((offer) => {
                  return (
                     <div className={styles.searchCard}>
                        <div className={styles.searchItems}>
                           <div className={`${styles.flightType} grid`}>
                              <div>
                                 <h4>Garuda Indonesia</h4>
                                 <div>
                                    <span>CGK-Jakarta</span>
                                    <span>-</span>
                                    <span>CGK-Jakarta</span>
                                 </div>
                              </div>
                              <div>
                                 <span className={styles.status}>Transit</span>
                                 <span className={styles.status}>9 Day</span>
                              </div>
                           </div>


                           <div className={styles.searchDate}>
                           <AiOutlineCalendar className={styles.icon} />
                              <div className={styles.singleQuery}>
                                 <small>Penerbangan</small>
                                 <span>Kam, 02 Feb 2023 (9 Days)</span>
                              </div>
                           </div>

                           <div className={styles.searchDate}>
                              <BsFillPersonFill className={styles.icon} />
                              <div className={styles.singleQuery}>
                                 <small>Jemaah</small>
                                 <span>Paketan (25 pax, 35pax)</span>
                              </div>
                           </div>

                           <div className={styles.searchDate}>
                              <SiEthiopianairlines className={styles.icon} />
                              <div className={styles.singleQuery}>
                                 <small>Available</small>
                                 <span>80 pax</span>
                              </div>
                           </div>

                           <div className="flex">
                              <AiFillDollarCircle className={styles.icon} />
                              {/* <small>Address</small> */}
                              <h4>{offer.price}</h4>
                           </div>

                           <button className={`${styles.btn} btn flex`}>Pilih Program</button>
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
