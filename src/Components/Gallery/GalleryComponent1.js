import React from "react";
import "./gallery.css";
import GalleryModal from "./GalleryModal";
import GalleryHotel1 from "./GalleryImages/galleryHotel1.jpg";
import GalleryHotel2 from "./GalleryImages/galleryHotel2.jpg";
import GalleryHotel3 from "./GalleryImages/galleryHotel3.jpg";
import GalleryHotel4 from "./GalleryImages/galleryHotel4.jpg";
import GalleryHotel5 from "./GalleryImages/galleryHotel5.jpg";
import GalleryHotel6 from "./GalleryImages/galleryHotel6.jpg";
import { useState,useEffect } from "react";



function GalleryComponent1({
  galleryModal,
  setGalleryModal,
  setGuessComponent,
}) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const imageList = [
    GalleryHotel1,
    GalleryHotel2,
    GalleryHotel3,
    GalleryHotel4,
    GalleryHotel5,
    GalleryHotel6,
  ];
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
          <h1 className="galleryComponentTitle">Hotel</h1>
          <p className="galleryComponentText">
            Tiflis Palace's architecture reflects the ancient style, traditions
            and history of the old Tiflis and the Meidan square, emphasizing its
            unique location. <br /> The interior of Tiflis Palace is a perfect
            combination of discreet luxury, calm colors and modernity with a
            light touch of oriental style characterized for the ancient Tbilisi.
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

export default GalleryComponent1;
