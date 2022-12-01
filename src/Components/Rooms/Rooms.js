import React from "react";
import "./rooms.css";
import { useState,useEffect } from "react";
import RoomBackgroundImg from "./RoomsImages/RoomBackgroundImg.jpg";
import RoomImage1 from "./RoomsImages/RoomImage1.jpg";
import RoomImage2 from "./RoomsImages/RoomImage2.jpg";
import RoomImage3 from "./RoomsImages/RoomImage3.jpg";
import RoomImage4 from "./RoomsImages/RoomImage4.jpg";
import RoomImage5 from "./RoomsImages/RoomImage5.jpg";
import RoomImage6 from "./RoomsImages/RoomImage6.jpg";

import RoomComponent1 from "./RoomComponent1";
import RoomComponent2 from "./RoomComponent2";
import RoomComponent3 from "./RoomComponent3";
import RoomComponent4 from "./RoomComponent4";
import RoomComponent5 from "./RoomComponent5";
import RoomComponent6 from "./RoomComponent6";
import {useContext} from 'react'
import {bookingContext} from '../Pages/Pages'
import Booking from '../Booking/Booking'
function Rooms() {
  const [guessComponent, setGuessComponent] = useState(null);
  const [RoomModal, setRoomModal] = useState(false);
  const {bookNow,setBookNow} =useContext(bookingContext);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const galleryData = [
    {
      id: 1,
      title: "Standard",
      image: RoomImage1,
      content:
        "Standard category rooms are approximately– 22 m2 rooms, with back side view.",
    },
    {
      id: 2,
      title: "Deluxe Room",
      image: RoomImage2,
      content:
        "Deluxe category rooms are approximately– 22 m2 rooms featuring balconies and beautiful River side and Metekhi Church views.",
    },
    {
      id: 3,
      title: "Superior",
      image: RoomImage3,
      content:
        "Superior category rooms are approximately 32 m2, featuring balconies and beautiful River side, Narikala Fortress and Metekhi Church views.",
    },
    {
      id: 4,
      title: "Premium Superior",
      image: RoomImage4,
      content:
        "Superior Suite is approximate 40 m2, consisting of - Spacious Bedroom with king size bed, Separate Guest Room with convertible sofa and Luxurious Bathroom.",
    },
    {
      id: 5,
      title: "Premium Suite",
      image: RoomImage5,
      content:
        "Premium  Suites are approximately 60 m2, consisting of - Spacious Bedroom with king size bed, Separate Guest/Dining Room with convertible sofa  and dining table and two Luxurious Bathrooms.",
    },

    {
      id: 6,
      title: "Executive Suite",
      image: RoomImage6,
      content:
        "Executive Suites are 80 m2, consisting of spacious bedroom, separate guest/dining room, kitchenette and two luxurious bathrooms.",
    },
  ];
  return (
     <>{bookNow?(<Booking/>):(    <div className="room">
     <div className="room_background_img_container">
       <img className="room_background_img" src={RoomBackgroundImg} alt="" />
     </div>

     {guessComponent == 1 ? (
       <RoomComponent1
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : guessComponent == 2 ? (
       <RoomComponent2
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : guessComponent == 3 ? (
       <RoomComponent3
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : guessComponent == 4 ? (
       <RoomComponent4
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : guessComponent == 5 ? (
       <RoomComponent5
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : guessComponent == 6 ? (
       <RoomComponent6
       setBookNow={setBookNow}
         RoomModal={RoomModal}
         setRoomModal={setRoomModal}
         setGuessComponent={setGuessComponent}
       />
     ) : (
       <>
         {" "}
         <p className="room_title">Gallery Page</p>
         <p className="room_text_description">Hotel Tiflis Palace Offers 6 Categories of Elegantly Designed, Comfortable Rooms.</p>
         <p className="room_text">
           Tiflis Palace offers 43 elegantly designed spacious rooms with the
           breathtaking views on the Riverside, Sulphure Baths, Metekhi Church
           & Bridge, Narikala Fortress and the Meidan Square. All rooms are
           equipped with: Comfortable beds with non-allergic linen and
           orthopedic mattress for the best sleep, working table and wardrobe,
           flat screen TV with vast choice of channels, in room safe-box, mini
           Bar, fully equipped bathroom, climate control system and free
           wireless internet. For our special guests willing to enjoy
           additional and exceptional benefits of the Hotel, we offer our Suite
           rooms. Designed to combine harmony and luxury comfort, full of space
           and light, equipped with elegant furniture, featuring cozy balconies
           and terrace to enjoy the most beautiful views in Tbilisi, luxurious
           bathrooms, spacious bedroom with full comfort for a healthy sleep
           and living room to spend a pleasant time with family and friends,
           all these to ensure luxury comfort and best rest for our dear
           Guests.
         </p>
         <div className="room_images">
           {galleryData.map((element) => {
             return (
               <div key={element.id} className="each_room_image_container">
                 <img className="each_room_image" src={element.image} alt="" />
                 <div className="room_full_overlay">
                   <div className="room_image_overlay">
                     <p className="room_overlay_title">{element.title}</p>
                     <div className="room_overlay_line"></div>
                     <div className="room_overlay_content">
                       {element.content}
                     </div>
                     <div
                       onClick={() => setGuessComponent(element.id)}
                       className="room_overlay_btn"
                     >
                       Read More
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </>
     )}
   </div>)}</>
  
  );
}

export default Rooms;
