import React from "react";
import "./contact.css";
import { useEffect } from "react";
import Background from "./ContactImages/Background.jpg";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, useRef } from "react";
function Contacts() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [successful, setSuccessful] = useState(false);

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleSubmit = () => {
    if (name.length == 0) {
      nameRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      nameRef.current.style.background = "white";
    }
    if (mail.length == 0) {
      mailRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      mailRef.current.style.background = "white";
    }
    if (textArea.length == 0) {
      textAreaRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      textAreaRef.current.style.background = "white";
    }
    setTimeout(() => {
      if (name.length == 0 || mail.length == 0 || textArea.length == 0) {
        alert("Please fill all necessary fields.");
      }
    }, 500);
  };

  const handleSuccessful = () => {
    if (name.length > 0 && mail.length > 0 && textArea.length > 0) {
      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(false);
      }, 3000);
    }
  };
  return (
    <div className="contact">
      <div className="background">
        <img className="background_img" src={Background} alt="" />
      </div>
      <p className="title">Contact Information</p>

      <div className="contact_content_container">
        <div className="box_1">
          <div className="box_1_content">
            <p>
              <BsTelephoneFill className="icons" />
              +995 32 2 000 245
            </p>
            <p>
              <IoMdMail className="icons" />
              reservation@tiflisipalace.ge
            </p>
            <p>
              <MdLocationPin className="icons" />3 V.Gorgasali street, Tbilisi,
              Old Tbilisi, 0105, Georgia{" "}
            </p>
          </div>
        </div>
        <div className="box_2">
          <div className="name">
            <p>Your Name *</p>
            <input
              ref={nameRef}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <p>Your E-mail : *</p>
            <input
              ref={mailRef}
              onChange={(e) => setMail(e.target.value)}
              type="text"
            />
          </div>
          <div className="text">
            <p>Your Mail: *</p>
            <textarea
              ref={textAreaRef}
              onChange={(e) => setTextArea(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            className="send"
            onClick={() => {
              handleSubmit();
              handleSuccessful();
            }}
          >
            Send
          </button>
          {successful ? (
            <p className="successful">
              <AiOutlineCheck />
              Message sent successfully !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
