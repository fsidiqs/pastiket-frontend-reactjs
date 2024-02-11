import { BsArrowRightShort } from "react-icons/bs";
import { MdFlightTakeoff } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { SiEthiopianairlines } from "react-icons/si";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./SearchTicket.module.css";
import { useNavigate } from "react-router-dom";

type SearchTicketFormInputs = {
   flightType: string;
   // fill with keberangkatan in english please
   departure: string;
   destination: string;
   date: string;
   package: string;
   airline: string;
};

const SearchTiket: React.FC = () => {
   const navigate = useNavigate();

   const {
      control,
      watch,
      handleSubmit,
      formState: { errors, isDirty, isValid },
      setError,
   } = useForm<SearchTicketFormInputs>({ mode: "onChange" });

   const searchTicketHandler: SubmitHandler<SearchTicketFormInputs> = (
      data
   ) => {
      // add temporary navigate to search result page
      // aspiron debugger
      console.log('aspiron redirect');
      console.log();
      // aspiron debugger
      return navigate("/search-ticket-result");
   };

   return (
      <div className="container">
         <div className={`${styles.mainContent} grid`}>
            <div className={styles.searchCard}>
               <form method="post" onSubmit={handleSubmit(searchTicketHandler)}>
                  <div className={styles.searchItems}>
                     <div className={`${styles.flightType} flex`}>
                        <span className={`${styles.status} ${styles.active}`}>
                           Semua
                        </span>
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
                           <BsArrowRightShort
                              className={`${styles.icon} ${styles.arrow}`}
                           />
                        </div>
                        <div className={styles.singleQuery}>
                           <div>Tujuan</div>
                           <small>JED - Jeddah</small>
                        </div>
                     </div>

                     <div className={styles.searchDate}>
                        <AiOutlineCalendar className={styles.icon} />
                        <div className={styles.singleQuery}>
                           <div>Tanggal Pergi</div>
                           <small>Kam, 02 Feb 2023 (9 Days)</small>
                        </div>
                     </div>

                     <div className={styles.searchPackage}>
                        <BsFillPersonFill className={styles.icon} />
                        <div className={styles.singleQuery}>
                           <div>Jemaah</div>
                           <small>Paketan (25 pax, 35pax)</small>
                        </div>
                     </div>

                     <div className={styles.searchAirline}>
                        <SiEthiopianairlines className={styles.icon} />
                        <div className={styles.singleQuery}>
                           <div>Maskapai</div>
                           <small>Semua Maskapai</small>
                        </div>
                     </div>

                     <button type="submit" className={`${styles.btn} btn flex`}>Cari</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SearchTiket;
