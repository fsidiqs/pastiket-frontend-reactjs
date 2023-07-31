import React from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img from "../../Assets/img1.jpg";

const Data = [
   {
      id: 1,
      imgSrc: img,
      destTitle: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
   },
   {
      id: 2,
      imgSrc: img,
      destTitle: "Guanajuato",
      location: "Mexico",
      grade: "CULTURAL RELAX",
   },
   {
      id: 3,
      imgSrc: img,
      destTitle: "Angkor Wat",
      location: "Cambodia",
      grade: "CULTURAL RELAX",
   },
   {
      id: 4,
      imgSrc: img,
      destTitle: "Taj Mahal",
      location: "India",
      grade: "CULTURAL RELAX",
   },
];

const Popular = () => {
   return (
      <section className="popular section container">
         <div className="secContainer">
            <div className="secHeader flex">
               <div className="textDiv">
                  <h2 className="secTitle">Popular Destination</h2>
                  <p>Lorem ipsum dolor </p>
               </div>

               <div className="iconsDiv flex">
                  <BsArrowLeftShort className="icon leftIcon" />
                  <BsArrowRightShort className="icon" />
               </div>
            </div>

            <div className="mainContent grid">
               {Data.map((item) => {
                  return (
                     <div className="singleDestination">
                        <div className="destImage">
                           <img src={item.imgSrc} alt="Image title" />

                           <div className="overlayInfo">
                              <h3>{item.destTitle}</h3>
                              <p>{item.location}</p>

                              <BsArrowRightShort className="icon" />
                           </div>
                        </div>

                        <div className="destFooter">
                           <div className="number">{item.id}</div>

                           <div className="destText flex">
                              <h6>{item.location}</h6>
                              <span className="flex">
                                 <span className="dot">
                                    <BsDot className="icon" />
                                 </span>
                              </span>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Popular;
