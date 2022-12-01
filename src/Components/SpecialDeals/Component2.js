import React from "react";
import "./specialDeal.css";
import {useEffect} from 'react'
import { useContext } from "react";
import { bookingContext } from "../Pages/Pages";
import Booking from "../Booking/Booking";
function Component2() {
  const { bookNow, setBookNow } = useContext(bookingContext);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      {bookNow ? (
        <Booking />
      ) : (
        <>
          {" "}
          <p className="component_title">Direct Booking Discount</p>
          <p className="component_text">
            Spend spring days at{" "}
            <span style={{ fontWeight: "bold" }}>Tiflis Palace Hotel</span>{" "}
            <br /> <br /> Book room from our website and receive a -10% discount
            For Booking{" "}
            <span style={{textDecoration:'underline',fontWeight:'bold', cursor:'pointer'}} onClick={() => setBookNow(true)}>click here.</span> <br />{" "}
            Available from 01/01/2022 to 15/04/2022
          </p>
        </>
      )}
    </div>
  );
}

export default Component2;
