import React from "react";
import "./offer.css";
import img from "../../Assets/img1.jpg";

import { BsArrowRightShort } from "react-icons/bs";
import { MdKingBed, MdLocationOn } from "react-icons/md";
import { isTemplateExpression } from "typescript";
import { AiFillDollarCircle } from "react-icons/ai";

const Offers = [
   {
      id: 1,
      imgSrc: img,
      destTitle: "Machu Picchu",
      location: "Peru",
      price: "13.500.000",
   },
   {
      id: 2,
      imgSrc: img,
      destTitle: "Guanajuato",
      location: "Mexico",
      price: "1.4000.000",
   },
];

const Offer = () => {
   return (
      <section className="offer container section">
         <div className="secContainer">
            <div className="secIntro">
               <h2 className="secTitle">Special Offers</h2>
               <p>
                  From historical cities to natural specteculars, come see the
                  best of the world!
               </p>
            </div>

            <div className="mainContent grid">
               {Offers.map((offer) => {
                  return (
                     <div className="singleOffer">
                        <div className="destImage">
                           <img src={offer.imgSrc} alt="Image Name" />

                           <span className="discount">30% Off</span>
                        </div>

                        <div className="offerBody">
                           <div className="price flex">
                              <div>
                                 <h5>Penerbangan</h5>
                                 <h4>01 Feb - 11 Feb 2023</h4>
                              </div>
                              <span className="status">Transit</span>
                              <span className="status">9 Day</span>
                           </div>

                           <div className="amenities">
                              <div className="singleAmenity flex">
                                 <MdKingBed className="icon" />
                                 <small>200 pax</small>
                              </div>
                              {/* <div className="singleAmenity flex">
                                 <MdKingBed className="icon" />
                                 <small>1 Bath</small>
                              </div>
                              <div className="singleAmenity flex">
                                 <MdKingBed className="icon" />
                                 <small>Wifi</small>
                              </div>
                              <div className="singleAmenity flex">
                                 <MdKingBed className="icon" />
                                 <small>Shuttle </small>
                              </div> */}
                           </div>

                           <div className="location flex">
                              <AiFillDollarCircle className="icon" />
                              {/* <small>Address</small> */}
                              <h4>{offer.price}</h4>

                           </div>

                           <button className="btn flex">
                              View Details
                              <BsArrowRightShort className="icon" />
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Offer;
