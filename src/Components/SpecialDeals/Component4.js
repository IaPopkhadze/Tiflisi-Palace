import React from 'react'
import "./specialDeal.css";
import {useEffect} from 'react'
function Component4() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
       <p className='component_title'>Weekend Package</p>
       <p className='component_text'>We have a weekend offer for you! Book a room during the weekend and receive 10% at Tiflis palace and 10% discount at Tiflis Veranda.</p>
    </div>
  )
}

export default Component4