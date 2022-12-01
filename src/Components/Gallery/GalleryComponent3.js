import React from "react";
import "./gallery.css";
import GalleryModal from "./GalleryModal";
import GalleryVeranda1 from "./GalleryImages/galleryVeranda1.jpg";
import GalleryVeranda2 from "./GalleryImages/galleryVeranda2.jpg";
import GalleryVeranda3 from "./GalleryImages/galleryVeranda3.jpg";
import GalleryVeranda4 from "./GalleryImages/galleryVeranda4.jpg";
import GalleryVeranda5 from "./GalleryImages/galleryVeranda5.jpg";
import GalleryVeranda6 from "./GalleryImages/galleryVeranda6.jpg";
import GalleryVeranda7 from "./GalleryImages/galleryVeranda7.jpg";
import GalleryVeranda8 from "./GalleryImages/galleryVeranda8.jpg";
import GalleryVeranda9 from "./GalleryImages/galleryVeranda9.jpg";
import GalleryVeranda10 from "./GalleryImages/galleryVeranda10.jpg";
import { useState,useEffect } from "react";
function GalleryComponent3({
  galleryModal,
  setGalleryModal,
  setGuessComponent,
}) {
  const imageList = [
    GalleryVeranda1,
    GalleryVeranda2,
    GalleryVeranda3,
    GalleryVeranda4,
    GalleryVeranda5,
    GalleryVeranda6,
    GalleryVeranda7,
    GalleryVeranda8,
    GalleryVeranda9,
    GalleryVeranda10,
  ];
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [modalImageCurrentIndex, setModalImageCurrentIndex] = useState(null);
  return (
    <div className="gallery_component_1">
      {galleryModal ? (
        <GalleryModal
          modalImageCurrentIndex={modalImageCurrentIndex}
          setModalImageCurrentIndex={setModalImageCurrentIndex}
          imageList={imageList}
          setGalleryModal={setGalleryModal}
        />
      ) : (
        <>
          {" "}
          <h1 className="galleryComponentTitle">Tiflis Veranda</h1>
          <p className="galleryComponentText">
            Tiflis Veranda is Ready to Serve its Guests from 11:00 am to 02:00
            am Every Day. Enjoy great music, breathtaking views, delightful
            brand cocktails and exquisite dishes of local and international
            cuisine.
          </p>
          <div className="galleryComponentImages">
            {imageList.map((element, index) => {
              return (
                <>
                  {" "}
                  <div
                    onClick={() => {
                      setGalleryModal(true);
                      setModalImageCurrentIndex(index);
                    }}
                    key={index}
                    className="galleryEachImageContainer"
                  >
                    <img className="galleryEachImage" src={element} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="gallery_btn_container">
            <button
              onClick={() => setGuessComponent(null)}
              className="go_back_btn"
            >
              {" "}
              {"<< Go Back"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default GalleryComponent3;
