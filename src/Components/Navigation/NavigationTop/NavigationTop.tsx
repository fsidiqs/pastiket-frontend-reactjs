import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import styles from "./NavigationTop.module.css";

import { NavigationItemProps } from "../../../modules/types/navigation.types";
const Navigation: React.FC<NavigationItemProps> = (props) => {
   return (
      <section className={`${styles.navigationSection} container`}>
         <div className={`${styles.navsDiv} flex`}>
            <BsChevronLeft className={`${styles.icon} ${styles.leftIcon}`} />
            <div>
               <h1 className={styles.menuName}>{props.MenuName}</h1>
               {props.MenuDescription ? (
                  <span className={styles.menuDescription}>
                     {props.MenuDescription}
                  </span>
               ) : (
                  ""
               )}
            </div>
         </div>
      </section>
   );
};

export default Navigation;
