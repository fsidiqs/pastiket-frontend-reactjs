import { AiFillDollarCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import styles from "./ProductDetail.module.css";
import React from "react";

const Offers = [
   {
      id: 1,
      imgSrc: "img",
      destTitle: "Machu Picchu",
      location: "Peru",
      price: "13.500.000",
   },
];

const SearchTicketResultContainer: React.FC = () => {
   return (
      <section className="container section">
         <div>
            <div className={`${styles.mainContent} grid`}>
               {Offers.map((offer) => {
                  return (
                     <div className={styles.searchCard}>
                        <div className={styles.searchItems}>
                           <div className={`${styles.flightType} grid`}>
                              <div>
                                 <h4>Garuda Indonesia</h4>
                                 <div>
                                    <span>CGK - Jakarta</span>
                                    <span> - </span>
                                    <span>JED - Jeddah</span>
                                 </div>
                              </div>
                              <div>
                                 <span className={styles.status}>Transit</span>
                                 <span className={styles.status}>9 Day</span>
                              </div>
                           </div>

                           <div className={styles.searchDate}>
                              <div className={styles.singleQuery}>
                                 <small>CGK</small>
                                 <span>07:45</span>
                                 <span>Rab, 01/02/2023</span>
                              </div>
                              <div className={styles.singleQuery}>
                                 <small>6h 15m</small>
                                 <BsArrowRight/>
                              </div>
                              <div className={styles.singleQuery}>
                                 <small>JED</small>
                                 <span>09:00</span>
                                 <span>Rab, 01/02/2023</span>
                              </div>
                           </div>

                           <div className={styles.searchDate}>
                              <div className={styles.singleQuery}>
                                 <small>JED</small>
                                 <span>09:45</span>
                                 <span>Rab, 11/02/2023</span>
                              </div>
                              <div className={styles.singleQuery}>
                                 <small>6h 15m</small>
                                 <BsArrowRight/>
                              </div>
                              <div className={styles.singleQuery}>
                                 <small>CGK</small>
                                 <span>09:11</span>
                                 <span>Rab, 11/02/2023</span>
                              </div>
                           </div>

                           <div className="flex">
                              <AiFillDollarCircle className={styles.icon} />
                              {/* <small>Address</small> */}
                              <h4>{offer.price}</h4>
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
