import React from "react";
import "./gallery.css";
import GalleryModal from "./GalleryModal";
import GalleryHall1 from "./GalleryImages/galleryHall1.jpg";
import GalleryHall4 from "./GalleryImages/galleryHall4.jpg";
import GalleryHall3 from "./GalleryImages/galleryHall3.jpg";
import { useState,useEffect } from "react";
function GalleryComponent4({
  galleryModal,
  setGalleryModal,
  setGuessComponent,
}) {
  const imageList = [
    GalleryHall1,GalleryHall4,GalleryHall3
  ];
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
          <h1 className="galleryComponentTitle">Conference Hall</h1>
          <p className="galleryComponentText">
            Tiflis Palace provides perfect environment for any kind of Business
            Meeting. Hotel Tiflis Palace features fully equipped, spacious
            Conference Hall, for up to 110 people and a Meeting Room for up to
            10 people.
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

export default GalleryComponent4;
