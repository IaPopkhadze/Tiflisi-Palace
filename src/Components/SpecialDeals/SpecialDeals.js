import React from "react";
import Background from "./SpecialDealImages/Background.jpg";
import "./specialDeal.css";
import Deal1 from "./SpecialDealImages/Deal1.jpg";
import Deal2 from "./SpecialDealImages/Deal2.jpg";
import Deal3 from "./SpecialDealImages/Deal3.jpg";
import Deal4 from "./SpecialDealImages/Deal4.jpg";
import Deal5 from "./SpecialDealImages/Deal5.jpg";

import { useState,useEffect } from "react";
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'
function SpecialDeals() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const data = [
    {
      id: 1,
      image: Deal1,
      title: "New Year Gala Dinner Package",
      text: "Be special on this One & Only night Its time to forget the past and celebrate the beginning of a new life at Tiflis Veranda.",
    },
    {
      id: 2,
      image: Deal2,
      title: "Direct Booking Discount",
      text: "Spend spring days at  Tiflis Palace Hotel Book room from our website and receive a -10% discount For Booking click here.",
    },
    {
      id: 3,
      image: Deal3,
      title: "Coffee Break",
      text: "Its time for a delicious coffee break!",
    },
    {
      id: 4,
      image: Deal4,
      title: "Weekend Package",
      text: "We have a weekend offer for you! Book a room during the weekend and receive 10% at Tiflis palace and 10% discount at Tiflis Veranda.!",
    },
    {
      id: 5,
      image: Deal5,
      title: "Come Again",
      text: "We have an amazing offer for you! Book a room for 2 times and receive 25% on third night, any time during the year",
    },
  ];
  const [chooseComponent, setChooseComponent] = useState(null);
  return (
    <div className="specialDeal">
      <div className="background_container">
        <img className="background_img" src={Background} alt="" />
      </div>

      {(chooseComponent==1)?(<Component1/>):(chooseComponent==2)?(<Component2/>):(chooseComponent==3)?(<Component3/>):(chooseComponent==4)?(<Component4/>):(chooseComponent==5)?(<Component5/>):(<>      <p className="title">Deals & Promotions</p>
      <div className="specialDealContainer">
        {data.map((element, index) => {
          return (
            <div className="each_container" key={index}>
              <img className="image" src={element.image} alt="" />
              <div className="black_overlay">
                <div className="white_overlay">
                  <p className="white_overlay_title">{element.title}</p>
                  <div className="line"></div>
                  <p className="white_overlay_text">{element.text}</p>
                  <button
                    onClick={() => setChooseComponent(element.id)}
                    className="read_more_btn"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div></>)}

    </div>
  );
}

export default SpecialDeals;
