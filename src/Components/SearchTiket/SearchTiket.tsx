import { BsArrowRightShort } from "react-icons/bs";
import { MdFlightTakeoff } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { SiEthiopianairlines } from "react-icons/si";
import styles from "./SearchTiket.module.css";
const Offers = [
   {
      id: 1,
      imgSrc: "img",
      destTitle: "Machu Picchu",
      location: "Peru",
      price: "13.500.000",
   },
];

const SearchTiket: React.FC = () => {
   return (
      <div className="container">
         <div className={`${styles.mainContent} grid`}>
            {Offers.map((offer) => {
               return (
                  <div className={styles.searchCard}>
                     <div className={styles.searchItems}>
                        <div className={`${styles.flightType} flex`}>
                           <span className={`${styles.status} ${styles.active}`}>Semua</span>
                           <span className={styles.status}>Direct</span>
                           <span className={styles.status}>Transit</span>
                        </div>

                        <div className={styles.searchDestination}>
                           <MdFlightTakeoff className={styles.icon} />
                           <div className={styles.singleQuery}>
                              <div>Berangkat</div>
                              <small>CGK - Jakarta</small>
                           </div>
                           <div className={styles.singleQuery}>
                              <BsArrowRightShort className={`${styles.icon} ${styles.arrow}`} />
                           </div>
                           <div className={styles.singleQuery}>
                              <div>Tujuan</div>
                              <small>JED - Jeddah</small>
                           </div>
                        </div>

                        <div className={styles.searchDate}>
                           <AiOutlineCalendar className={styles.icon}/>
                           <div className={styles.singleQuery}>
                              <div>Tanggal Pergi</div>
                              <small>Kam, 02 Feb 2023 (9 Days)</small>
                           </div>
                        </div>

                        <div className={styles.searchPackage}>
                           <BsFillPersonFill className={styles.icon}/>
                           <div className={styles.singleQuery}>
                              <div>Jemaah</div>
                              <small>Paketan (25 pax, 35pax)</small>
                           </div>
                        </div>

                        <div className={styles.searchAirline}>
                           <SiEthiopianairlines className={styles.icon}/>
                           <div className={styles.singleQuery}>
                              <div>Maskapai</div>
                              <small>Semua Maskapai</small>
                           </div>
                        </div>

                        <button className={`${styles.btn} btn flex`}>Cari</button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default SearchTiket;
