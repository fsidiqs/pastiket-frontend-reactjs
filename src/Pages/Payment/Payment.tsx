import React, { useState } from "react";
import ButtonOptionsArrow from "../../Components/Common/Buttons/ButtonOptionsArrow";
import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import styles from "./Payment.module.css";
import Modal from "../../Components/Common/Modal/Modal";

const PaymentPage: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
      "pilih metode pembayaran"
   );

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };

   const handlePaymentMethodChange = (method: string) => {
      setSelectedPaymentMethod(method);
      toggleModal();
   };

   return (
      <>
         <NavigationTop
            MenuName="Detail Pemesanan"
            // MenuDescription=
         />
         <div className={`${styles.componentWrapper}`}>
            <div className={`${styles.flightInfo1}`}>
               <div className={`${styles.airlinerouterow}`}>
                  <span className={`${styles.heading1Text}`}>CGK - JED</span>
                  <span>CGK - Jakarta -&gt; JED - Jeddah</span>
               </div>
               <div className={`${styles.flightTypeWrapper}`}>
                  <div className={`${styles.badgeprimary}`}>
                     <span>Direct</span>
                  </div>
                  <div className={`${styles.badgedanger}`}>
                     <span>9 DAY</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={`${styles["flight-detail-content"]}`}>
            <div className={`${styles["booking-details"]}`}>
               <span className={`${styles.airlineName}`}>Detail Pemesanan</span>
               <div className={`${styles["item-2-flex"]}`}>
                  <span>25 pax</span>
                  <span>Rp 35.000.000</span>
               </div>
               <div className={`${styles.divider}`}></div>
               <div className={`${styles["item-2-flex"]}`}>
                  <p className={`${styles.flightPrice}`}>Total</p>
                  <p className={`${styles.flightPrice}`}>Rp. 50.000.000</p>
               </div>
            </div>
         </div>
         <div className={`${styles["flight-detail-content"]}`}>
            <div className={`${styles["booking-details"]}`}>
               <span className={`${styles.airlineName}`}>Jenis Pembayaran</span>
               <div>
                  <div className={`${styles.flightTypeWrapper}`}>
                     <div className={`${styles.badgeprimary}`}>
                        <span>DP</span>
                     </div>
                     <div className={`btn-plain`}>
                        <span>Lunas</span>
                     </div>
                  </div>
               </div>
               <div className={`${styles["item-2-flex"]}`}>
                  <span className={`${styles["amount-big"]}`}>
                     Rp 2.000.000/pax
                  </span>
               </div>
               <div className={`${styles.divider}`}></div>
               <div className={`${styles["payment-method-input-group"]}`}>
                  <span className={`${styles.airlineName}`}>
                     Metode Pembayaran
                  </span>
                  <ButtonOptionsArrow
                     onButtonClick={toggleModal}
                     placeholder={selectedPaymentMethod}
                     className={`${styles["payment-method-button"]}`}
                  />
                  <Modal
                     isOpen={isModalOpen}
                     onClose={toggleModal}
                     onOptionClick={handlePaymentMethodChange}
                  />
               </div>
               <div className={`${styles["booking-details"]}`}>
                  <span className={`${styles.airlineName}`}>Pembayaran DP</span>
                  <div className={`${styles["item-2-flex"]}`}>
                     <span>DP (25 pax)</span>
                     <span>Rp 50.000.000</span>
                  </div>
                  <div className={`${styles.divider}`}></div>
                  <div className={`${styles["item-2-flex"]}`}>
                     <span>Sisa Pembayaran</span>
                     <span>Rp 300.000.000</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={`${styles.contentwrapper}`}>
            <div className={`${styles["submit-1"]}`}>
               <span>Pesan Sekarang</span>
            </div>
         </div>
      </>
   );
};

export default PaymentPage;
