import React from "react";
import "./restaurant.css";

import { useState,useEffect } from "react";
import VerandaModal from "./VerandaModal";
import TiflisiVerandaImg1 from "./TiflisiVeranda2Images/TiflisiVerandaImg1.jpg";
import TiflisiVerandaImg2 from "./TiflisiVeranda2Images/TiflisiVerandaImg2.jpg";
import TiflisiVerandaImg3 from "./TiflisiVeranda2Images/TiflisiVerandaImg3.jpg";
import TiflisiVerandaImg4 from "./TiflisiVeranda2Images/TiflisiVerandaImg4.jpg";
import TiflisiVerandaImg5 from "./TiflisiVeranda2Images/TiflisiVerandaImg5.jpg";
import TiflisiVerandaImg6 from "./TiflisiVeranda2Images/TiflisiVerandaImg6.jpg";
function TiflisiVeranda2({setTiflisiVeranda}) {
  const [verandaModal, setVerandaModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const imageList = [
    TiflisiVerandaImg1,
    TiflisiVerandaImg2,
    TiflisiVerandaImg3,
    TiflisiVerandaImg4,
    TiflisiVerandaImg5,
    TiflisiVerandaImg6,
  ];
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="tiflisiVeranda2">
      {verandaModal?(<VerandaModal setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} setVerandaModal={setVerandaModal} imageList={imageList}/>):(<><p className="title">Breakfast Restaurant</p>
      <p className="description">
        Fresh Buffet Breakfast for our hotel guests, is served every morning
        from 07:00 am to 10:30 am.
      </p>
      <p className="text">
        A healthy breakfast in a cozy atmosphere, offering a wide choice of
        delicious food and great selection of pastries, made in the Hotel’s own
        patisserie, variety of meat and cheese platters, fresh salads, selection
        of coffee, tea and fresh juice and many other dishes from Georgian and
        European cuisine, ensures the perfect start of your successful day.
      </p>
      <div className="images_container">
        {imageList.map((element, index) => {
          return (
            <div onClick={()=>{setVerandaModal(true);setCurrentIndex(index)}} key={index} className="each_image_container">
              <img className="each_image" src={element} alt="" />
            </div>
          );
        })}
      </div></>)}
      <div className="button_container">
      <button className="goBack" onClick={()=>setTiflisiVeranda(false)}>{`<< Go Back`}</button>
      </div>
    </div>
  );
}

export default TiflisiVeranda2;
