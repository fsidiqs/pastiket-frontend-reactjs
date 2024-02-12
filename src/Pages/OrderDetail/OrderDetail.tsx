import { useNavigate } from "react-router-dom";
import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import styles from "./OrderDetail.module.css";

const OrderDetailPage: React.FC = () => {
   const navigate = useNavigate();

   return (
      <>
         <NavigationTop
            MenuName="Detail Pemesanan"
            // MenuDescription=
         />

         <div className="bodyContentFlexRow">
            <div className={`${styles.t241} ${styles.componentWrapper}`}>
               <div className={`${styles.t242} ${styles.flightInfo1}`}>
                  <div className={`${styles.t243} ${styles.airlinerouterow}`}>
                     <span className={`${styles.t245} ${styles.heading1Text}`}>
                        CGK - JED
                     </span>
                     <span className={`${styles.t244}`}>
                        CGK - Jakarta -&gt; JED - Jeddah
                     </span>
                  </div>
                  <div className={`${styles.t246} ${styles.flightTypeWrapper}`}>
                     <div className={`${styles.t247} ${styles.badgeprimary}`}>
                        <span className={`${styles.t248}`}>Direct</span>
                     </div>
                     <div className={`${styles.t249} ${styles.badgedanger}`}>
                        <span className={`${styles.t250}`}>9 DAY</span>
                     </div>
                  </div>
               </div>
               <div className={`${styles.t251} ${styles.flightInfo2}`}>
                  <div className={`${styles.t254}`}>
                     <span
                        className={`${styles.t255} ${styles.flightInfoTitle}`}
                     >
                        Available
                     </span>
                     <span className={`${styles.t256}`}>40 PAX</span>
                  </div>
                  <div className={`${styles.t252}`}>
                     <p className={`${styles.t253} ${styles.flightPrice}`}>
                        Rp. 14.000.000
                     </p>
                  </div>
               </div>
            </div>
            <div className={`${styles.t257} ${styles.componentWrapper}`}>
               <div
                  className={`${styles.t261} ${styles["flight-detail-card"]}`}
               >
                  <div
                     className={`${styles.t280} ${styles["flight-detail-content"]}`}
                  >
                     <div
                        className={`${styles.t258} ${styles["flight-event-type"]}`}
                     >
                        <i
                           className={`${styles.t259} fa-plane-departure fa-solid`}
                        ></i>
                        <span className={`${styles.t260}`}>Keberangkatan</span>
                     </div>
                     <div className={`${styles.t262} ${styles.airlineRoute}`}>
                        <img
                           src="assets/c3901b3e1a3afbe739e71b1a27d60f98_1605.png"
                           loading="lazy"
                           alt="null"
                           className={`${styles.t263} ${styles.airlineLogo}`}
                        />
                        <div className={`${styles.t264}`}>
                           <span
                              className={`${styles.t265} ${styles.airlineName}`}
                           >
                              Garuda Indonesia
                           </span>
                           <span className={`${styles.t266}`}>GA-258</span>
                        </div>
                     </div>
                     <div className={`${styles.t279} ${styles.divider}`}></div>
                     <div className={`${styles.t267} ${styles.airlineRoute}`}>
                        <div className={`${styles.t275}`}>
                           <span
                              className={`${styles.t276} ${styles.airlineName}`}
                           >
                              CGK
                           </span>
                           <span className={`${styles.t277}`}>07:45</span>
                           <span className={`${styles.t278}`}>
                              Rab, 01/02/2023
                           </span>
                        </div>
                        <div className={`${styles.t272}`}>
                           <span
                              className={`${styles.t273} ${styles.airlineName}`}
                           >
                              6h 15m
                           </span>
                           <span className={`${styles.t274}`}>-&gt;</span>
                        </div>
                        <div className={`${styles.t268}`}>
                           <span
                              className={`${styles.t269} ${styles.airlineName}`}
                           >
                              JED
                           </span>
                           <span className={`${styles.t270}`}>
                              09:00
                              <br />
                           </span>
                           <span className={`${styles.t271}`}>
                              Rab, 01/02/2023
                           </span>
                        </div>
                     </div>
                  </div>
                  <div
                     className={`${styles.t281} ${styles["flight-detail-content"]}`}
                  >
                     <div
                        className={`${styles.t282} ${styles["flight-event-type"]}`}
                     >
                        <i
                           className={`${styles.t283} fa-plane-departure fa-solid`}
                        ></i>
                        <span className={`${styles.t284}`}>Kepulangan</span>
                     </div>
                     <div className={`${styles.t285} ${styles.airlineRoute}`}>
                        <img
                           src="assets/c3901b3e1a3afbe739e71b1a27d60f98_1605.png"
                           loading="lazy"
                           alt="null"
                           className={`${styles.t286} ${styles.airlineLogo}`}
                        />
                        <div className={`${styles.t287}`}>
                           <span
                              className={`${styles.t288} ${styles.airlineName}`}
                           >
                              Garuda Indonesia
                           </span>
                           <span className={`${styles.t289}`}>GA-258</span>
                        </div>
                     </div>
                     <div className={`${styles.t290} ${styles.divider}`}></div>
                     <div className={`${styles.t291} ${styles.airlineRoute}`}>
                        <div className={`${styles.t295}`}>
                           <span
                              className={`${styles.t296} ${styles.airlineName}`}
                           >
                              JED
                           </span>
                           <span className={`${styles.t297}`}>09:45</span>
                           <span className={`${styles.t298}`}>
                              Rab, 11/02/2023
                           </span>
                        </div>
                        <div className={`${styles.t292}`}>
                           <span
                              className={`${styles.t293} ${styles.airlineName}`}
                           >
                              6h 15m
                           </span>
                           <span className={`${styles.t294}`}>-&gt;</span>
                        </div>
                        <div className={`${styles.t299}`}>
                           <span
                              className={`${styles.t300} ${styles.airlineName}`}
                           >
                              JED
                           </span>
                           <span className={`${styles.t301}`}>
                              11:00
                              <br />
                           </span>
                           <span className={`${styles.t302}`}>
                              Rab, 11/02/2023
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={`${styles.t303} ${styles.componentWrapper}`}>
               <div
                  className={`${styles.t304} ${styles["total-jamaah-input-wrapper"]}`}
               >
                  <div>
                     <span className={`${styles.t317}`}>
                        Pilih Paket Jumlah Jamaah
                     </span>
                  </div>
                  <div
                     className={`${styles.t306} ${styles["input-jamaah-group"]}`}
                  >
                     <div className={`${styles["input-jamaah-buttons"]}`}>
                        <div className={`btn-plain`}>
                           <span>Manual</span>
                        </div>
                        <div className={`btn-primary`}>
                           <span>25 Pax</span>
                        </div>
                        <div className={`btn-plain`}>
                           <span>35 Pax</span>
                        </div>
                        <div className={`btn-plain`}>
                           <span>45 Pax</span>
                        </div>
                        <div className={`btn-plain`}>
                           <span>90 Pax</span>
                        </div>
                     </div>
                     <div className={`flex-column`}>
                        <span className={`text-bold`}>Jumlah Jamaah</span>
                        <input
                           type="number"
                           name=""
                           id=""
                           disabled={true}
                           value="25"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={`${styles.componentWrapper}`}>
               <div className={`${styles.t251} ${styles.flightInfo2}`}>
                  <div className={`${styles.t254}`}>
                     <span
                        className={`${styles.t255} ${styles.flightInfoTitle}`}
                     >
                        Total Pembayaran
                     </span>
                     <span className={`${styles.t256}`}>25 Jamaah</span>
                  </div>
                  <div className={`${styles.t252}`}>
                     <p className={`${styles.t253} ${styles.flightPrice}`}>
                        Rp. 350.000.000,.
                     </p>
                  </div>
               </div>
            </div>

            <div className={`${styles.t318} ${styles.contentwrapper}`}>
               <input
                  type="button"
                  value="Pesan Sekarang"
                  className={`${styles.t319} ${styles["submit-1"]}`}
                  onClick={() => {
                     return navigate("/payment");
                  }}
               />
            </div>
         </div>
      </>
   );
};

export default OrderDetailPage;
