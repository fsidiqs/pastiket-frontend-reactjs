import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import styles from "./NavbarTop.module.css";

import { NavbarItemProps } from "../../../modules/types/navbar.types";
const Navbar: React.FC<NavbarItemProps> = (props) => {
   return (
      <section className={`${styles.navbarSection} container`}>
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

export default Navbar;
