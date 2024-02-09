import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import styles from "./TicketDetail.module.css";
import React from "react";
import airlineImg from "../../Assets/gi.png";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Input } from "@mui/material";

const Offers = {
   id: 1,
   imgSrc: airlineImg,
   destTitle: "Machu Picchu",
   location: "Peru",
   price: "13.500.000",
};

const targets = [
   {
      value: 0,
      label: "Manual"
   },
   {
      value: 25,
      label: "25 Pax"
   },
   {
      value: 35,
      label: "35 Pax"
   },
   {
      value: 45,
      label: "45 Pax"
   },

]

const SearchTicketResultContainer: React.FC = () => {
   return (
      <section className="container section">
         <div className={`${styles.flightDetails}`}>
            <div className={styles.flightHeader}>
               <div className={styles.flightText}>
                  <h3>CGK - JED</h3>
                  <div>
                     <span>CGK - Jakarta</span>
                     <span>
                        <BsArrowRight />
                     </span>
                     <span>JED - Jeddah</span>
                  </div>
               </div>
               <div className={styles.flightBadge}>
                  <span className={styles.status}>Transit</span>
                  <span className={styles.status}>9 Day</span>
               </div>
            </div>

            <div className={styles.ticketCard}>
               <div className={styles.ticketContent}>
                  <div className={styles.ticketHeader}>
                     <div className={styles.departureInfo}>
                        <FaPlaneDeparture className={styles.icon} />
                        <span>Keberangkatan</span>
                     </div>
                     <div className={`${styles.airlineInfo}`}>
                        <img src={Offers.imgSrc} alt="Image Name" />

                        <div className={styles.flightText}>
                           <h4>Garuda Indonesia</h4>
                           <div>
                              <span>CGK-Jakarta</span>
                              <span>-</span>
                              <span>CGK-Jakarta</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.flightSchedule}>
                     <div className={styles.flightScheduleItem}>
                        <span>CGK</span>
                        <span>07:45</span>
                        <small>Rab, 01/02/2023</small>
                     </div>
                     <div>
                        6h 45m
                        <AiOutlineArrowRight />
                     </div>
                     <div className={styles.flightScheduleItem}>
                        <span>CGK</span>
                        <span>07:45</span>
                        <small>Rab, 01/02/2023</small>
                     </div>
                  </div>
               </div>

               <div className={styles.ticketContent}>
                  <div className={styles.ticketHeader}>
                     <div className={styles.departureInfo}>
                        <FaPlaneDeparture className={styles.icon} />
                        <span>Kepulangan</span>
                     </div>
                     <div className={`${styles.airlineInfo}`}>
                        <img src={Offers.imgSrc} alt="Image Name" />

                        <div className={styles.flightText}>
                           <h4>Garuda Indonesia</h4>
                           <div>
                              <span>CGK-Jakarta</span>
                              <span>-</span>
                              <span>CGK-Jakarta</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.flightSchedule}>
                     <div className={styles.flightScheduleItem}>
                        <span>CGK</span>
                        <span>07:45</span>
                        <small>Rab, 01/02/2023</small>
                     </div>
                     <div>
                        6h 45m
                        <AiOutlineArrowRight />
                     </div>
                     <div className={styles.flightScheduleItem}>
                        <span>CGK</span>
                        <span>07:45</span>
                        <small>Rab, 01/02/2023</small>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.inputSeats}>
               <FormControl>
                  <FormLabel id="assessment-setup-target">
                     Pilih paket jumlah jamaah
                  </FormLabel>
                  <RadioGroup
                     row
                     value="asd"
                     aria-labelledby="assessment-setup-target"
                     onChange={(_, value) => {
                        // trigger("employees");
                        // trigger("departments");
                        // onChange(value as AssessmentTarget);
                     }}
                  >
                     {targets.map((target) => {
                        return (
                           <FormControlLabel
                              key={`target-${target.value}`}
                              value={target.value}
                              control={<Radio />}
                              label={target.label}
                           />
                        );
                     })}
                  </RadioGroup>
                  <Input/>
               </FormControl>
            </div>

            <div>
               <span>Total Pembayaran</span>
               <span>25 Jamaah</span>
            </div>
            <div className={styles.ticketFooter}>
             
               <div className={styles.ticketPrice}>
                  <h4>RP {Offers.price}</h4>
               </div>
            </div>

            <button className={`${styles.btn} btn flex`}>Pesan Sekarang</button>
         </div>
      </section>
   );
};

export default SearchTicketResultContainer;
