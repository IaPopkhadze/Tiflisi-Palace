import React from "react";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import {useState} from 'react'
import {createContext} from 'react'


export const bookingContext=createContext(false);

function Pages() {
  const [bookNow,setBookNow]=useState(false);
  const [chooseComponent,setChooseComponent]=useState('')
  console.log('this is my :' +bookNow)
  return (
    <bookingContext.Provider value={{chooseComponent,setChooseComponent,bookNow,setBookNow}}>
      {bookNow?(<><NavigationBar />
      <Footer /></>):(<><Header />
      <NavigationBar />
      <Footer /></>)}

    </bookingContext.Provider>
  );
}

export default Pages;
