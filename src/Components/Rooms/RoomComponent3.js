import React from "react";
import "./rooms.css";
import {useState,useEffect} from 'react'
import RoomStandardImg1 from "./RoomsImages/RoomStandardImg1.jpg";
import RoomStandardImg2 from "./RoomsImages/RoomStandardImg2.jpg";
import RoomStandardImg3 from "./RoomsImages/RoomStandardImg3.jpg";
import RoomDeluxeImg1 from "./RoomsImages/RoomDeluxeImg1.jpg";
import RoomDeluxeImg2 from "./RoomsImages/RoomDeluxeImg2.jpg";
import RoomDeluxeImg3 from "./RoomsImages/RoomDeluxeImg3.jpg";
import RoomDeluxeImg4 from "./RoomsImages/RoomDeluxeImg4.jpg";
import RoomDeluxeImg5 from "./RoomsImages/RoomDeluxeImg5.jpg";


function RoomComponent3({setGuessComponent,setBookNow}) {
  const roomImages = [RoomStandardImg1, RoomStandardImg2, RoomStandardImg3,RoomDeluxeImg1, RoomDeluxeImg2, RoomDeluxeImg3,RoomDeluxeImg4,RoomDeluxeImg5];
   const [roomCurrentIndex, setRoomCurrentIndex]=useState(0)
   useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="roomComponent">
      
      <p className="room_component_title">Superior</p>
      <div className="room__content_container">
        <div className="room__content_container_1">
          <div className="big_image_container">
            <img className="big_image" src={roomImages[roomCurrentIndex]} alt="" />
          </div>
          <div className="bunch_of_img_container">
            {roomImages.map((element, index) => {
              return (
                <div onClick={()=>setRoomCurrentIndex(index)} key={index} className="each_img_container">
                  <img className="each_img" src={element} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="room__content_container_2">
          <p className="title">Stay At Our Hotel</p>
          <button className="btn" onClick={()=>setBookNow(true)}>Book Now</button>
          <p className="txt">
            Standard category rooms are approximately– 22 m2 rooms, with back
            side view. <br /> Twin bedded and King Size bedded rooms are available in
            these category. <br /> <br /> Rooms are equipped with all necessary amenities –
            working table and wardrobe, flat screen TV with wide choice of
            international TV channels, wireless internet, mini bar, coffee and
            tea making facilities, safe box, anti-allergic linen, orthopedic
            matrass, extra blankets, vanity kit, and fully equipped bathroom
            with Shower Cabin. <br /> <br /> *Every room has individual climate control
            system. <br /> <br /> *All our Guests are given the possibility to choose a pillow
            for their comfortable sleep.
          </p>
        </div>
      </div>
      <div className="room_btn_container">
            <button
              onClick={() => setGuessComponent(null)}
              className="go_back_btn"
            >
              {" "}
              {"<< Go Back"}
            </button>
          </div>
    </div>
  );
}

export default RoomComponent3;
