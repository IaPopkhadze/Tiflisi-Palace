import React from "react";
import "./about.css";
import HotelAwardImg from "./AboutImages/hotelAwardImg.png";
import HotelAwardImg3 from "./AboutImages/hotelAwardImg3.png";
import {useEffect} from 'react'
function HotelAwards({setHotelAwards}) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="hotel_awards">
      <div className="hotel_award_img_container">
        <img className="hotel_award_img" src={HotelAwardImg} alt="" />
      </div>
      <div className="hotel_award_content">
        <p style={{ fontSize: "2rem", textAlign: "center" }}>Hotel Awards</p>
        <div className="hotel_award_description">
          <div className="hotel_award_description_2">
            <img className="floating" src={HotelAwardImg3} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              nostrum quos officia dicta excepturi tempore reiciendis itaque
              eveniet laudantium aperiam, exercitationem repellat accusantium
              sed. Fugiat repudiandae autem numquam nisi magni nihil repellendus
              illum nulla nobis velit quod vitae, earum deserunt labore ullam
              laudantium in sint iusto, voluptatum sunt assumenda nesciunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              id. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Numquam quae quo a accusantium, corporis hic consectetur sint
              omnis possimus aliquam adipisci obcaecati nam dignissimos
              reprehenderit ullam totam ducimus excepturi officia!
            </p>
          </div>
          <div className="hotel_award_description_2">
            <img
              style={{ float: "left", padding: "2rem" }}
              src={HotelAwardImg3}
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              nostrum quos officia dicta excepturi tempore reiciendis itaque
              eveniet laudantium aperiam, exercitationem repellat accusantium
              sed. Fugiat repudiandae autem numquam nisi magni nihil repellendus
              illum nulla nobis velit quod vitae, earum deserunt labore ullam
              laudantium in sint iusto, voluptatum sunt assumenda nesciunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              id. <br /> <br /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Excepturi necessitatibus animi molestias, libero
              quibusdam expedita cupiditate aperiam iure, eveniet, impedit
              alias. Sequi quo dolores placeat repellat ipsum necessitatibus
              quia voluptas voluptates fugiat eius, quam asperiores odit?
              Obcaecati illum magnam omnis.
            </p>
          </div>
        </div>
        <button  className="go_back_btn" onClick={()=>setHotelAwards(false)}>Go Back</button>
      </div>
    </div>
  );
}

export default HotelAwards;
