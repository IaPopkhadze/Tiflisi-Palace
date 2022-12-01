import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./footer.css";
import { useState } from "react";
import Logo1 from "./FooterImages/logo1.jpg";
import Logo2 from "./FooterImages/logo2.jpg";
import Logo3 from "./FooterImages/logo3.jpg";
import Logo4 from "./FooterImages/logo4.jpg";
import Logo5 from "./FooterImages/logo5.jpg";
import Logo6 from "./FooterImages/logo6.jpg";
import Logo7 from "./FooterImages/logo7.jpg";
import Logo8 from "./FooterImages/logo8.jpg";
import Logo9 from "./FooterImages/logo2.jpg";
import Logo10 from "./FooterImages/logo10.png";
import FooterImg from "./FooterImages/footerimage.jpg";
import FooterLogo from "./FooterImages/footerLogo.svg";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
function Footer() {
  const sliderImages = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="footer">
      <div className="subscribe">
        <p className="subscribe_title">Subscribe for Our Deals</p>
        <div className="sendingEmail">
          <input
            className="inputForEmail"
            type="email"
            placeholder="Type your email here"
          />
          <button className="send_btn">Send</button>
        </div>
      </div>
      <div className="logo_slider">
        <Slider {...settings}>
          {sliderImages.map((element, index) => {
            return (
              <div key={index}>
                <img src={element} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="footer_background_img_container">
        <img className="footer_background_img" src={FooterImg} alt="" />
        <div className="footer_overlay">
          <div className="footer_overlay_active">
            <div className="overlay_section1">
              <p className="booking_com">Booking.com</p>
              <div className="overlay_img_container">
                <img className="overlay_img" src={FooterLogo} alt="" />
              </div>
            </div>
            <div className="overlay_section2">
              <div className="overlay_section2_content">
                <p>+995 32 2 000 245</p>
                <p>3 Vakhtang Gorgasali St, Tbilisi 0105, Georgia</p>
                <p className="footer_gmail">reservation@tiflispalace.ge</p>
                <div className="footer_icons">
                  <a href="https://www.facebook.com/www.tiflispalace.ge/?fref=ts">
                    <CgFacebook />
                  </a>
                  <a href="https://www.linkedin.com/company/hotel-tiflis-palace/?trk=nav_account_sub_nav_company_admin">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com/channel/UCNcyNGzxK-l9iKljqUGrjOA">
                    <GrYoutube />
                  </a>
                </div>
              </div>
              <div className="overlay_section2_img1_container">
                <img className="overlay_section2_img1" src={Logo10} alt="" />
              </div>
              <div className="overlay_section2_img2_container">
                <img className="overlay_section2_img2" src={Logo5} alt="" />
              </div>
            </div>
            <div className="overlay_section3">
              <div className="overlay_section3_list">
                <a className="first_list_item" href="">
                  Privacy Policy
                </a>
                <a href="">Career</a>
                <a href="">Press releases</a>
                <a href="">Awards</a>
                <a href="">Useful Links</a>
                <a href="">Club Cards</a>
                <a href="">Terms of use</a>
                <a href="">Hotel Regulations</a>
                <a href="">For Travel Agencies</a>
              </div>
            </div>
          </div>

          <div className="footer_overlay_hidden">
            <p>+995 32 2 000 245</p>
            <p>3 Vakhtang Gorgasali St, Tbilisi 0105, Georgia</p>
            <p>reservation@tiflispalace.ge</p>
            <p>icons</p>
            <p>Privacy Policy</p>
            <p>Career</p>
            <p>Pressreleases</p>
            <p>Awards</p>
            <p>Useful Links</p>
            <p>Club Cards</p>
            <p>Terms of use</p>
            <p>Hotel Regulations</p>
            <p>For Travel Agencies</p>
          </div>
          <div className="overlay_section4">
            <div className="overlay_line"></div>
            <div className="ltd">
              <p>@2022-2022 Ltd "Tiflisi Palace". All rights reserved</p>
              <p>Created by Popkhadze Ia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
