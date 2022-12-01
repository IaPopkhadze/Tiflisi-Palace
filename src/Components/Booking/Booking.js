import React from "react";
import { useState, useRef,useEffect } from "react";
import "./booking.css";
import BookingImg from "./bookingImg.jpg";
function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const [childAmount, setChildAmount] = useState(0);
  const [chilList, setChildList] = useState([]);

  const [successful, setSuccessful] = useState(false);

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  // Thank you for request and interest to ”Tiflis Palace”. Our team will contact you about reservation details shortly.
  
  const handleIncrease = () => {
    if (childAmount < 10) {
      setChildAmount(childAmount + 1);
      setChildList([...chilList, []]);
    }
  };
  const handleDecrease = () => {
    if (childAmount < 1) {
      setChildAmount(0);
    } else {
      setChildAmount(childAmount - 1);
    }
    chilList.shift();
  };

  const handleErrors = () => {
    if (name.length == 0) {
      nameRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      nameRef.current.style.background = "white";
    }
    if (surname.length == 0) {
      surnameRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      surnameRef.current.style.background = "white";
    }
    if (email.length == 0) {
      emailRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      emailRef.current.style.background = "white";
    }
    if (number.length == 0) {
      numberRef.current.style.background = "rgb(255, 118, 118)";
    } else {
      numberRef.current.style.background = "white";
    }
    setTimeout(() => {
      if (
        name.length == 0 ||
        surname.length == 0 ||
        email.length == 0 ||
        number.length == 0
      ) {
        alert("Please fill all necessary fields.");
      }
    }, 500);
    if(name.length>0 && surname.length>0 && email.length>0 && number.length>0){
      setSuccessful(true)
    }
  };
  useEffect(()=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  })
  return (
    <div className="booking">
      <div className="booking_img_container">
        <img className="booking_img" src={BookingImg} alt="" />
      </div>
      {successful?(<div className="booking_hidden_content"><p>Thank you for request and interest to ”Tiflis Palace”. Our team will contact you about reservation details shortly.</p></div>):(<>      <div className="book_room_section">
        <p className="booking_title">Book Room</p>
        <div className="book_form">
          <div className="book_form_left_side">
            <div className="form_container">
              <p>
                Your Name: <span>*</span>
              </p>
              <input
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
                className="booking_input"
                type="text"
              />
            </div>
            <div className="form_container">
              <p>
                E-Mail: <span>*</span>
              </p>
              <input
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                className="booking_input"
                type="email"
              />
            </div>
            <div className="form_container">
              <p>
                Arrival/Departure: <span>*</span>
              </p>
              <input className="booking_input" type="date" />
            </div>
            <div className="form_container">
              <p>
                Adult: <span>*</span>
              </p>
              <select
                style={{ height: "29px", border: "2px solid #C2B6A8" }}
                className="booking_input"
                name=""
                id=""
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>
          </div>
          <div className="book_form_right_side">
            <div className="form_container">
              <p>
                Your Surname: <span>*</span>
              </p>
              <input
                ref={surnameRef}
                onChange={(e) => setSurname(e.target.value)}
                className="booking_input"
                type="text"
              />
            </div>
            <div className="form_container">
              <p>
                Phone Number: <span>*</span>
              </p>
              <input
                ref={numberRef}
                onChange={(e) => setNumber(e.target.value)}
                className="booking_input"
                type="text"
              />
            </div>
            <div className="form_container">
              <p>
                Room Type: <span>*</span>
              </p>
              <select
                style={{ height: "29px", border: "2px solid #C2B6A8" }}
                className="booking_input"
                name=""
                id=""
              >
                <option value="">Standard</option>
                <option value="">Dexule Room</option>
                <option value="">Superior</option>
                <option value="">Premium Superios</option>
                <option value="">Premium Suite</option>
                <option value="">Executive Suite</option>
              </select>
            </div>
            <div className="form_container">
              <p>Child: </p>
              <div className="child_amount_container">
                <div onClick={handleDecrease} className="decrease">
                  -
                </div>
                <div className="booking_child">{childAmount}</div>
                <div onClick={handleIncrease} className="increase">
                  +
                </div>
              </div>
              <div className="children">
                {chilList.map((element, index) => {
                  return (
                    <div className="each_child" key={index}>
                      <p>Child Age: * </p>
                      <input type="number" min="1" max="19" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleErrors} className="book_btn">
          Book Now
        </button>
      </div></>)}
     
    </div>
  );
}

export default Booking;
