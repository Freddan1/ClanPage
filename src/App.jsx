import React from "react";
import './App.css'
import BangerContent from './components/BangerContent'
import Banner from './components/Banner'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Members from './components/Members'
import Navbar from './components/Navbar'

function App() {
  const handleScroll = (sectionId) => {
    console.log("Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      console.log("Element found:", element);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
    <div className="wrapper">
     <Navbar handleScroll={handleScroll}/>
     <Banner id="home"/>
     <Members id="members"/>
     <BangerContent id="bangerContent"/>
     <ContactUs id="contact"/>
     <Footer/>
    </div> 
    </>
  )
}

export default App
