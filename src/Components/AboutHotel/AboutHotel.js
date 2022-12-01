import React from "react";
import { useState,useEffect } from "react";
import "./about.css";
import HotelAwards from "./HotelAwards";
import AboutBackground from "./AboutImages/aboutBackground.jpg";
import AboutImg from "./AboutImages/aboutImg.jpg";

import Hotel1 from "./AboutImages/hotel1.jpg";
import Hotel2 from "./AboutImages/hotel2.jpg";
import Hotel3 from "./AboutImages/hotel3.jpg";
import Hotel4 from "./AboutImages/hotel4.jpg";
import Hotel5 from "./AboutImages/hotel5.jpg";
import Hotel6 from "./AboutImages/hotel6.jpg";
import Hotel7 from "./AboutImages/hotel7.jpg";
import Hotel8 from "./AboutImages/hotel8.jpg";
import GoogleMap from "./GoogleMap";

function AboutHotel() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const hotelImages = [
    Hotel1,
    Hotel2,
    Hotel3,
    Hotel4,
    Hotel5,
    Hotel6,
    Hotel7,
    Hotel8,
  ];
  const [hotelAwards, setHotelAwards] = useState(false);
  const [hotelLocation, setHotelLocation] = useState(false);
  return (
    <div className="about">
      {hotelAwards ? (
        <HotelAwards setHotelAwards={setHotelAwards} />
      ) : (
        <>
          {" "}
          <div className="about_image_container">
            <img className="about_image" src={AboutBackground} alt="" />
          </div>
          <p className="about_title">About The Hotel</p>
          <div className="about_content">
            <div className="about_content_1">
              <div className="about_content1_img_container">
                <img className="about_content1_img" src={AboutImg} alt="" />
              </div>
            </div>
            <div className="about_content_2">
              <p>
                Tiflis Palace is a luxurious boutique hotel, located in a very
                heart of Tbilisi, in the legendary place of city’s foundation,
                surrounded by the best picturesque and breathtaking views
                available in Tbilisi. Considering the advantages of such
                location, hotel Tiflis Palace is in an immediate proximity with
                the most popular tourist attractions, and the widest choice of
                restaurants, cafes and galleries. The hotel’s architecture
                reflects the ancient style, traditions and history of the old
                Tiflis and the Meidan square, emphasizing its unique location.
                The interior of Tiflis Palace is a perfect combination of
                discreet luxury, calm colors and modernity with a light touch of
                oriental style characterized for the ancient Tbilisi. Tiflis
                Palace meets the modern requirements of international
                hospitality standard featuring elegantly designed rooms & suites
                equipped with all necessary facilities, comfortable beds with
                non-allergic linen and orthopedic mattress for the best sleep,
                great conference and banqueting facilities, the best culinary
                venue. Attentive professionals with a passion for hospitality
                are always ready to assist our guests in any issue. All these
                promises the hotels guests to have the best experience of
                Tbilisi.
              </p>
            </div>
          </div>
          <div className="about_buttons_container">
          <button
              className="hotel_btn"
              onClick={() => setHotelLocation(!hotelLocation)}
            >
              {hotelLocation?'Hide Hotel Location':'Show Me Hotel Location'}
             
            </button>
            <button className="hotel_btn" onClick={() => setHotelAwards(true)}>
              Hotel Awards
            </button>
          
          </div>
          {hotelLocation?(    <GoogleMap/>):null}
      
          <div className="hotel_images">
            {hotelImages.map((element, index) => {
              return (
                <div key={index} className="hotel_each_img_container">
                  <img className="hotel_each_img" src={element} alt="" />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default AboutHotel;
