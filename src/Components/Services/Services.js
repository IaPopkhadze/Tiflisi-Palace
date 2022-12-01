import React from "react";
import "./services.css";
import Background from "./ServiceImages/background.jpg";
import { useEffect } from "react";
function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="services">
      <div className="background">
        <img className="background_img" src={Background} alt="" />
      </div>
      <p className="title">Transfer</p>
      <p className="service_text">
        We are offering pick up service from the airport and transportation to
        the hotel. <br /> <br /> Contact us for details: +995 32 2 000 245
      </p>
    </div>
  );
}

export default Services;
