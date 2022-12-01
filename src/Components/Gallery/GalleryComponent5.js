import React from "react";
import "./gallery.css";
import GalleryModal from "./GalleryModal";
import GalleryBreakfast1 from "./GalleryImages/galleryBreakfast1.jpg";
import GalleryBreakfast2 from "./GalleryImages/galleryBreakfast2.jpg";
import GalleryBreakfast3 from "./GalleryImages/galleryBreakfast3.jpg";
import GalleryBreakfast4 from "./GalleryImages/galleryBreakfast4.jpg";
import GalleryBreakfast5 from "./GalleryImages/galleryBreakfast5.jpg";
import GalleryBreakfast6 from "./GalleryImages/galleryBreakfast6.jpg";
import { useState,useEffect } from "react";
function GalleryComponent5({
  galleryModal,
  setGalleryModal,
  setGuessComponent,
}) {
  const imageList = [GalleryBreakfast1,GalleryBreakfast2,GalleryBreakfast3,GalleryBreakfast4,GalleryBreakfast5,GalleryBreakfast6];
  const [modalImageCurrentIndex, setModalImageCurrentIndex] = useState(null);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
          <h1 className="galleryComponentTitle">Breakfast</h1>
          <p className="galleryComponentText">
            Fresh Buffet Breakfast for our hotel guests is served, every morning
            from 07:00 am to 11:00 am. A healthy breakfast in a cozy atmosphere,
            offering a wide choice of delicious food and great selection of
            pastries, made in the Hotel’s own patisserie; variety of meat and
            cheese platters, fresh salads, selection of coffee, tea and fresh
            juice and many other dishes from Georgian and international cuisine,
            ensures the perfect start of your successful day.
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

export default GalleryComponent5;
