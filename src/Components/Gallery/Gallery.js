import React from "react";
import { useState,useEffect } from "react";
import "./gallery.css";
// import {createContext} from 'react'
import GalleryBackgroundImg from "./GalleryImages/GalleryBackgroundImg.jpg";
import GalleryImage1 from "./GalleryImages/GalleryImage1.jpg";
import GalleryImage2 from "./GalleryImages/GalleryImage2.jpg";
import GalleryImage3 from "./GalleryImages/GalleryImage3.jpg";
import GalleryImage4 from "./GalleryImages/GalleryImage4.jpg";
import GalleryImage5 from "./GalleryImages/GalleryImage5.jpg";



import GalleryComponent1 from "./GalleryComponent1";
import GalleryComponent2 from "./GalleryComponent2";
import GalleryComponent3 from "./GalleryComponent3";
import GalleryComponent4 from "./GalleryComponent4";
import GalleryComponent5 from "./GalleryComponent5";



function Gallery() {
  const [guessComponent, setGuessComponent] = useState(null);
   const [galleryModal, setGalleryModal]=useState(false);
 
  
    
  const galleryData = [
    {
      id: 1,
      title: "Hotel",
      image: GalleryImage1,
      content:
        "Tiflis Palaces architecture reflects the ancient style, traditions and history of the old Tiflis and the Meidan square, emphasizing its unique location.",

    },
    {
      id: 2,
      title: "Rooms & Suites",
      image: GalleryImage2,
      content:
        "Tiflis Palace Offers 7 Categories of Elegantly Designed, Fully Equipped, Comfortable Rooms.",
 
    },
    {
      id: 3,
      title: "Tiflis Veranda",
      image: GalleryImage3,
      content:
        "Tiflis Veranda is Ready to Serve its Guests from 11:00 am to 02:00 am Every Day.",
 
    },
    {
      id: 4,
      title: "Conference Hall",
      image: GalleryImage4,
      content:
        "Tiflis Palace provides perfect environment for any kind of Business Meeting.",
   
    },
    {
      id: 5,
      title: "Breakfast",
      image: GalleryImage5,
      content:
        "Fresh Buffet Breakfast for our hotel guests is served, every morning from 07:00 am to 11:00 am.",

    },
  ];
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
 
    <div className="gallery">
      <div className="gallery_background_img_container">
        <img
          className="gallery_background_img"
          src={GalleryBackgroundImg}
          alt=""
        />
      </div>
    
     
      {guessComponent == 1 ? (
        <GalleryComponent1 galleryModal={galleryModal}   setGalleryModal={setGalleryModal}  setGuessComponent={setGuessComponent} />
      ) : guessComponent == 2 ? (
        <GalleryComponent2 galleryModal={galleryModal}   setGalleryModal={setGalleryModal} setGuessComponent={setGuessComponent}/>
      ) : guessComponent == 3 ? (
        <GalleryComponent3 galleryModal={galleryModal}   setGalleryModal={setGalleryModal} setGuessComponent={setGuessComponent}/>
      ) : guessComponent == 4 ? (
        <GalleryComponent4 galleryModal={galleryModal}   setGalleryModal={setGalleryModal} setGuessComponent={setGuessComponent}/>
      ) : guessComponent == 5 ? (
        <GalleryComponent5 galleryModal={galleryModal}   setGalleryModal={setGalleryModal} setGuessComponent={setGuessComponent}/>
      ) : (<> <p className="gallery_title">Gallery Page</p>
      <div className="gallery_images">
        {galleryData.map((element) => {
          return (
            <div key={element.id} className="each_gallery_image_container">
              <img className="each_gallery_image" src={element.image} alt="" />
              <div className="gallery_full_overlay">
                <div className="gallery_image_overlay">
                  <p className="gallery_overlay_title">{element.title}</p>
                  <div className="gallery_overlay_line"></div>
                  <div className="gallery_overlay_content">
                    {element.content}
                  </div>
                  <div
                    onClick={() => setGuessComponent(element.id)}
                    className="gallery_overlay_btn"
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div></>)}

     
    </div>
  );
}

export default Gallery;
