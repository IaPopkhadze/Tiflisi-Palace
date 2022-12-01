import React from "react";
import "./facilities.css";
import { useEffect } from "react";
import Background from "./FacilitiesImages/Background.jpg";
import GeneralFacilities1 from "./FacilitiesImages/GeneralFacilities1.svg";
import GeneralFacilities2 from "./FacilitiesImages/GeneralFacilities2.svg";
import GeneralFacilities3 from "./FacilitiesImages/GeneralFacilities3.svg";
import GeneralFacilities4 from "./FacilitiesImages/GeneralFacilities4.svg";
import GeneralFacilities5 from "./FacilitiesImages/GeneralFacilities5.svg";
import GeneralFacilities6 from "./FacilitiesImages/GeneralFacilities6.svg";
import GeneralFacilities7 from "./FacilitiesImages/GeneralFacilities7.svg";
import GeneralFacilities8 from "./FacilitiesImages/GeneralFacilities8.svg";
import GeneralFacilities9 from "./FacilitiesImages/GeneralFacilities9.svg";
import GeneralFacilities10 from "./FacilitiesImages/GeneralFacilities10.svg";
import GeneralFacilities11 from "./FacilitiesImages/GeneralFacilities11.svg";
import GeneralFacilities12 from "./FacilitiesImages/GeneralFacilities12.svg";
import GeneralFacilities13 from "./FacilitiesImages/GeneralFacilities13.svg";

import RoomFacilities1 from "./FacilitiesImages/RoomFacilities1.svg";
import RoomFacilities2 from "./FacilitiesImages/RoomFacilities2.svg";
import RoomFacilities3 from "./FacilitiesImages/RoomFacilities3.svg";
import RoomFacilities4 from "./FacilitiesImages/RoomFacilities4.svg";
import RoomFacilities5 from "./FacilitiesImages/RoomFacilities5.svg";
import RoomFacilities6 from "./FacilitiesImages/RoomFacilities6.svg";
import RoomFacilities7 from "./FacilitiesImages/RoomFacilities7.svg";
import RoomFacilities8 from "./FacilitiesImages/RoomFacilities8.svg";
import RoomFacilities9 from "./FacilitiesImages/RoomFacilities9.svg";
import RoomFacilities10 from "./FacilitiesImages/RoomFacilities10.svg";
import RoomFacilities11 from "./FacilitiesImages/RoomFacilities11.svg";
import RoomFacilities12 from "./FacilitiesImages/RoomFacilities12.svg";
import RoomFacilities13 from "./FacilitiesImages/RoomFacilities13.svg";

import Dining1 from "./FacilitiesImages/DiningServices1.svg";
import Dining2 from "./FacilitiesImages/DiningServices2.svg";
import Dining3 from "./FacilitiesImages/DiningServices3.svg";

import Extra1 from "./FacilitiesImages/Extra1.svg";
import Extra2 from "./FacilitiesImages/Extra2.svg";
import Extra3 from "./FacilitiesImages/Extra3.svg";
import Extra4 from "./FacilitiesImages/Extra4.svg";
import Extra5 from "./FacilitiesImages/Extra5.svg";
import Extra6 from "./FacilitiesImages/Extra6.svg";
import Extra7 from "./FacilitiesImages/Extra7.svg";
import Extra8 from "./FacilitiesImages/Extra8.svg";
import Extra9 from "./FacilitiesImages/Extra9.svg";

function Facilities() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const generalFacilities = [
    {
      image: GeneralFacilities1,
      description: "24h front desk service",
    },
    {
      image: GeneralFacilities2,
      description: "Non-smoking Rooms",
    },
    {
      image: GeneralFacilities3,
      description: "Bellboy",
    },
    {
      image: GeneralFacilities4,
      description: "Parking Area",
    },
    {
      image: GeneralFacilities5,
      description: "Elevator",
    },
    {
      image: GeneralFacilities6,
      description: "Heating",
    },
    {
      image: GeneralFacilities7,
      description: "Air Conditioning",
    },
    {
      image: GeneralFacilities8,
      description: "Luggage Storage",
    },
    {
      image: GeneralFacilities9,
      description: "Wi-Fi Internet Access",
    },
    {
      image: GeneralFacilities10,
      description: "SAfety Deposit Box",
    },
    {
      image: GeneralFacilities11,
      description: "Newspapers",
    },
    {
      image: GeneralFacilities12,
      description: "City Guides",
    },
    {
      image: GeneralFacilities13,
      description: "City Maps",
    },
  ];
  const RoomFacilities = [
    {
      image: RoomFacilities1,
      description: "Heating",
    },
    {
      image: RoomFacilities2,
      description: "Air Conditioning",
    },
    {
      image: RoomFacilities3,
      description: "Individual Climate Control",
    },
    {
      image: RoomFacilities4,
      description: "Wi-Fi internet Access",
    },
    {
      image: RoomFacilities5,
      description: "Flat Screen TV With International Channels",
    },
    {
      image: RoomFacilities6,
      description: "In Room Safe Box",
    },
    {
      image: RoomFacilities7,
      description: "Tea and Coffee making facilities",
    },
    {
      image: RoomFacilities8,
      description: "Breakfast In The Room",
    },
    {
      image: RoomFacilities9,
      description: "Slippers & Bathrobe",
    },
    {
      image: RoomFacilities10,
      description: "Mini Bar",
    },
    {
      image: RoomFacilities11,
      description: "Hair Dryer",
    },
    {
      image: RoomFacilities12,
      description: "Fully Equipped Bathroom",
    },
    {
      image: RoomFacilities13,
      description: "Laundry Service",
    },
  ];
   const extra =[
    {
      image:Extra1,
      description:'Transfer',
    },
    {
      image:Extra2,
      description:'Laundry Service',
    },
    {
      image:Extra3,
      description:'Ironing Service',
    },
    {
      image:Extra4,
      description:'Excursion And Tour Arrangement Services',
    },
    {
      image:Extra5,
      description:'Event Planning',
    },
    {
      image:Extra6,
      description:'Ticket Reservations',
    },
    {
      image:Extra7,
      description:'Concierge Service',
    },
    {
      image:Extra8,
      description:'Translation Service',
    },
    {
      image:Extra9,
      description:'Postal Services',
    },
   ]
  const dining = [
    {
      image: Dining1,
      description: "Breakfast Restaunrant",
    },
    {
      image: Dining2,
      description: 'Restaurant "Tiflis Veranda"',
    },
    {
      image: Dining3,
      description: "Tiflis Verandas Summer Lounge-Bar",
    },
  ];
  return (
    <div className="facilities">
      <div className="background_img_container">
        <img className="background_img" src={Background} alt="" />
      </div>
      <p className="title">General Facilities</p>
      <div className="container">
        {generalFacilities.map((element, index) => {
          return (
            <div key={index} className="img_description_container">
              <img className="img" src={element.image} alt="" />
              <p className="description">{element.description}</p>
            </div>
          );
        })}
      </div>
      <p className="title">Room Facilities</p>
      <div className="container">
        {RoomFacilities.map((element, index) => {
          return (
            <div key={index} className="img_description_container">
              <img className="img" src={element.image} alt="" />
              <p className="description">{element.description}</p>
            </div>
          );
        })}
      </div>
      <p className="title">Dining Services</p>
      <div className="container">
        {dining.map((element, index) => {
          return (
            <div key={index} className="img_description_container">
              <img className="img" src={element.image} alt="" />
              <p className="description">{element.description}</p>
            </div>
          );
        })}
      </div>
      <p className="title">Extra Services</p>
      <div className="container">
        {extra.map((element, index) => {
          return (
            <div key={index} className="img_description_container">
              <img className="img" src={element.image} alt="" />
              <p className="description">{element.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Facilities;
