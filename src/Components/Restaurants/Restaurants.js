import React, { useState,useEffect } from "react";
import "./restaurant.css";
import RestaurantBackground from "./RestaurantImages/RestaurantBackground.jpg";
import Breakfast from "./RestaurantImages/Breakfast.jpg";
import Restaurant from "./RestaurantImages/Restaurant.jpg";

import TiflisiVeranda1 from "./TiflisiVeranda1";
import TiflisiVeranda2 from "./TiflisiVeranda2";
function Restaurants() {

   const [tiflisiVeranda,setTiflisiVeranda]=useState('');
   useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="restaurant">
      {(tiflisiVeranda==='tiflisiVeranda1')?(<TiflisiVeranda1 setTiflisiVeranda={setTiflisiVeranda}/>):(tiflisiVeranda==='tiflisiVeranda2')?(<TiflisiVeranda2 setTiflisiVeranda={setTiflisiVeranda}/>):(<> <div className="restaurant_header_img_container">
        <img
          className="restaurant_header_img"
          src={RestaurantBackground}
          alt=""
        />
      </div>
      <p className="restaurant_title">Restaurants & Bars</p>
      <p className="restaurant_text">
        Hotel has great dining facilities featuring{" "}
        <span>Breakfast Restaurant</span> for Hotel Guests and Restaurant{" "}
        <span>Tiflis Veranda</span> for everyone willing to enjoy exquisite
        dishes of local and international cuisine, mesmerizing views and
        beautiful live music.
      </p>
      <div className="restaurant_breakfast_container">
        <div className="restaurant_container">
          <img className="restaurant_img" src={Restaurant} alt="" />
          <div className="black_overlay">
            <div className="white_overlay">
              <p className="title">Tiflis Veranda</p>
              <div className="line"></div>
              <p className="text">Touching Spirit Of Tbilisi</p>
              <div onClick={()=>setTiflisiVeranda('tiflisiVeranda1')} className="btn">Read More</div>
            </div>
          </div>
        </div>
        <div className="breakfast_container">
          <img className="breakfast_img" src={Breakfast} alt="" />
          <div className="black_overlay">
            <div className="white_overlay">
              <p className="title">Tiflis Veranda</p>
              <div className="line"></div>
              <p className="text">Touching Spirit Of Tbilisi</p>
              <div onClick={()=>setTiflisiVeranda('tiflisiVeranda2')} className="btn">Read More</div>
            </div>
          </div>
        </div>
      </div></>)}
      {/* <div className="restaurant_header_img_container">
        <img
          className="restaurant_header_img"
          src={RestaurantBackground}
          alt=""
        />
      </div>
      <p className="restaurant_title">Restaurants & Bars</p>
      <p className="restaurant_text">
        Hotel has great dining facilities featuring{" "}
        <span>Breakfast Restaurant</span> for Hotel Guests and Restaurant{" "}
        <span>Tiflis Veranda</span> for everyone willing to enjoy exquisite
        dishes of local and international cuisine, mesmerizing views and
        beautiful live music.
      </p>
      <div className="restaurant_breakfast_container">
        <div className="restaurant_container">
          <img className="restaurant_img" src={Restaurant} alt="" />
          <div className="black_overlay">
            <div className="white_overlay">
              <p className="title">Tiflis Veranda</p>
              <div className="line"></div>
              <p className="text">Touching Spirit Of Tbilisi</p>
              <div onClick={()=>setTiflisiVeranda('tiflisiVeranda1')} className="btn">Read More</div>
            </div>
          </div>
        </div>
        <div className="breakfast_container">
          <img className="breakfast_img" src={Breakfast} alt="" />
          <div className="black_overlay">
            <div className="white_overlay">
              <p className="title">Tiflis Veranda</p>
              <div className="line"></div>
              <p className="text">Touching Spirit Of Tbilisi</p>
              <div onClick={()=>setTiflisiVeranda('tiflisiVeranda2')} className="btn">Read More</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Restaurants;
