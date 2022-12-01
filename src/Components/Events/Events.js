import React from "react";
import { useEffect } from "react";
import "./event.css";
import Background from './EventImages/Background.jpg'
function Events() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="events">
      <div className="background_container">
        <img className="background_img" src={Background} alt="" />
      </div>
      <p className="title">Conference & Banquet Service</p>
      <p className="description">
        Trust Your Business Event to Our Professionals!
      </p>
      <p className="text">
        Conference & Banquet Service Trust Your Business Event to Our
        Professionals! Fully equipped, spacious Conference Hall for up to 110
        people, Meeting Room for up to 10 people, great choice of delicious
        coffee and lunch breaks and assistance of attentive professionals are at
        your disposal.
      </p>
    </div>
  );
}

export default Events;
