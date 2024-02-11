import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiOutlineTicket, HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { GrDocumentTime } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";

import NavigationCSS from "./Navigation.module.css"; // Import CSS module

const Navigation = () => {
   const [active, setActive] = useState("navigation");
   const showNav = () => {
      setActive("navigation activeNavigation");
   };

   const removeNav = () => {
      setActive("navigation");
   };

   const [transparent, setTransparent] = useState("header");
   const addBg = () => {
      if (window.scrollY >= 10) {
         setTransparent("header activeHeader");
      } else {
         setTransparent("header");
      }
   };

   window.addEventListener("scroll", addBg);

   return (
      <>
         <Outlet />
         <div className={`${NavigationCSS.navigation}`}>
            <NavLink to="/" className={`${NavigationCSS.navItem}`}>
               <HiOutlineHome className={`${NavigationCSS.navItemIcon}`} />
               <span className={`${NavigationCSS.t143}`}>Beranda</span>
            </NavLink>
            <NavLink to="search-ticket" className={`${NavigationCSS.navItem}`}>
               <HiOutlineTicket className={`${NavigationCSS.navItemIcon}`} />
               <span className={`${NavigationCSS.t133}`}>Tiket</span>
            </NavLink>
            <NavLink to="#" className={`${NavigationCSS.navItem}`}>
               <GrDocumentTime className={`${NavigationCSS.navItemIcon}`} />
               <span className={`${NavigationCSS.t136}`}>Riwayat</span>
            </NavLink>
            <NavLink to="#" className={`${NavigationCSS.navItem}`}>
               <HiOutlineUser className={`${NavigationCSS.navItemIcon}`} />

               <span className={`${NavigationCSS.t139}`}>Akun</span>
            </NavLink>
         </div>
      </>
   );
};

export default Navigation;
