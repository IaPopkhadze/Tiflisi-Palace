import React from "react";
import "./restaurant.css";
import { useState,useEffect } from "react";
import VerandaModal from "./VerandaModal";
import TiflisiVerandaImg1 from "./TiflisiVeranda1Images/TiflisiVerandaImg1.jpg";
import TiflisiVerandaImg2 from "./TiflisiVeranda1Images/TiflisiVerandaImg2.jpg";
import TiflisiVerandaImg3 from "./TiflisiVeranda1Images/TiflisiVerandaImg3.jpg";
import TiflisiVerandaImg4 from "./TiflisiVeranda1Images/TiflisiVerandaImg4.jpg";
import TiflisiVerandaImg5 from "./TiflisiVeranda1Images/TiflisiVerandaImg5.jpg";
import TiflisiVerandaImg6 from "./TiflisiVeranda1Images/TiflisiVerandaImg6.jpg";
import TiflisiVerandaImg7 from "./TiflisiVeranda1Images/TiflisiVerandaImg7.jpg";
import TiflisiVerandaImg8 from "./TiflisiVeranda1Images/TiflisiVerandaImg8.jpg";
import TiflisiVerandaImg9 from "./TiflisiVeranda1Images/TiflisiVerandaImg9.jpg";
import TiflisiVerandaImg10 from "./TiflisiVeranda1Images/TiflisiVerandaImg10.jpg";
import TiflisiVerandaImg11 from "./TiflisiVeranda1Images/TiflisiVerandaImg11.jpg";
import TiflisiVerandaImg12 from "./TiflisiVeranda1Images/TiflisiVerandaImg12.jpg";
function TiflisiVeranda1({setTiflisiVeranda}) {
 const [verandaModal,setVerandaModal]=useState(false);
 const [currentIndex,setCurrentIndex]=useState(null)
  const imageList = [
    TiflisiVerandaImg1,
    TiflisiVerandaImg2,
    TiflisiVerandaImg3,
    TiflisiVerandaImg4,
    TiflisiVerandaImg5,
    TiflisiVerandaImg6,
    TiflisiVerandaImg7,
    TiflisiVerandaImg8,
    TiflisiVerandaImg9,
    TiflisiVerandaImg10,
    TiflisiVerandaImg11,
    TiflisiVerandaImg12,
  ];
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="tiflisiVeranda1">
      {verandaModal ? (
        <VerandaModal setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} setVerandaModal={setVerandaModal} imageList={imageList}/>
      ) : (
        <>
          {" "}
          <p className="title">Tiflis Veranda</p>
          <div className="image_content_container">
            <div className="image_container">
              <img className="image" src={TiflisiVerandaImg1} alt="" />
            </div>
            <div className="content_container">
              <p className="content_title">
                Tiflis Veranda is ready to serve its guests every day, from
                10:00 am to 02:00 am
              </p>
              <p className="content_text">
                Restaurant{" "}
                <span style={{ fontWeight: "bold" }}>Tiflis Veranda</span> is a
                combination of classic restaurant and lounge style summer
                terraces. <br /> <br /> <br />
                Tiflis Veranda offers exquisite dishes of local and
                international cuisine, exclusive deserts and brand cocktails,
                high quality of service, with background of great music. <br />{" "}
                <br /> Only here, being surrounded by the breathtaking views of
                the city’s most important historical and cultural monuments, one
                can feel the real spirit of Tbilisi. <br /> <br />
                <a
                  className="menu_link"
                  target="_blank"
                  href="https://tiflispalace.ge/modules/file_manager/uploads/tiflis_veranda_menu_eng_01.pdf"
                >
                  See Our Menu
                </a>
                <br />
                <br />{" "}
                <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  For more information and table reservation please contact us:
                  +995 32 2 000 245; +995 577 09 72 71; fb@tiflispalace.ge;
                  tiflisveranda@tiflispalace.ge
                </span>
              </p>
            </div>
          </div>
          <div className="boxes_container">
            {imageList.map((element, index) => {
              return (
                <div onClick={()=>{setVerandaModal(true);setCurrentIndex(index)}} key={index} className="each_box_container">
                  <img className="each_img" src={element} alt="" />
                </div>
              );
            })}
          </div>
          <div className="button_container">
      <button className="goBack" onClick={()=>setTiflisiVeranda(false)}>{`<< Go Back`}</button>
      </div>
        </>
      )}
    </div>
  );
}

export default TiflisiVeranda1;
