import React from "react";
import "./navigationBar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import AboutHotel from "../AboutHotel/AboutHotel";
import Gallery from "../Gallery/Gallery";
import Rooms from "../Rooms/Rooms";
import Events from "../Events/Events";
import Restaurants from "../Restaurants/Restaurants";
import Facilities from "../Facilities/Facilities";
import Services from "../Services/Services";
import SpecialDeals from "../SpecialDeals/SpecialDeals";
import Contacts from "../Contacts/Contacts";
import navigationBarLogo from "./NavigationImage/navigationBarLogo.svg";
import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import Booking from '../Booking/Booking'
import { VscChromeClose } from "react-icons/vsc";
import {useContext} from 'react'
import {bookingContext} from '../Pages/Pages'



function NavigationBar() {
  const {chooseComponent,setChooseComponent, bookNow, setBookNow } = useContext(bookingContext);

  const [navBarActivation, setNavBarActivation]=useState(''); 
  const [burgerBarActivation,setBurgerBarActivation]=useState(false)
  return (
    <>
      <BrowserRouter>
        <div className="navigation_bar_container">
          <nav className="navigation_bar">
            <ul>
            <li><div className="navigation_hamburger_menu">
              <  GiHamburgerMenu onClick={()=>setBurgerBarActivation(true)}/>
            </div></li>        
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('home');setBookNow(false);setChooseComponent(null)}} id={navBarActivation==='home'?'navBarActivation':null} to="/">Home</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('about');setBookNow(false)}} id={navBarActivation ==='about'?'navBarActivation':null} to="/aboutHotel">About Hotel</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('gallery');setBookNow(false)}} id={navBarActivation==='gallery'?'navBarActivation':null} to="/gallery">Gallery</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('rooms');setBookNow(false)}} id={navBarActivation==='rooms'?'navBarActivation':null} to="/rooms">Rooms</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('restaurant');setBookNow(false)}} id={navBarActivation==='restaurant'?'navBarActivation':null} to="/restaurants">Restaurants</Link></li>
              <li> <img className="navigationBarLogo" src={navigationBarLogo} alt="" /></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('events');setBookNow(false)}} id={navBarActivation==='events'?'navBarActivation':null} to="/events">Events</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('facilities');setBookNow(false)}} id={navBarActivation==='facilities'?'navBarActivation':null} to="/facilities">Facilities</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('services');setBookNow(false)}} id={navBarActivation==='services'?'navBarActivation':null} to="/services">Services</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('specialDeal');setBookNow(false)}} id={navBarActivation==='specialDeal'?'navBarActivation':null} to="/specialDeals">Special Deals</Link></li>
              <li><Link  className="listItem"  onClick={()=>{setNavBarActivation('contact');setBookNow(false)}} id={navBarActivation==='contact'?'navBarActivation':null}  to="contacts">Contacts</Link></li>
              <li> <button onClick={()=>setBookNow(true)} className="navigation_bookNow_btn">Book Now</button></li>
            </ul>
          </nav>
        </div>
        {/* <div className="hamburger_menu">
        <VscChromeClose className="closingIcon"/>
        <div className="burger_bar">
          <nav>
            <ul>
            <li><Link className="listItem"  onClick={()=>{setNavBarActivation('home');setBookNow(false);setChooseComponent(null)}} id={navBarActivation==='home'?'navBarActivation':null} to="/">Home</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('about');setBookNow(false)}} id={navBarActivation ==='about'?'navBarActivation':null} to="/aboutHotel">About Hotel</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('gallery');setBookNow(false)}} id={navBarActivation==='gallery'?'navBarActivation':null} to="/gallery">Gallery</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('rooms');setBookNow(false)}} id={navBarActivation==='rooms'?'navBarActivation':null} to="/rooms">Rooms</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('restaurant');setBookNow(false)}} id={navBarActivation==='restaurant'?'navBarActivation':null} to="/restaurants">Restaurants</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('events');setBookNow(false)}} id={navBarActivation==='events'?'navBarActivation':null} to="/events">Events</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('facilities');setBookNow(false)}} id={navBarActivation==='facilities'?'navBarActivation':null} to="/facilities">Facilities</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('services');setBookNow(false)}} id={navBarActivation==='services'?'navBarActivation':null} to="/services">Services</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('specialDeal');setBookNow(false)}} id={navBarActivation==='specialDeal'?'navBarActivation':null} to="/specialDeals">Special Deals</Link></li>
              <li><Link  className="listItem"  onClick={()=>{setNavBarActivation('contact');setBookNow(false)}} id={navBarActivation==='contact'?'navBarActivation':null}  to="contacts">Contacts</Link></li>
            </ul>
          </nav>
        </div>
        </div> */}
        {burgerBarActivation?(<>     <div className="hamburger_menu">
        <VscChromeClose onClick={()=>setBurgerBarActivation(false)} className="closingIcon"/>
        <div className="burger_bar">
          <nav>
            <ul>
            <li><Link className="listItem"  onClick={()=>{setNavBarActivation('home');setBookNow(false);setChooseComponent(null);setBurgerBarActivation(false)}} id={navBarActivation==='home'?'navBarActivation':null} to="/">Home</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('about');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation ==='about'?'navBarActivation':null} to="/aboutHotel">About Hotel</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('gallery');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='gallery'?'navBarActivation':null} to="/gallery">Gallery</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('rooms');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='rooms'?'navBarActivation':null} to="/rooms">Rooms</Link></li>
              <li> <Link className="listItem"  onClick={()=>{setNavBarActivation('restaurant');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='restaurant'?'navBarActivation':null} to="/restaurants">Restaurants</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('events');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='events'?'navBarActivation':null} to="/events">Events</Link></li>
              <li>  <Link className="listItem"  onClick={()=>{setNavBarActivation('facilities');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='facilities'?'navBarActivation':null} to="/facilities">Facilities</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('services');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='services'?'navBarActivation':null} to="/services">Services</Link></li>
              <li><Link className="listItem"  onClick={()=>{setNavBarActivation('specialDeal');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='specialDeal'?'navBarActivation':null} to="/specialDeals">Special Deals</Link></li>
              <li><Link  className="listItem"  onClick={()=>{setNavBarActivation('contact');setBookNow(false);setBurgerBarActivation(false)}} id={navBarActivation==='contact'?'navBarActivation':null}  to="contacts">Contacts</Link></li>
            </ul>
          </nav>
        </div>
        </div></>):null}
        
          {bookNow?(<><Booking/> </>):(<>  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutHotel" element={<AboutHotel />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/SpecialDeals" element={<SpecialDeals />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes></>)}

       
      </BrowserRouter>
    </>
  );
}

export default NavigationBar;
