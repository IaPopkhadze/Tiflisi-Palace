import React from 'react'
import "./restaurant.css";
import {useState,useEffect} from 'react'
import Img from './TiflisiVeranda1Images/TiflisiVerandaImg1.jpg'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
function VerandaModal({setCurrentIndex,setVerandaModal,imageList, currentIndex}) {
//  const [currentImage,setCurrentImage]=useState(imageList[currentIndex])
    const handleIncreaseIndex=()=>{
       
        if(currentIndex<imageList.length-1){
            setCurrentIndex(currentIndex+1)
        }else{
            setCurrentIndex(0)
        }
    }
     const handleDecreaseIndex=()=>{
       
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
        }else{
            setCurrentIndex(imageList.length-1)
        }
     }
     useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  return (
    <div className='verandaModal'>
        <div className='modalContent'>
          <div className="modal_img_container">
            <img className='modal_img' src={imageList[currentIndex]} alt="" />
          </div>
        </div>
        <div className="arrow_container">
            <div className="arrow" onClick={handleDecreaseIndex}>< SlArrowLeft/></div>
            <div className="arrow" onClick={handleIncreaseIndex}><SlArrowRight/></div>
        </div>
        <div onClick={()=>setVerandaModal(false)} className="close_btn">< VscChromeClose/></div>
    </div>
  )
}

export default VerandaModal