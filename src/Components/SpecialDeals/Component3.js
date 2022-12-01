import React from "react";
import "./specialDeal.css";
import {useEffect} from 'react'
function Component3() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <p className="component_title">Coffee Break</p>
      <p className="component_text">
        It's time for a delicious coffee break! <br /> <br /> Order any dessert from the menu
        from 4 pm to 6 pm and get your coffee for free Offer is available from
        17/01/2022 to 15/04/2022
      </p>
    </div>
  );
}

export default Component3;
