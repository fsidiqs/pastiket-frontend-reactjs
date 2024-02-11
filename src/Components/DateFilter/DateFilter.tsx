import styles from "./DateFilter.module.css";
import { FaSortAmountDown, FaFilter } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const DateFilter: React.FC = () => {
   return (
      <>
         <div className="bodyContentFlexRow">
            <div className={`${styles.dateFilter}`}>
               <div className={`${styles.dateFilterItem}`}>
                  <span className={`${styles.heading1Text}`}>Sel</span>
                  <span className={`${styles.textgrey}`}>01 Feb</span>
               </div>
               <div className={`${styles.dateFilterItem}`}>
                  <span className={`${styles.heading1Text}`}>Rab</span>
                  <span className={`${styles.textgrey}`}>01 Mar</span>
               </div>
               <div className={`${styles.dateFilterItem}`}>
                  <span className={`${styles.heading1Text}`}>Kam</span>
                  <span className={`${styles.textgrey}`}>01 Apr</span>
               </div>
               <div className={`${styles.dateFilterItemActive}`}>
                  <span className={`${styles.heading1Text}`}>Jum</span>
                  <span className={`${styles.text} small`}>01 Mei</span>
               </div>
               <div className={`${styles.dateFilterItem}`}>
                  <span>Sab</span>
                  <span className={`${styles.textgrey}`}>01 Feb</span>
               </div>
               <div className={`${styles.dateFilterItem}`}>
                  <span>Min</span>
                  <span className={`${styles.textgrey}`}>01 Feb</span>
               </div>
            </div>

            <div className={`${styles.filterButtons} ${styles.contentWrapper}`}>
               <div className={`${styles.filterItem}`}>
                  <FaFilter />
                  <span>Filter</span>
               </div>
               <div className={`${styles.filterItem}`}>
                  <FaSortAmountDown />
                  <span className="">Harga Terendah</span>
               </div>
            </div>

            <div className={`${styles.contentWrapper}`}>
               <div className={`${styles.greyBg} ${styles.activeFilters}`}>
                  <div className={`${styles.activeFilterItem}`}>
                     <span>Transit: Direct</span>
                     <div className={`${styles.closeButtonCircle}`}>
                        <span>X</span>
                     </div>
                  </div>
                  <div className={`${styles.activeFilterItem}`}>
                     <span>Transit: Direct</span>
                     <div className={`${styles.closeButtonCircle}`}>
                        <span>X</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DateFilter;
