import React from "react";
import "./Header.css";
import Flag from "./HeaderImages/georgiaIcon.png";
import Gloria from "./HeaderImages/gloria.svg";
import { BsClock } from "react-icons/bs";
import { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(" ");
  const [celsius, setCelsius] = useState(0);
 const [logoActivation,setLogoActivation]=useState('logo1');
 
  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      let hours;
      let minutes;
      hours = today.getHours();
      minutes = today.getMinutes();
      hours = ("0" + hours).slice(-2);
      minutes = ("0" + minutes).slice(-2);
      const time = hours + ":" + minutes;

      // const time = today.getHours() + ":" + today.getMinutes();

      setTime(time);
    }, 1000);

    const fetchCelsius = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=8e444f7fd3471ae98b6dbd37670fa08d`
      );

      const data = await response.json();
      console.log(data);
      setCelsius((data.main.temp - 273.15).toFixed(0));
    };
    fetchCelsius();

    // return () => {
    //   clearInterval();
    // };
  }, []);

  return (
    <div className="header_container">
      <div className="header_left_side">
        <div className="tiflisi_palace" onClick={()=>{setLogoActivation('logo1')}} id={logoActivation==='logo1'?'logoActivation':null}>
          <div className="flag_image_container">
            <img className="flag_image" src={Flag} alt="" />
          </div>
          <div className="tiflisi_palace_text" >Tiflisi Palace</div>
        </div>
        <div className="grand_gloria"  onClick={()=>{setLogoActivation('logo2')}} id={logoActivation==='logo2'?'logoActivation':null}>
          <div className="grand_gloria_image_container">
            <img className="grand_gloria_image" src={Gloria} alt="" />
          </div>
          <div className="grand_gloria_text">Grand Gloria</div>
        </div>
      </div>
      <div className="header_right_side">
        <div className="clock_icon">
          <BsClock />
        </div>
        <div className="current_time">{time}</div>
        <div className="celsius">{celsius}&deg;C</div>
        <div className="languages">
          <div className="en">EN</div>
          <div className="ge">GE</div>
          <div className="ru">RU</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
