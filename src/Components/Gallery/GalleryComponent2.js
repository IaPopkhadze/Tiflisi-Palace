import React from "react";
import "./gallery.css";
import GalleryModal from "./GalleryModal";
import GalleryRoom1 from "./GalleryImages/galleryRoom1.jpg";
import GalleryRoom2 from "./GalleryImages/galleryRoom2.jpg";
import GalleryRoom3 from "./GalleryImages/galleryRoom3.jpg";
import GalleryRoom4 from "./GalleryImages/galleryRoom4.jpg";
import GalleryRoom5 from "./GalleryImages/galleryRoom5.jpg";
import GalleryRoom6 from "./GalleryImages/galleryRoom6.jpg";
import GalleryRoom7 from "./GalleryImages/galleryRoom7.jpg";
import GalleryRoom8 from "./GalleryImages/galleryRoom8.jpg";
import GalleryRoom9 from "./GalleryImages/GalleryRoom9.jpg";
import GalleryRoom10 from "./GalleryImages/GalleryRoom10.jpg";
import { useState,useEffect } from "react";
function GalleryComponent2({
  galleryModal,
  setGalleryModal,
  setGuessComponent,
}) {
  const imageList = [
    GalleryRoom1,
    GalleryRoom2,
    GalleryRoom3,
    GalleryRoom4,
    GalleryRoom5,
    GalleryRoom6,
    GalleryRoom7,
    GalleryRoom8,
    GalleryRoom9,
    GalleryRoom10,
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
          <h1 className="galleryComponentTitle">Rooms & Suites</h1>
          <p className="galleryComponentText">
          Tiflis Palace Offers 7 Categories of Elegantly Designed, Fully Equipped, Comfortable Rooms.
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

export default GalleryComponent2;




