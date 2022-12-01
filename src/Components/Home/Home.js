import React from "react";
import { useState, useEffect } from "react";

import "./home.css";

import Background1 from "./HomeImages/background1.jpg";
import Background2 from "./HomeImages/background2.jpg";
import Background3 from "./HomeImages/background3.jpg";
import Background4 from "./HomeImages/background4.jpg";

import HomeImage1 from "./HomeImages/homePicture1.jpg";
import HomeImage2 from "./HomeImages/homePicture2.jpg";
import HomeImage3 from "./HomeImages/homePicture3.jpg";

import Slide1 from "./HomeImages/slide1.jpg";
import Slide2 from "./HomeImages/slide2.jpg";
import Slide3 from "./HomeImages/slide3.jpg";
import Slide4 from "./HomeImages/slide4.jpg";

import { useContext } from "react";
import { bookingContext } from "../Pages/Pages";

import Restaurants from "../Restaurants/Restaurants";
import Events from "../Events/Events";
import Rooms from "../Rooms/Rooms";
import AboutHotel from "../AboutHotel/AboutHotel";
function Home() {
  const {chooseComponent,setChooseComponent, bookNow, setBookNow } = useContext(bookingContext);
  const homeSection3Data=[
    {
      id:1,
      image: HomeImage1,
      title: 'Restaurant',
      text:'Hotel Has Great Dining Facilities,  Featuring...',
      link:'restaurant'

    },
    {
      id:2,
      image: HomeImage2,
      title: 'Conference & Banqueting Services',
      text:'Trust Your Business Event to Our Professionals!',
      link:'events'
    },
    {
      id:3,
      image: HomeImage3,
      title: 'Rooms & Suits',
      text:'Hotel Tiflis Palace Offers 6 Categories of Elegantly Designed, Comfortable Rooms.',
      link:'rooms'
    },
 
  ]
  const backgroundImageList = [
    Background1,
    Background2,
    Background3,
    Background4,
  ];

  const sliderImages = [Slide1, Slide2, Slide3, Slide4];
  const sliderTitle = [
    "Ready fo Summer ?",
    "The Best Location",
    "Most Spectacular Views",
    "Luxury Comfort & High Quality of Service",
  ];
  const sliderText = [
    "Are you ready for the summer? Book a room in our hotel thru our website and receive 10% discount. spend your summer in the best place!",
    "Tiflis Palace has an ideal location in the heart of Old City Centre, the legendary place of citys foundation. It is easily reachable from different districts of the city Considering the advantages of such location, hotel Tiflis Palace is in an immediate proximity with the most popular tourist attractions, and the widest choice of restaurants, cafes and art galleries, museums and parks.",
    "Tiflis Palace offers  the best picturesque and breathtaking views available in Tbilisi. Surrounded by the most important historical and cultural heritages like: the Narikala Fortress, the Metekhi Church and the famous Sulphure Baths, old style Georgian Houses,  hotel features the most beautiful and stunning, unforgettable panoramic views.  ",
    "Tiflis Palace  is a Luxurious Boutique Hotel offering an international standard of service quality, elegant and comfortable luxurious rooms, Great Conference facilities and Culinary Venues.Our qualified and attentive professionals are ready to assist Guests in any issue.  All these make our Hotel an ideal choice for businessmen and individual travelers. ",
  ];

  const [currentImage, setCurrentImage] = useState(backgroundImageList[0]);
  const [currentSlideImage, setCurrentSlideImage] = useState(sliderImages[0]);
  const [currentSliderTitle, setCurrentSliderTitle] = useState(sliderTitle[0]);
  const [currentSliderText, setCurrentSliderText] = useState(sliderText[0]);
  const [lineActivation, setLineActivation] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * 4);
      setCurrentImage(backgroundImageList[randomIndex]);
      setCurrentSlideImage(sliderImages[randomIndex]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(lineActivation);
    let index = 0;
    let intervalId = setInterval(() => {
      if (index < 4) {
        setCurrentSlideImage(sliderImages[index]);
        setCurrentSliderTitle(sliderTitle[index]);
        setCurrentSliderText(sliderText[index]);
        setLineActivation(index);
        index++;
      } else {
        index = 0;
        setCurrentSlideImage(sliderImages[index]);
        setCurrentSliderTitle(sliderTitle[index]);
        setCurrentSliderText(sliderText[index]);
        setLineActivation(index);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
//  const [chooseComponent,setChooseComponent]=useState('')
  return (
    <>
    {(chooseComponent=='restaurant')?(<Restaurants/>):(chooseComponent=='events')?(<Events/>):(chooseComponent=='rooms')?(<Rooms/>):(chooseComponent=='aboutHotel')?(<AboutHotel/>):(<> <div className="home">
      <div className="home_section1">
        <div className="home_background_img_container">
          <img className="home_background_img" src={currentImage} alt="" />
        </div>

        <div className="greenBox">
          <p>Stay At Our Hotel</p>
          <button onClick={() => setBookNow(true)}>Book Now</button>
        </div>
      </div>
      <div className="home_section2">
        <p className="welcome_text">Welcome To The Palace Of Hospitality</p>
      </div>
      <div className="home_section3">
       {homeSection3Data.map((element,index)=>{
        return <div className="each_child_container">
          <img className="each_child_image" src={element.image} alt="" />
          <div className="black_overlay">
            <div className="white_overlay">
              <p className="section3_title">{element.title}</p>
               <div className="section3_line"></div>
               <p className="section3_text">{element.text}</p>
               <div onClick={()=>setChooseComponent(element.link)} className="readMore">Read More</div>
            </div>
          </div>
        </div>
       })}
      </div>
      <div className="home_section4">
        <p className="welcome_text">3 Reasons To Choose Us!</p>

        <div className="home_slider">
          <div className="home_slider_1">
            <p className="slider_title">{currentSliderTitle}</p>
            <p className="slider_content">{currentSliderText}</p>
            <button onClick={()=>setChooseComponent('aboutHotel')} className="slider_btn">Read More</button>
            <div className="fourLines">
              <div
                className={lineActivation === 0 ? "lineActivation" : null}
              ></div>
              <div
                className={lineActivation === 1 ? "lineActivation" : null}
              ></div>
              <div
                className={lineActivation === 2 ? "lineActivation" : null}
              ></div>
              <div
                className={lineActivation === 3 ? "lineActivation" : null}
              ></div>
            </div>
          </div>
          <div className="home_slider_2">
            <img className="homeSliderImage" src={currentSlideImage} alt="" />
          </div>
        </div>
      </div>
    </div></>)}
    </>
   
  );
}

export default Home;
