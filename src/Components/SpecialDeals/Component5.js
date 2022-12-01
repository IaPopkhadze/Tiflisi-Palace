import React from 'react'
import "./specialDeal.css";
import {useEffect} from 'react'
function Component5() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <p className='component_title'>Come Again</p>
      <p className='component_text'>We have an amazing offer for you! Book a room for 2 times and receive 25% on third night, any time during the year</p>
    </div>
  )
}

export default Component5