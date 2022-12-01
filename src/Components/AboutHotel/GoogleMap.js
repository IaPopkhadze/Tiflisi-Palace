import React from 'react'
import './about.css'
function GoogleMap() {
  return (
    <div style={{margin:'2rem', borderRadius:'2rem', overflow:'hidden', boxShadow: '0 0 10px 5px grey'}} className='google_map'>
       <iframe style={{width:'100%', height:'300px'}} src="https://maps.google.com/maps?width=1025&amp;height=273&amp;hl=en&amp;q=tiflisi palace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  )
}

export default GoogleMap