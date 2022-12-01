import React from "react";
import "./specialDeal.css";
import{useEffect} from 'react'
function Component1() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="conponent1">
      <p className="component_title">New Year Gala Dinner Package</p>
      <p className="component_text">
        Be special on this One & Only night! <br /> <br /> It's time to forget the past and
        celebrate the beginning of a new life at Tiflis Veranda. <br /> <br /> <span style={{fontWeight:'bold'}}>New Year Gala
        Dinner program package includes: </span><br /> <br /> Welcome drinks and canapé at Tiflis
        Palace, starting at 8 pm. <br /> Welcome to Tiflis Veranda & Gala Dinner
        (three-course menu), starting at 9 pm. <br /> Live music - Band "The Five" at
        the stage, starting from 9:30 pm. <br /> Celebrate New Year together at Tiflis
        Veranda with fireworks, cake and stunning views of Tbilisi, starting at
        12am. <br /> Accommodating at Tiflis Palace Hotel <br /> Sunday brunch on the 1st of
        January, 2023, starting from 09:30 am. <br /> <br /> Don't miss your chance to book an
        early bird and get a 10% discount for a New Year's package, where you
        will spend an unforgettable evening enjoying the New Year's spirit of
        old Tbilisi <br />
        <br /> For reservations and information feel free to contact: +995
        555 68 89 88 | 032 2 000 245 | +995 593 717 411 | +995 577 097 271 <br />
        Whatsapp available
      </p>
    </div>
  );
}

export default Component1;
