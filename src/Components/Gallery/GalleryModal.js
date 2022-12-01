import React from "react";
import "./gallery.css";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
function GalleryModal({modalImageCurrentIndex,setModalImageCurrentIndex, imageList, setGalleryModal }) {



  const handleIncreaseCurrentIndex = () => {
    if (modalImageCurrentIndex < imageList.length - 1) {
      setModalImageCurrentIndex(modalImageCurrentIndex + 1);
    } else {
      setModalImageCurrentIndex(0);
    }
  };
  const handleDecreaseCurrentIndex = () => {
    if (modalImageCurrentIndex > 0) {
      setModalImageCurrentIndex(modalImageCurrentIndex - 1);
    }else{
      setModalImageCurrentIndex(imageList.length-1)
    }
  };
  return (
    <div className="galleryModal">
      <div className="modal_container">
        <div className="modal_image_container">
          <img
            className="modal_image"
            src={imageList[modalImageCurrentIndex]}
            alt=""
          />
        </div>
        <div className="modal_arrow_container">
          <div className="modal_arrow">
            <SlArrowLeft onClick={handleDecreaseCurrentIndex} />
          </div>
          <div className="modal_arrow">
            <SlArrowRight onClick={handleIncreaseCurrentIndex} />
          </div>
        </div>
        <div
          onClick={() => setGalleryModal(false)}
          className="modal_close_icon"
        >
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
